/* ============================================================
 * app.js — 主应用逻辑（路由、知识模块、练习/模考、进度）
 * 依赖：CONTENT / QUESTIONS / Grading / Progress
 * ============================================================ */
(function () {
  "use strict";

  /* ---------- 工具 ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  var UNIT_OF = {}; // unitId -> unit
  var TOPIC_BY_ID = {}; // topicId -> {unit, topic}
  var Q_BY_ID = {};
  CONTENT.units.forEach(function (u) {
    UNIT_OF[u.id] = u;
    u.topics.forEach(function (t) { TOPIC_BY_ID[t.id] = { unit: u, topic: t }; });
  });
  QUESTIONS.forEach(function (q) { Q_BY_ID[q.id] = q; });

  var IMP_LABEL = { essential: "必背", important: "重要", supporting: "辅助" };
  var TYPE_LABEL = { mcq: "选择题", fill: "填空题", dialogue: "对话补全" };

  /* ---------- 全局状态 ---------- */
  var session = null; // 当前练习场次

  /* ---------- 路由 ---------- */
  function showView(name) {
    $all(".view").forEach(function (v) { v.classList.remove("active"); });
    var v = $("#view-" + name);
    if (v) v.classList.add("active");
    $all(".nav-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.view === name); });
    window.scrollTo(0, 0);
  }
  function navTo(name) {
    var P = window.__practice;
    if (name === "knowledge") renderKnowledge();
    if (name === "practice" && P) P.renderSetup();
    if (name === "progress" && P) P.renderProgress();
    if (name === "home") renderHome();
    showView(name);
  }

  /* ============================================================
   * 首页 / 总览
   * ============================================================ */
  function renderHome() {
    var ov = Progress.overall();
    var totalTopics = 0;
    CONTENT.units.forEach(function (u) { totalTopics += u.topics.length; });
    var done = 0;
    CONTENT.units.forEach(function (u) {
      u.topics.forEach(function (t) { if (Progress.isTopicDone(t.id)) done++; });
    });
    var totalQ = QUESTIONS.length;

    $("#home-stats").innerHTML =
      '<div class="stat-grid">' +
      card("已练题目", ov.attempted + " / " + totalQ, "累计作答数") +
      card("正确率", ov.accuracy + "%", ov.correct + " 对 / " + ov.wrong + " 错") +
      card("知识清单", done + " / " + totalTopics, "已完成主题") +
      card("待复习错题", Progress.mistakeList().length, "尚未订正的错题") +
      "</div>";

    var unitsHtml = CONTENT.units.map(function (u) {
      var st = Progress.unitStats(u.id);
      var topicsDone = u.topics.filter(function (t) { return Progress.isTopicDone(t.id); }).length;
      return '<div class="unit-row">' +
        '<div class="unit-row-main">' +
        '<span class="unit-badge">U' + u.number + '</span>' +
        '<div><div class="unit-title">' + esc(u.title) + ' <small>《' + esc(u.titleZh) + '》</small></div>' +
        '<div class="unit-sub">主题 ' + topicsDone + "/" + u.topics.length + " · 作答 " + st.attempted + " · 正确 " + st.correct + "</div></div>" +
        '</div>' +
        '<div class="unit-row-actions">' +
        '<button class="btn sm" data-act="home-know" data-u="' + u.id + '">知识</button>' +
        '<button class="btn sm" data-act="home-practice" data-u="' + u.id + '">练习</button>' +
        '</div></div>';
    }).join("");
    $("#home-units").innerHTML = unitsHtml;
  }
  function card(label, value, sub) {
    return '<div class="stat-card"><div class="stat-value">' + esc(value) + '</div><div class="stat-label">' + esc(label) + '</div><div class="stat-sub">' + esc(sub) + '</div></div>';
  }

  /* ============================================================
   * 模块 A：知识与复习
   * ============================================================ */
  var knowledgeUnit = "U1";
  function renderKnowledge() {
    var u = UNIT_OF[knowledgeUnit] || CONTENT.units[0];
    $("#kn-unit-tabs").innerHTML = CONTENT.units.map(function (x) {
      return '<button class="tab' + (x.id === u.id ? " active" : "") + '" data-act="kn-unit" data-u="' + x.id + '">Unit ' + x.number + ' · ' + esc(x.title) + '</button>';
    }).join("");
    $("#kn-unit-meta").innerHTML =
      '<div class="kn-overview"><strong>本单元概述：</strong>' + esc(u.overview) +
      '<div class="kn-pages">来源：' + esc(u.sourcePdf) + ' · ' + esc(u.pages) + '</div></div>';

    $("#kn-topic-list").innerHTML = u.topics.map(function (t, i) {
      var done = Progress.isTopicDone(t.id);
      return '<div class="topic-item' + (done ? " done" : "") + '">' +
        '<button class="topic-open" data-act="kn-open" data-t="' + t.id + '">' +
        '<span class="topic-idx">' + (i + 1) + '</span>' +
        '<span class="topic-name">' + esc(t.title) + '<small>' + esc(t.titleIt) + '</small></span>' +
        '<span class="imp imp-' + t.importance + '">' + IMP_LABEL[t.importance] + '</span>' +
        '</button>' +
        '<label class="check"><input type="checkbox" data-act="kn-check" data-t="' + t.id + '"' + (done ? " checked" : "") + '><span>完成</span></label>' +
        '</div>';
    }).join("");
    $("#kn-topic-detail").innerHTML = '<div class="placeholder">← 选择左侧主题开始学习</div>';
  }

  function renderTopic(topicId) {
    currentTopicId = topicId;
    var hit = TOPIC_BY_ID[topicId];
    if (!hit) return;
    var t = hit.topic, u = hit.unit;
    var h = '<div class="detail-head">' +
      '<div><span class="unit-badge sm">U' + u.number + '</span><h3>' + esc(t.title) + ' <span class="it-title">' + esc(t.titleIt) + '</span></h3></div>' +
      '<span class="imp imp-' + t.importance + '">' + IMP_LABEL[t.importance] + '</span>' +
      '</div>';

    h += section("知识讲解", '<p class="k-p">' + esc(t.knowledge) + "</p>");

    if (t.rules && t.rules.length)
      h += section("重要规则", '<ul class="rules">' + t.rules.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>");

    if (t.vocabulary && t.vocabulary.length)
      h += section("词汇", table(["意大利语", "中文", "备注"], t.vocabulary.map(function (v) { return [v.it, v.zh, v.note || ""]; })));

    if (t.grammarTables && t.grammarTables.length) {
      h += section("语法表格", t.grammarTables.map(function (g) {
        var tb = table(g.headers, g.rows);
        return '<div class="gtable"><div class="gtable-title">' + esc(g.title) + "</div>" + tb + (g.note ? '<div class="gtable-note">注：' + esc(g.note) + "</div>" : "") + "</div>";
      }).join(""));
    }

    if (t.examples && t.examples.length)
      h += section("例句（原文 + 中文）", t.examples.map(function (e) {
        return '<div class="example"><div class="ex-it">' + esc(e.it) + '</div><div class="ex-zh">' + esc(e.zh) + "</div></div>";
      }).join(""));

    if (t.steps)
      h += section("逐步讲解", '<p class="k-p">' + esc(t.steps) + "</p>");

    if (t.commonMistakes && t.commonMistakes.length)
      h += section("常见错误（依据课程规则，非官方考点声明）",
        '<ul class="mistakes">' + t.commonMistakes.map(function (m) {
          return '<li><span class="wrong">✗ ' + esc(m.right ? m.wrong : m.wrong) + '</span><br><span class="right">✓ ' + esc(m.right) + '</span><div class="why">' + esc(m.why) + "</div></li>";
        }).join("") + "</ul>");

    if (t.summary && t.summary.length)
      h += section("考试复习小结", '<ul class="summary">' + t.summary.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ul>");

    if (t.miniPractice && t.miniPractice.length)
      h += section("小练习（附答案与讲解）", t.miniPractice.map(function (mp, i) { return miniPracticeHtml(mp, i); }).join(""));

    var done = Progress.isTopicDone(t.id);
    h += '<div class="detail-foot"><label class="check big"><input type="checkbox" data-act="kn-check" data-t="' + t.id + '"' + (done ? " checked" : "") + '><span>标记本主题为已完成</span></label></div>';

    $("#kn-topic-detail").innerHTML = h;
    $("#kn-topic-detail").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function section(title, body) {
    return '<section class="sec"><h4 class="sec-title">' + esc(title) + "</h4>" + body + "</section>";
  }
  function table(headers, rows) {
    return '<div class="tbl-wrap"><table class="tbl"><thead><tr>' +
      headers.map(function (x) { return "<th>" + esc(x) + "</th>"; }).join("") +
      "</tr></thead><tbody>" +
      rows.map(function (r) {
        return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>";
      }).join("") + "</tbody></table></div>";
  }
  function miniPracticeHtml(mp, idx) {
    var opts = (mp.options || []).map(function (o, i) {
      return '<button class="mini-opt" data-act="mini" data-idx="' + idx + '" data-opt="' + i + '">' + esc(o) + "</button>";
    }).join("");
    return '<div class="mini" data-mini="' + idx + '">' +
      '<div class="mini-q">' + esc(mp.q) + "</div>" +
      '<div class="mini-opts">' + opts + "</div>" +
      '<div class="mini-fb"></div>' +
      '<div class="mini-answer hidden"><strong>答案：</strong>' + esc(mp.answer) + '<div class="mini-expl">' + esc(mp.explain || "") + "</div></div>" +
      "</div>";
  }

  /* ============================================================
   * 通用：初始化 & 事件委托
   * ============================================================ */
  document.addEventListener("click", function (ev) {
    var el = ev.target.closest("[data-act]");
    if (!el) return;
    var act = el.dataset.act;

    // 导航
    if (act === "nav") { navTo(el.dataset.view); return; }

    // 首页快捷
    if (act === "home-know") { knowledgeUnit = el.dataset.u; navTo("knowledge"); return; }
    if (act === "home-practice") { navTo("practice"); if (window.__practice && window.__practice.presetUnit) window.__practice.presetUnit(el.dataset.u); return; }

    // 知识模块
    if (act === "kn-unit") { knowledgeUnit = el.dataset.u; renderKnowledge(); return; }
    if (act === "kn-open") { renderTopic(el.dataset.t); return; }
    if (act === "mini") { handleMini(el); return; }

    // 练习/模考 —— 全部交给 practice 模块
    var P = window.__practice;
    if (!P) return;
    if (act === "ps-start") { P.startFromSetup(); return; }
    if (act === "submit") { P.submitCurrent(); return; }
    if (act === "next") { P.nextQuestion(); return; }
    if (act === "finish") { P.renderResults(true); return; }
    if (act === "rev-retry-wrong") { P.retryWrong(); return; }
    if (act === "rev-review") { P.reviewMistakes(); return; }
    if (act === "show-similar") { P.showSimilar(el.dataset.q); return; }
    if (act === "ps-quick") { P.quickPractice(el.dataset.mode, el.dataset.val); return; }
    if (act === "ps-back-setup") { P.renderSetup(); return; }
    if (act === "reset-progress") {
      if (confirm("确定要清空所有学习进度与成绩吗？此操作不可撤销。")) { Progress.resetAll(); P.renderProgress(); renderHome(); }
      return;
    }
  });

  document.addEventListener("change", function (ev) {
    var el = ev.target.closest("[data-act]");
    if (!el) return;
    if (el.dataset.act === "kn-check") {
      Progress.setTopicDone(el.dataset.t, el.checked);
      var item = el.closest(".topic-item");
      if (item) item.classList.toggle("done", el.checked);
    }
  });

  function handleMini(btn) {
    var wrap = btn.closest(".mini");
    var idx = +btn.dataset.idx;
    var optIdx = +btn.dataset.opt;
    var mp = findMini(idx);
    if (!mp) return;
    var answer = mp.answer;
    var opts = mp.options || [];
    var chosen = opts[optIdx];
    var correct = Grading.matchAny(chosen, [answer]).correct;
    var fb = wrap.querySelector(".mini-fb");
    $all(".mini-opt", wrap).forEach(function (b, i) {
      b.classList.toggle("right", Grading.matchAny(opts[i], [answer]).correct);
      b.classList.toggle("sel", i === optIdx);
    });
    fb.className = "mini-fb " + (correct ? "ok" : "bad");
    fb.innerHTML = correct
      ? "✓ 正确！" + esc(mp.explain || "")
      : "✗ 不正确。正确答案：<strong>" + esc(answer) + "</strong><div class='mini-expl'>" + esc(mp.explain || "") + "</div>";
    var ansBox = wrap.querySelector(".mini-answer");
    if (ansBox) ansBox.classList.remove("hidden");
  }
  function findMini(idx) {
    var t = TOPIC_BY_ID[currentTopicId] ? TOPIC_BY_ID[currentTopicId].topic : null;
    if (t && t.miniPractice && t.miniPractice[idx]) return t.miniPractice[idx];
    return null;
  }
  var currentTopicId = null;

  /* 暴露给 practice 模块 */
  window.__app = {
    $: $, $all: $all, esc: esc, showView: showView, navTo: navTo,
    UNIT_OF: UNIT_OF, TOPIC_BY_ID: TOPIC_BY_ID, Q_BY_ID: Q_BY_ID,
    IMP_LABEL: IMP_LABEL, TYPE_LABEL: TYPE_LABEL, section: section, table: table,
    getSession: function () { return session; }, setSession: function (s) { session = s; },
    setCurrentTopic: function (id) { currentTopicId = id; },
    renderHome: renderHome, renderKnowledge: renderKnowledge, renderProgress: function () { if (window.__practice) window.__practice.renderProgress(); },
    renderTopic: renderTopic
  };

  /* 启动 */
  document.addEventListener("DOMContentLoaded", function () {
    renderHome();
    showView("home");
    var mb = $("#menu-btn"), nav = $(".mainnav");
    if (mb && nav) {
      mb.addEventListener("click", function () { nav.classList.toggle("open"); });
      nav.addEventListener("click", function (e) { if (e.target.classList.contains("nav-btn")) nav.classList.remove("open"); });
    }
  });
})();
