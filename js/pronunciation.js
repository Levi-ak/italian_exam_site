/* ============================================================
 * pronunciation.js — 意大利语朗读 / 文字转语音（集中式模块）
 *
 * 与 sound.js 的分工：
 *  - sound.js：短促界面音效（Web Audio 合成）。
 *  - pronunciation.js：真正的“意大利语朗读”（Web Speech API，lang=it-IT）。
 * 两个系统互不影响；朗读音量与音效音量互相独立。
 *
 * 设计要点：
 *  - 只在用户主动点击/选择时朗读，绝不在加载或渲染时自动播放。
 *  - it(text) 把文本中的意大利语（拉丁字母，含重音与撇号）包成可点击词条；
 *     中文与标点保持原样，不生成按钮。
 *  - 事件委托统一在 document 捕获阶段处理，重绘/导航后不重复绑定。
 *  - 点击词条时阻止默认与冒泡：不会选中选项、不会提交答案、不触发音效。
 *  - 设置保存在独立键 "ita_exam_pron_v1"，不改动音效键与进度键。
 *  - 不支持 Web Speech / 无意大利语语音时优雅提示，不抛错、不静默换成英语。
 * ============================================================ */
(function (root) {
  "use strict";

  var KEY = "ita_exam_pron_v1";
  var DEFAULTS = { enabled: true, rate: 0.9, voiceURI: "", slow: false };
  var RATE_MIN = 0.6, RATE_MAX = 1.2, SLOW_RATE = 0.65;

  // 意大利语字母（含 À-ÿ 拉丁扩展）+ 直/弯撇号 + 连字符
  var RE_WORD = /[A-Za-z\u00C0-\u024F][A-Za-z\u00C0-\u024F'\u2019-]*/g;
  // 词组：拉丁词之间允许空白（用于整句抽取）
  var RE_PHRASE = /[A-Za-z\u00C0-\u024F][A-Za-z\u00C0-\u024F'\u2019-]*(?:\s+[A-Za-z\u00C0-\u024F][A-Za-z\u00C0-\u024F'\u2019-]*)*/g;
  var RE_CJK = /[\u4E00-\u9FFF\u3400-\u4DBF\u3000-\u303F\uFF00-\uFFEF]/;

  var ICO = '<svg class="say-ico" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true" focusable="false">' +
    '<path fill="currentColor" d="M4 9.5h3.4L12 6v12l-4.6-3.5H4z"/>' +
    '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M15.2 9.4a3.6 3.6 0 0 1 0 5.2M17.7 7a7 7 0 0 1 0 10"/></svg>';

  /* ---------- 设置 ---------- */
  var settings = null;

  function clamp(n, a, b) { return n < a ? a : (n > b ? b : n); }
  function storage() { try { return root.localStorage || null; } catch (e) { return null; } }

  function load() {
    if (settings) return settings;
    settings = {};
    for (var k in DEFAULTS) settings[k] = DEFAULTS[k];
    var raw = null, st = storage();
    if (st) { try { raw = st.getItem(KEY); } catch (e) { raw = null; } }
    var p = null;
    if (raw) { try { p = JSON.parse(raw); } catch (e) { p = null; } }
    if (p && typeof p === "object") {
      if (typeof p.enabled === "boolean") settings.enabled = p.enabled;
      if (typeof p.slow === "boolean") settings.slow = p.slow;
      if (typeof p.rate === "number" && isFinite(p.rate)) settings.rate = clamp(p.rate, RATE_MIN, RATE_MAX);
      if (typeof p.voiceURI === "string") settings.voiceURI = p.voiceURI;
    }
    return settings;
  }
  function save() {
    var st = storage();
    if (!st) return;
    try { st.setItem(KEY, JSON.stringify(settings)); } catch (e) {}
  }
  function getSettings() { return load(); }
  function setSetting(key, value) {
    load();
    if (!(key in DEFAULTS)) return settings;
    if (key === "rate") settings.rate = clamp(Number(value), RATE_MIN, RATE_MAX);
    else if (key === "voiceURI") settings.voiceURI = String(value || "");
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

  /* ---------- 语音能力 ---------- */
  function synth() { try { return root.speechSynthesis || null; } catch (e) { return null; } }
  function supported() {
    var s = synth();
    return !!(s && typeof s.speak === "function" && root.SpeechSynthesisUtterance);
  }
  function rawVoices() {
    var s = synth();
    if (!s || typeof s.getVoices !== "function") return [];
    try { return s.getVoices() || []; } catch (e) { return []; }
  }
  function getAvailableItalianVoices() {
    return rawVoices().filter(function (v) {
      var l = String((v && v.lang) || "").toLowerCase();
      return v && (l === "it" || l.indexOf("it-") === 0);
    });
  }
  function pickVoice() {
    var s = load();
    var vs = getAvailableItalianVoices();
    if (!vs.length) return null;
    if (s.voiceURI) {
      for (var i = 0; i < vs.length; i++) if (vs[i].voiceURI === s.voiceURI) return vs[i];
    }
    return vs[0];
  }
  var voiceWired = false;
  function ensureVoiceWire() {
    if (voiceWired) return;
    var s = synth();
    if (!s) return;
    voiceWired = true;
    var handler = function () { refreshVoiceUi(); };
    try {
      if (typeof s.addEventListener === "function") s.addEventListener("voiceschanged", handler);
      else s.onvoiceschanged = handler;
    } catch (e) {}
  }
  function refreshVoiceUi() {
    try {
      var el = root.document && root.document.querySelector && root.document.querySelector("#progress-body .pron-panel");
      if (el && root.__practice && root.__practice.renderProgress) root.__practice.renderProgress();
    } catch (e) {}
  }

  /* ---------- 提示气泡 ---------- */
  var toastEl = null, toastTimer = null;
  function toast(msg) {
    try {
      var d = root.document;
      if (!d || !d.body) return;
      if (!toastEl) {
        toastEl = d.createElement("div");
        toastEl.className = "pron-toast";
        toastEl.setAttribute("role", "status");
        d.body.appendChild(toastEl);
      }
      toastEl.textContent = msg;
      toastEl.classList.add("show");
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { if (toastEl) toastEl.classList.remove("show"); }, 3600);
    } catch (e) {}
  }

  /* ---------- 播放状态 ---------- */
  var currentU = null;      // 当前单句 utterance
  var activeEl = null;      // 当前指示元素
  var pending = false;      // 是否有进行中的朗读
  var session = 0;          // 会话号：作废被取消的回调
  var timer = null;         // 对话行间延时
  var warnedNoVoice = false;

  function clearIndicator() {
    if (activeEl && activeEl.classList) activeEl.classList.remove("speaking");
    activeEl = null;
    var cs = root.document && root.document.querySelectorAll
      ? root.document.querySelectorAll(".dialogue.speaking, .runner.speaking, .fb.speaking, .rev-item.speaking, .preview-box.speaking")
      : [];
    for (var i = 0; i < cs.length; i++) cs[i].classList.remove("speaking");
    var lines = root.document && root.document.querySelectorAll ? root.document.querySelectorAll(".turn.speaking") : [];
    for (var j = 0; j < lines.length; j++) lines[j].classList.remove("speaking");
  }

  function stop() {
    session++;
    if (timer) { try { clearTimeout(timer); } catch (e) {} timer = null; }
    var s = synth();
    if (s && typeof s.cancel === "function") { try { s.cancel(); } catch (e) {} }
    currentU = null;
    pending = false;
    clearIndicator();
  }

  function guard() {
    var st = load();
    if (!st.enabled) { toast("发音朗读已关闭，可在“我的进度 → 发音设置”中开启。"); return false; }
    if (!supported()) { toast("当前浏览器不支持语音合成，请使用较新的 Chrome / Edge / Safari。"); return false; }
    ensureVoiceWire();
    return true;
  }

  function makeUtterance(text, mode) {
    var st = load();
    var u = new root.SpeechSynthesisUtterance(text);
    u.lang = "it-IT";
    var v = pickVoice();
    if (v) { try { u.voice = v; } catch (e) {} if (v.lang) u.lang = v.lang; }
    else if (!warnedNoVoice) {
      warnedNoVoice = true;
      toast("未检测到意大利语语音包，将由系统按意大利语尽力朗读，口音可能不标准。可在发音设置中“检测语音”。");
    }
    var rate = (mode === "slow" || st.slow) ? SLOW_RATE : clamp(Number(st.rate) || 0.9, RATE_MIN, RATE_MAX);
    u.rate = rate;
    u.pitch = 1;
    u.volume = 1;              // 与音效音量互相独立
    return u;
  }

  function speakNow(u, el) {
    // 安全网：某些浏览器/无声卡环境既不 onend 也不 onerror → 到点自行收尾，避免指示器永久残留
    var done = false, guardT = null;
    function finishOnce() {
      if (done) return;
      done = true;
      if (guardT) { try { clearTimeout(guardT); } catch (e) {} guardT = null; }
      if (u === currentU) { pending = false; currentU = null; clearIndicator(); }
    }
    u.onend = finishOnce;
    u.onerror = finishOnce;
    var cap = Math.max(6000, String(u.text || el && el.textContent || "").length * 200);
    guardT = setTimeout(finishOnce, cap);
    currentU = u;
    pending = true;
    if (el && el.classList) { clearIndicator(); el.classList.add("speaking"); activeEl = el; }
    var s = synth();
    try { s.speak(u); } catch (e) { finishOnce(); return false; }
    return true;
  }

  /* ---------- 核心朗读 ---------- */
  function cleanText(t) {
    t = String(t == null ? "" : t).replace(/\s+/g, " ").trim();
    return t;
  }
  function speak(text, mode, el) {
    stop();                      // 先停旧的：不叠加、不重队列
    if (!guard()) return false;
    var t = cleanText(text);
    if (!t) return false;
    return speakNow(makeUtterance(t, mode), el);
  }
  function speakWord(t, el) { return speak(t, "word", el); }
  function speakPhrase(t, el) { return speak(t, "phrase", el); }
  function speakSentence(t, el) { return speak(t, "sentence", el); }

  /* 整句抽取：纯意大利语文本原样朗读（保留标点与拼写）；
     混有中文的文本只抽取拉丁词组，避免用意大利语读中文界面文字。 */
  function sentenceText(text) {
    var t = String(text == null ? "" : text);
    if (!RE_CJK.test(t)) return t;
    var m = t.match(RE_PHRASE);
    return m ? m.join(" ") : "";
  }

  /* 对话：按显示顺序逐行朗读，行间小幅延时；可随时停止。 */
  function speakDialogue(lines, answers, opts) {
    opts = opts || {};
    stop();
    if (!guard()) return false;
    var items = [];
    for (var i = 0; i < lines.length; i++) {
      var t = lines[i];
      if (!t && opts.useAnswers) t = answers && answers[i];
      if (t) items.push({ text: t, idx: i });
    }
    if (!items.length) { toast("没有可播放的对话内容。"); return false; }

    var s = session;
    var container = opts.container || null;
    if (container && container.classList) container.classList.add("speaking");
    if (opts.el && opts.el.classList) { clearIndicator(); opts.el.classList.add("speaking"); activeEl = opts.el; }
    var k = 0;

    function setLine(idx) {
      if (!container || !container.querySelectorAll) return;
      var turns = container.querySelectorAll(".turn");
      for (var j = 0; j < turns.length; j++) turns[j].classList.toggle("speaking", j === idx);
    }
    function finish() { if (s === session) clearIndicator(); }
    function next() {
      if (s !== session) return;
      if (k >= items.length) { pending = false; finish(); return; }
      var item = items[k];
      setLine(item.idx);
      var u = makeUtterance(item.text, "sentence");
      // 每行安全网：浏览器既不 onend 也不 onerror 时按时推进，整段对话不会永久卡住
      var done = false, rowT = null;
      function advance() {
        if (done) return;
        done = true;
        if (rowT) { try { clearTimeout(rowT); } catch (e) {} rowT = null; }
        if (s !== session) return;
        k++; timer = setTimeout(next, 320);
      }
      function fail() {
        if (done) return;
        done = true;
        if (rowT) { try { clearTimeout(rowT); } catch (e) {} rowT = null; }
        if (s !== session) return;
        pending = false; finish();
      }
      u.onend = advance;
      u.onerror = fail;
      rowT = setTimeout(function () { advance(); }, Math.max(6000, String(item.text).length * 200));
      pending = true;
      try { synth().speak(u); } catch (e) { fail(); }
    }
    next();
    return true;
  }

  /* 对话注册：把行数据交给模块，按钮只带 key，避免 HTML 属性塞 JSON */
  var dlgSeq = 0, dialogues = {};
  function registerDialogue(lines, answers) {
    var k = "dlg" + (++dlgSeq);
    if (dlgSeq > 400) { dialogues = {}; dlgSeq = 1; k = "dlg1"; }
    dialogues[k] = { lines: lines || [], answers: answers || [] };
    return k;
  }
  function playDialogue(key, opts) {
    var d = dialogues[key];
    if (!d) { toast("对话内容已刷新，请重新渲染后再播放。"); return false; }
    return speakDialogue(d.lines, d.answers, opts || {});
  }

  /* ---------- 选中朗读 ---------- */
  var selText = "";
  function latinFromSelection(sel) {
    var t = String(sel || "").replace(/\s+/g, " ").trim();
    if (!t || !/[A-Za-z\u00C0-\u024F]/.test(t)) return "";
    if (RE_CJK.test(t)) {
      var m = t.match(RE_PHRASE);
      return m ? m.join(" ") : "";
    }
    return t;
  }
  function speakSelectedText() {
    var t = latinFromSelection(selText);
    hideSelBtn();
    if (!t) { toast("请先选中一段意大利语文本。"); return false; }
    return speak(t, "phrase", null);
  }

  /* ---------- 文本渲染助手 ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  /* 意大利语词 → 可点击词条（span，避免按钮嵌套的 HTML 解析问题） */
  function it(text) {
    var s = String(text == null ? "" : text);
    if (!s) return "";
    var RE = /[A-Za-z\u00C0-\u024F][A-Za-z\u00C0-\u024F'\u2019-]*/g;
    var out = "", last = 0, m;
    while ((m = RE.exec(s)) !== null) {
      out += esc(s.slice(last, m.index));
      out += '<span class="itw" data-say="' + esc(m[0]) + '" data-say-mode="word" title="播放意大利语发音" aria-label="朗读：' + esc(m[0]) + '">' + esc(m[0]) + "</span>";
      last = m.index + m[0].length;
      if (m[0].length === 0) RE.lastIndex++;
    }
    out += esc(s.slice(last));
    return out;
  }
  /* 整句 / 整段朗读按钮 */
  function sayBtn(text, mode, label) {
    var t = String(text == null ? "" : text);
    if (!t) return "";
    var lb = label || "朗读整句";
    return '<button type="button" class="say-btn" data-say="' + esc(t) + '" data-say-mode="' + esc(mode || "sentence") +
      '" title="' + esc(lb) + '" aria-label="' + esc(lb) + '">' + ICO + "<span>" + esc(lb) + "</span></button>";
  }
  /* 对话播放按钮（key 指向已注册的行数据） */
  function dialogueBtn(key, label, useAnswers) {
    if (!key) return "";
    var lb = label || "播放完整对话";
    return '<button type="button" class="say-btn dlg-say" data-say-dlg="' + esc(key) + '"' +
      (useAnswers ? ' data-say-dlg-done="1"' : "") +
      ' title="' + esc(lb) + '" aria-label="' + esc(lb) + '">' + ICO + "<span>" + esc(lb) + "</span></button>";
  }
  /* 把填充模板里的占位符去掉后的可读文本（不读 ______）；
     顺带收拾占位删除后残留的孤立标点（如 “Garibaldi, [blank].” → “Garibaldi.”） */
  function templateSpokenText(template) {
    var parts = String(template == null ? "" : template).split(/\[(blank\d+)\]/);
    var out = "";
    for (var i = 0; i < parts.length; i++) if (!/^blank\d+$/.test(parts[i])) out += parts[i];
    return cleanText(out)
      .replace(/\s+([.,;:!?])/g, "$1")     // 标点前多余空格
      .replace(/^[,;:]\s*/, "")            // 句首残留逗号/分号
      .replace(/[,;:]\s*(?=[.!?])/g, "")   // 逗号紧贴句末标点 → 去掉逗号
      .replace(/\s*[,;:]+$/, "")           // 句尾残留逗号/分号
      .trim();
  }

  /* ---------- 设置面板 ---------- */
  function escAttr(s) { return esc(s); }
  function settingsHtml() {
    ensureVoiceWire();
    var s = load();
    var vs = getAvailableItalianVoices();
    var status = vs.length
      ? '<span class="pron-status ok">✓ 已检测到 ' + vs.length + " 个意大利语语音</span>"
      : '<span class="pron-status bad">⚠ 未检测到意大利语语音：将按 it-IT 尽力朗读，口音可能不标准</span>';
    var opts;
    if (!vs.length) opts = '<option value="">未检测到意大利语语音</option>';
    else {
      opts = vs.map(function (v) {
        return '<option value="' + escAttr(v.voiceURI || v.name) + '"' +
          ((v.voiceURI || v.name) === s.voiceURI ? " selected" : "") + ">" +
          esc(v.name) + "（" + esc(v.lang || "it") + "）</option>";
      }).join("");
    }
    return '<div class="sound-panel pron-panel">' +
      '<h3 class="sub">🗣 发音与朗读</h3>' +
      '<p class="snd-note">点击正文中的意大利语单词即可朗读；句旁“朗读整句”、对话“播放完整对话”可整段试听。' +
      '语音由浏览器/系统提供，音量与上面的界面音效互相独立。</p>' +
      '<div class="snd-master">' +
      '<label class="check big"><input type="checkbox" data-pron="enabled"' + (s.enabled ? " checked" : "") + '><span>启用朗读发音（总开关）</span></label>' +
      '<div class="pron-rate"><span class="snd-vol-label">朗读速度</span>' +
      '<input type="range" min="60" max="120" step="5" value="' + Math.round(s.rate * 100) + '" data-pron="rate" aria-label="朗读速度">' +
      '<span class="snd-vol-pct" data-pron-rate-label>' + s.rate.toFixed(2) + "×</span></div>" +
      "</div>" +
      '<div class="snd-cats">' +
      '<label class="check"><input type="checkbox" data-pron="slow"' + (s.slow ? " checked" : "") + '><span>慢速朗读（' + SLOW_RATE + "×，适合跟读）</span></label>" +
      '<div class="pron-voice">' + status +
      '<select data-pron="voice" aria-label="选择意大利语语音">' + opts + "</select></div>" +
      "</div>" +
      '<div class="snd-actions">' +
      '<button type="button" class="btn sm" data-pron="test">试听</button>' +
      '<button type="button" class="btn sm ghost" data-pron="check">检测语音</button>' +
      '<button type="button" class="btn sm ghost" data-pron="stop">停止播放</button>' +
      '<button type="button" class="btn sm ghost" data-pron="reset">恢复默认</button>' +
      "</div>" +
      '<p class="pron-note">说明：语音质量与慢速朗读效果取决于浏览器/操作系统安装的语音包；本机未安装意大利语语音时无法保证地道口音。朗读需手动触发，不会自动播放。</p>' +
      "</div>";
  }

  /* ---------- 选中朗读浮层按钮 ---------- */
  var selBtn = null;
  function ensureSelBtn() {
    if (selBtn || !root.document || !root.document.body) return;
    try {
      selBtn = root.document.createElement("button");
      selBtn.type = "button";
      selBtn.id = "pron-sel-btn";
      selBtn.className = "sel-say";
      selBtn.setAttribute("data-pron", "selsay");
      selBtn.setAttribute("aria-label", "朗读选中内容");
      selBtn.innerHTML = ICO + "<span>朗读选中内容</span>";
      root.document.body.appendChild(selBtn);
    } catch (e) { selBtn = null; }
  }
  function hideSelBtn() { if (selBtn) selBtn.classList.remove("show"); }
  function updateSelBtn() {
    ensureSelBtn();
    if (!selBtn) return;
    try {
      var sel = root.getSelection && root.getSelection();
      var txt = sel ? String(sel) : "";
      selText = txt;
      var latin = latinFromSelection(txt);
      if (!latin || sel.rangeCount === 0 || (sel.rangeCount === 1 && sel.isCollapsed)) { hideSelBtn(); return; }
      var r = sel.getRangeAt(0).getBoundingClientRect();
      if (!r || (r.top === 0 && r.left === 0 && r.width === 0)) { hideSelBtn(); return; }
      selBtn.style.top = Math.max(6, r.top - 40) + "px";
      selBtn.style.left = Math.max(6, Math.min(r.left, (root.innerWidth || 800) - 150)) + "px";
      selBtn.classList.add("show");
    } catch (e) { hideSelBtn(); }
  }

  /* ---------- 事件接线（document 委托，捕获阶段一次绑定） ---------- */
  function pronControl(el, ev) {
    var key = el.getAttribute("data-pron");
    if (key === "enabled") { setSetting("enabled", el.checked); return; }
    if (key === "slow") { setSetting("slow", el.checked); return; }
    if (key === "rate") { setSetting("rate", Number(el.value) / 100); syncRateLabel(); return; }
    if (key === "voice") { setSetting("voiceURI", el.value); return; }
    if (key === "test") {
      if (load().enabled && supported()) { speak("Buongiorno, amico! Come stai?", "sentence", null); }
      else { guard(); }
      return;
    }
    if (key === "check") { rawVoices(); refreshVoiceUi(); toast(getAvailableItalianVoices().length ? "已检测到意大利语语音。" : "未检测到意大利语语音包。"); return; }
    if (key === "stop") { stop(); return; }
    if (key === "selsay") { speakSelectedText(); return; }
    if (key === "reset") {
      resetSettings();
      if (root.__practice && root.__practice.renderProgress) { try { root.__practice.renderProgress(); } catch (e) {} }
      return;
    }
  }
  function syncRateLabel() {
    var el = root.document && root.document.querySelector && root.document.querySelector("[data-pron-rate-label]");
    if (el) el.textContent = Number(load().rate).toFixed(2) + "×";
  }

  function onClick(ev) {
    var t = ev.target;
    if (!t) return;
    hideSelBtn();
    if (!t.closest) return;
    var w = t.closest("[data-say]");
    if (w) {
      ev.preventDefault();          // 阻止 label 激活单选（选项内的词条不会选中选项）
      ev.stopPropagation();          // 阻止冒泡到 app.js：不提交、不选中、不播音效
      var mode = w.getAttribute("data-say-mode") || "word";
      var txt = w.getAttribute("data-say");
      // 整句模式：混有中文的文本只朗读意大利语片段，绝不读中文界面文字
      if (mode === "sentence" || mode === "phrase") txt = sentenceText(txt);
      speak(txt, mode, w);
      return;
    }
    var d = t.closest("[data-say-dlg]");
    if (d) {
      ev.preventDefault(); ev.stopPropagation();
      var useAns = d.getAttribute("data-say-dlg-done") === "1";
      if (activeEl === d && pending) { stop(); return; }   // 播放中再次点击 = 停止
      playDialogue(d.getAttribute("data-say-dlg"), { el: d, container: closestDialogue(d), useAnswers: useAns });
      return;
    }
    var p = t.closest("[data-pron]");
    if (p) { pronControl(p, ev); return; }
  }
  function closestDialogue(el) {
    var d = el && el.closest ? el.closest(".dialogue") : null;
    if (d) return d;
    var box = el && el.closest ? el.closest(".rev-item, .fb, .preview-box, .runner") : null;
    return box;
  }

  function onChange(ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest("[data-pron]") : null;
    if (!el) return;
    if (el.tagName === "SELECT" || el.type === "checkbox") pronControl(el, ev);
  }
  function onInput(ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest("[data-pron]") : null;
    if (!el) return;
    if (el.getAttribute("data-pron") === "rate") pronControl(el, ev);
  }
  function onSelectMouseUp() {
    if (root.getSelection && root.getSelection().isCollapsed === false) setTimeout(updateSelBtn, 10);
  }

  function wire() {
    var d = root.document;
    if (!d || !d.addEventListener) return;
    d.addEventListener("click", onClick, true);
    d.addEventListener("change", onChange, true);
    d.addEventListener("input", onInput, true);
    try {
      d.addEventListener("selectionchange", function () { /* 仅在鼠标抬起后计算，避免频繁布局 */ });
      d.addEventListener("mouseup", onSelectMouseUp);
      d.addEventListener("touchend", onSelectMouseUp);
      d.addEventListener("keyup", function (e) { if (e.shiftKey || (e.keyCode >= 37 && e.keyCode <= 40)) onSelectMouseUp(); });
    } catch (e) {}
    ensureVoiceWire();
  }
  wire();

  /* ---------- 测试钩子 ---------- */
  function __reset() {
    settings = null; currentU = null; activeEl = null; pending = false;
    session++; timer = null; warnedNoVoice = false;
    dialogues = {}; dlgSeq = 0;
  }
  function __state() {
    return { pending: pending, hasIndicator: !!activeEl, supported: supported(),
             itVoices: getAvailableItalianVoices().length };
  }
  function __setSynth(mock) {
    // Chrome 上 window.speechSynthesis 是只读访问器，直接赋值在严格模式会抛错 → 用 defineProperty 替换
    try { Object.defineProperty(root, "speechSynthesis", { value: mock, configurable: true, writable: true }); }
    catch (e) { try { root.speechSynthesis = mock; } catch (e2) {} }
    voiceWired = false;
  }

  root.Pron = {
    DEFAULTS: DEFAULTS,
    KEY: KEY,
    getSettings: getSettings,
    setSetting: setSetting,
    resetSettings: resetSettings,
    supported: supported,
    getAvailableItalianVoices: getAvailableItalianVoices,
    speak: speak,
    speakWord: speakWord,
    speakPhrase: speakPhrase,
    speakSentence: speakSentence,
    speakDialogue: speakDialogue,
    speakSelectedText: speakSelectedText,
    stop: stop,
    sentenceText: sentenceText,
    latinFromSelection: latinFromSelection,
    templateSpokenText: templateSpokenText,
    it: it,
    sayBtn: sayBtn,
    dialogueBtn: dialogueBtn,
    registerDialogue: registerDialogue,
    playDialogue: playDialogue,
    settingsHtml: settingsHtml,
    toast: toast,
    __reset: __reset,
    __state: __state,
    __setSynth: __setSynth
  };
})(typeof window !== "undefined" ? window : this);
