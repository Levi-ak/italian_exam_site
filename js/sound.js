/* ============================================================
 * sound.js — 集中式音效管理器（Web Audio API 实时合成，无外部音频）
 *
 * 设计要点：
 *  - 单一、懒创建的 AudioContext，仅在用户手势内创建/恢复（尊重自动播放限制）；
 *     绝不在页面加载时自动播放任何声音。
 *  - 所有音色用短包络（attack/decay）合成，柔和不刺耳，适合学习场景。
 *  - 设置（总开关 / 音量 / 5 类分组开关）持久化到 localStorage 的独立键
 *     "ita_exam_sound_v1"，不触碰已有的进度键 "ita_exam_progress_v1"。
 *  - 浏览器不支持 Web Audio 时优雅降级为“静默 no-op”，不抛错、不产生未处理异常。
 *
 * 生成代码集中在此文件；app.js / practice.js 只做“在正确事件点调用”。
 * ============================================================ */
(function (root) {
  "use strict";

  var KEY = "ita_exam_sound_v1";

  var DEFAULTS = {
    enabled: true,        // 总开关
    volume: 0.55,         // 0..1
    ui: true,             // 界面音效（点击 / 选择 / 切换）
    correct: true,        // 答对
    incorrect: true,      // 答错
    explanation: true,    // 讲解与完成（讲解打开 / 读完解析 / 完成主题 / 完成练习）
    exam: true            // 模考与结果
  };
  var CAT_KEYS = ["ui", "correct", "incorrect", "explanation", "exam"];

  // 每个音效归属的分组（用于分组开关）
  var CATEGORY = {
    click: "ui", selection: "ui", navTick: "ui",
    correct: "correct",
    incorrect: "incorrect",
    explanationOpen: "explanation",
    explanationComplete: "explanation",
    topicComplete: "explanation",
    sessionComplete: "explanation",
    mockSubmit: "exam",
    mockResults: "exam"
  };

  var settings = null;   // 缓存
  var ctx = null;        // AudioContext
  var ctxBroken = false; // 不支持 / 创建失败

  function clamp(n, a, b) { return n < a ? a : (n > b ? b : n); }

  function storage() { try { return root.localStorage || null; } catch (e) { return null; } }

  function load() {
    if (settings) return settings;
    settings = {};
    var k;
    for (k in DEFAULTS) settings[k] = DEFAULTS[k];

    var raw = null;
    var st = storage();
    if (st) { try { raw = st.getItem(KEY); } catch (e) { raw = null; } }
    var parsed = null;
    if (raw) { try { parsed = JSON.parse(raw); } catch (e) { parsed = null; } }

    // 缺失 / 损坏 / 非法值 → 回退到安全默认，不崩溃
    if (parsed && typeof parsed === "object") {
      if (typeof parsed.enabled === "boolean") settings.enabled = parsed.enabled;
      if (typeof parsed.volume === "number" && isFinite(parsed.volume)) settings.volume = clamp(parsed.volume, 0, 1);
      for (var i = 0; i < CAT_KEYS.length; i++) {
        var c = CAT_KEYS[i];
        if (typeof parsed[c] === "boolean") settings[c] = parsed[c];
      }
    }
    return settings;
  }

  function save() {
    var st = storage();
    if (!st) return;
    try { st.setItem(KEY, JSON.stringify(settings)); } catch (e) { /* 忽略配额/隐私模式错误 */ }
  }

  function getSettings() { return load(); }

  function setSetting(key, value) {
    load();
    if (!(key in DEFAULTS)) return settings;
    if (key === "volume") settings.volume = clamp(Number(value), 0, 1);
    else settings[key] = !!value;
    save();
    return settings;
  }

  function resetSettings() {
    load();
    for (var k in DEFAULTS) settings[k] = DEFAULTS[k];
    save();
    return settings;
  }

  /* ---------- AudioContext（懒创建 + 手势内恢复） ---------- */
  function ensureCtx() {
    if (ctxBroken) return null;
    if (ctx) {
      if (ctx.state === "suspended" && typeof ctx.resume === "function") {
        try { var p = ctx.resume(); if (p && typeof p.catch === "function") p.catch(function () {}); } catch (e) {}
      }
      return ctx;
    }
    try {
      var AC = root.AudioContext || root.webkitAudioContext;
      if (!AC) { ctxBroken = true; return null; }
      ctx = new AC();
    } catch (e) { ctxBroken = true; ctx = null; return null; }
    return ctx;
  }

  /* ---------- 合成原语 ---------- */
  // 单音：柔和包络，避免突兀的起止
  function tone(o) {
    var c = ensureCtx();
    if (!c) return false;
    var vol = load().volume;
    if (vol <= 0) return false;
    var t0 = c.currentTime;
    var osc = c.createOscillator();
    var g = c.createGain();
    osc.type = o.wave || "sine";
    if (o.f2 && typeof osc.frequency.exponentialRampToValueAtTime === "function") {
      osc.frequency.setValueAtTime(o.f, t0);
      osc.frequency.exponentialRampToValueAtTime(o.f2, t0 + o.d);
    } else if (typeof osc.frequency.setValueAtTime === "function") {
      osc.frequency.setValueAtTime(o.f, t0);
    } else { osc.frequency.value = o.f; }
    var peak = (o.g != null ? o.g : 0.28) * vol;
    if (typeof g.gain.setValueAtTime === "function") {
      g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t0 + (o.a || 0.012));
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + o.d);
    } else { g.gain.value = peak; }
    osc.connect(g); g.connect(c.destination);
    try { osc.start(t0); osc.stop(t0 + o.d + 0.02); } catch (e) {}
    return true;
  }

  // 多音序列（琶音 / 短旋律）；list: [{f, t, d, g, wave}]
  function seq(list) {
    var c = ensureCtx();
    if (!c) return false;
    var vol = load().volume;
    if (vol <= 0) return false;
    var t0 = c.currentTime;
    for (var i = 0; i < list.length; i++) {
      var n = list[i];
      var start = t0 + (n.t || 0);
      var osc = c.createOscillator();
      var g = c.createGain();
      osc.type = n.wave || "sine";
      if (typeof osc.frequency.setValueAtTime === "function") osc.frequency.setValueAtTime(n.f, start);
      else osc.frequency.value = n.f;
      var peak = (n.g != null ? n.g : 0.26) * vol;
      if (typeof g.gain.setValueAtTime === "function") {
        g.gain.setValueAtTime(0.0001, start);
        g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), start + 0.014);
        g.gain.exponentialRampToValueAtTime(0.0001, start + (n.d || 0.16));
      } else { g.gain.value = peak; }
      osc.connect(g); g.connect(c.destination);
      try { osc.start(start); osc.stop(start + (n.d || 0.16) + 0.02); } catch (e) {}
    }
    return true;
  }

  /* ---------- 音色设计（柔和、可区分、短促） ---------- */
  var SOUNDS = {
    // 界面：极轻的“咔”声
    click: function () { return tone({ f: 1150, d: 0.045, g: 0.10, wave: "triangle" }); },
    // 选择：柔和的选中提示
    selection: function () { return tone({ f: 720, d: 0.06, g: 0.13, wave: "sine" }); },
    // 切换 / 导航：两声轻快过渡音
    navTick: function () { return seq([{ f: 540, t: 0, d: 0.05, g: 0.11 }, { f: 700, t: 0.045, d: 0.06, g: 0.11 }]); },

    // 答对：上行大三和弦琶音，愉悦短促
    correct: function () { return seq([
      { f: 523.25, t: 0.00, d: 0.12, g: 0.20 },
      { f: 659.25, t: 0.06, d: 0.12, g: 0.20 },
      { f: 783.99, t: 0.12, d: 0.18, g: 0.20 }
    ]); },
    // 答错：柔和的低音双音，不刺耳、不惊吓
    incorrect: function () { return seq([
      { f: 349.23, t: 0.00, d: 0.12, g: 0.15, wave: "sine" },
      { f: 261.63, t: 0.10, d: 0.16, g: 0.15, wave: "sine" }
    ]); },

    // 讲解打开：轻柔铃音
    explanationOpen: function () { return tone({ f: 784, d: 0.14, g: 0.13, wave: "sine" }); },
    // 读完解析：清脆的完成双音
    explanationComplete: function () { return seq([
      { f: 880, t: 0, d: 0.09, g: 0.15 },
      { f: 1174.66, t: 0.08, d: 0.14, g: 0.15 }
    ]); },

    // 完成一个知识主题：上行成就音
    topicComplete: function () { return seq([
      { f: 523.25, t: 0.00, d: 0.10, g: 0.18 },
      { f: 659.25, t: 0.07, d: 0.10, g: 0.18 },
      { f: 783.99, t: 0.14, d: 0.10, g: 0.18 },
      { f: 1046.50, t: 0.21, d: 0.20, g: 0.18 }
    ]); },

    // 完成一场练习：简短成功旋律（比 topicComplete 稍舒展）
    sessionComplete: function () { return seq([
      { f: 523.25, t: 0.00, d: 0.12, g: 0.19 },
      { f: 659.25, t: 0.10, d: 0.12, g: 0.19 },
      { f: 783.99, t: 0.20, d: 0.12, g: 0.19 },
      { f: 1046.50, t: 0.30, d: 0.26, g: 0.19 }
    ]); },

    // 模考提交（时间到自动交卷）：清晰的完成音
    mockSubmit: function () { return seq([
      { f: 659.25, t: 0.00, d: 0.12, g: 0.17 },
      { f: 880.00, t: 0.11, d: 0.18, g: 0.17 }
    ]); },

    // 模考结果展示：克制、区别于成功旋律的结果提示
    mockResults: function () { return seq([
      { f: 440.00, t: 0.00, d: 0.13, g: 0.15, wave: "triangle" },
      { f: 554.37, t: 0.11, d: 0.13, g: 0.15, wave: "triangle" },
      { f: 659.25, t: 0.22, d: 0.22, g: 0.15, wave: "triangle" }
    ]); }
  };

  function canPlay(name) {
    var s = load();
    if (!s.enabled) return false;                 // 总开关关闭 → 全部静音
    if (s.volume <= 0) return false;              // 音量为 0
    var cat = CATEGORY[name];
    if (cat && s[cat] === false) return false;    // 分组开关关闭（只影响本组）
    return !!SOUNDS[name];
  }

  function play(name) {
    if (!canPlay(name)) return false;
    try { return !!SOUNDS[name](); } catch (e) { return false; }
  }

  // 具名便捷方法
  function apiPlay(name) { return play(name); }
  var playClick = function () { return play("click"); };
  var playSelection = function () { return play("selection"); };
  var playNavTick = function () { return play("navTick"); };
  var playCorrect = function () { return play("correct"); };
  var playIncorrect = function () { return play("incorrect"); };
  var playExplanationOpen = function () { return play("explanationOpen"); };
  var playExplanationComplete = function () { return play("explanationComplete"); };
  var playTopicComplete = function () { return play("topicComplete"); };
  var playSessionComplete = function () { return play("sessionComplete"); };
  var playMockSubmit = function () { return play("mockSubmit"); };
  var playMockResults = function () { return play("mockResults"); };

  // 试听：遵守总开关与音量（关闭则无声）
  function preview() { return play("correct"); }

  /* ---------- 设置面板 HTML（供进度页渲染） ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function chk(key, label) {
    var on = load()[key];
    return '<label class="check"><input type="checkbox" data-snd="' + key + '"' + (on ? " checked" : "") + '><span>' + esc(label) + "</span></label>";
  }
  function settingsHtml() {
    var s = load();
    var pct = Math.round(s.volume * 100);
    return '<div class="sound-panel">' +
      '<h3 class="sub">🔊 声音设置</h3>' +
      '<p class="snd-note">音效由浏览器实时合成、短促柔和，可随时开关或调音量。设置保存在本地，刷新后保留。</p>' +
      '<div class="snd-master">' +
      '<label class="check big"><input type="checkbox" data-snd="enabled"' + (s.enabled ? " checked" : "") + '><span>启用音效（总开关）</span></label>' +
      '<div class="snd-volume"><span class="snd-vol-label">音量</span>' +
      '<input type="range" min="0" max="100" value="' + pct + '" data-snd="volume" aria-label="音量">' +
      '<span class="snd-vol-pct" data-snd-vol-label>' + pct + "%</span></div>" +
      "</div>" +
      '<div class="snd-cats">' +
      chk("ui", "界面音效（点击 / 选择 / 切换）") +
      chk("correct", "答对音效") +
      chk("incorrect", "答错音效") +
      chk("explanation", "讲解与完成音效") +
      chk("exam", "模考与结果音效") +
      "</div>" +
      '<div class="snd-actions">' +
      '<button type="button" class="btn sm" data-snd="preview">试听</button>' +
      '<button type="button" class="btn sm ghost" data-snd="reset">恢复默认</button>' +
      "</div></div>";
  }

  /* ---------- 设置控件的事件接线（document 委托，重建后仍有效） ---------- */
  function syncVolumeLabel() {
    var el = root.document && root.document.querySelector("[data-snd-vol-label]");
    if (el) el.textContent = Math.round(load().volume * 100) + "%";
  }
  function onSettingsChange(ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest("[data-snd]") : null;
    if (!el) return;
    var key = el.getAttribute("data-snd");
    if (key === "volume") { setSetting("volume", Number(el.value) / 100); syncVolumeLabel(); return; }
    if (key in DEFAULTS) { setSetting(key, el.checked); syncVolumeLabel(); }
  }
  function onSettingsInput(ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest("[data-snd]") : null;
    if (!el) return;
    if (el.getAttribute("data-snd") === "volume") { setSetting("volume", Number(el.value) / 100); syncVolumeLabel(); }
  }
  function onSettingsClick(ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest("[data-snd]") : null;
    if (!el) return;
    var key = el.getAttribute("data-snd");
    if (key === "preview") { preview(); return; }
    if (key === "reset") {
      resetSettings();
      // 重绘设置面板（若在进度页）
      if (root.__practice && root.__practice.renderProgress) { root.__practice.renderProgress(); }
      return;
    }
  }
  function wire() {
    if (!root.document || !root.document.addEventListener) return;
    root.document.addEventListener("change", onSettingsChange, true);
    root.document.addEventListener("input", onSettingsInput, true);
    root.document.addEventListener("click", onSettingsClick, true);
  }
  // document 一定已存在（脚本在 body 末尾加载）；委托监听与元素是否渲染无关
  wire();

  /* ---------- 测试钩子 ---------- */
  function __reset() { settings = null; ctx = null; ctxBroken = false; }
  function __resetCtx() { ctx = null; ctxBroken = false; }
  function __setCtx(c) { ctx = c; ctxBroken = false; }

  root.Sound = {
    DEFAULTS: DEFAULTS,
    CATEGORY: CATEGORY,
    getSettings: getSettings,
    setSetting: setSetting,
    resetSettings: resetSettings,
    canPlay: canPlay,
    play: apiPlay,
    playClick: playClick,
    playSelection: playSelection,
    playNavTick: playNavTick,
    playCorrect: playCorrect,
    playIncorrect: playIncorrect,
    playExplanationOpen: playExplanationOpen,
    playExplanationComplete: playExplanationComplete,
    playTopicComplete: playTopicComplete,
    playSessionComplete: playSessionComplete,
    playMockSubmit: playMockSubmit,
    playMockResults: playMockResults,
    preview: preview,
    settingsHtml: settingsHtml,
    __reset: __reset,
    __resetCtx: __resetCtx,
    __setCtx: __setCtx
  };
})(typeof window !== "undefined" ? window : this);
