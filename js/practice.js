/* ============================================================
 * practice.js — 模块B：练习 / 模考 / 复习引擎 + 进度页
 * 依赖：QUESTIONS / Grading / Progress / window.__app
 * ============================================================ */
(function () {
  "use strict";
  var A = null; // window.__app（延迟取用，避免加载顺序问题）
  function app() { return window.__app; }
  function $(s, r) { return (r || document).querySelector(s); }
  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) { return app().esc(s); }

  /* 音效便捷调用：集中生成在 sound.js，这里只在正确事件点触发（安全降级） */
  function snd(name) { try { var S = window.Sound; if (S && typeof S[name] === "function") return S[name](); } catch (e) {} }

  /* 发音渲染助手：集中于 pronunciation.js（安全降级为普通转义） */
  function it(s) { try { if (window.Pron && window.Pron.it) return window.Pron.it(s); } catch (e) {} return esc(s); }
  function sayBtn(text, mode, label) {
    try { if (window.Pron && window.Pron.sayBtn) return window.Pron.sayBtn(text, mode, label); } catch (e) {}
    return "";
  }
  function dlgBtn(key, label, useAnswers) {
    try { if (window.Pron && window.Pron.dialogueBtn) return window.Pron.dialogueBtn(key, label, useAnswers); } catch (e) {}
    return "";
  }
  function regDlg(lines, answers) {
    try { if (window.Pron && window.Pron.registerDialogue) return window.Pron.registerDialogue(lines, answers); } catch (e) {}
    return "";
  }

  var TYPE_LABEL = { mcq: "选择题", fill: "填空题", dialogue: "对话补全" };
  var IMP_LABEL = { essential: "必背", important: "重要", supporting: "辅助" };

  /* 默认设置 */
  var cfg = {
    mode: "mixed",   // mixed | unit | type | important | mock | review
    unit: "all",
    type: "all",
    count: 10,
    timing: "immediate", // immediate | deferred
    timeLimit: 0
  };

  /* ---------- 工具 ---------- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function unitLabel(uid) { var u = app().UNIT_OF[uid]; return u ? "Unit " + u.number : uid; }

  function filterQuestions() {
    var list = QUESTIONS.slice();
    if (cfg.mode === "unit" && cfg.unit !== "all") list = list.filter(function (q) { return q.unit === cfg.unit; });
    if (cfg.mode === "type" && cfg.type !== "all") list = list.filter(function (q) { return q.type === cfg.type; });
    if (cfg.mode === "important") list = list.filter(function (q) { return q.importance === "essential" || q.importance === "important"; });
    if (cfg.mode === "review") {
      list = list.filter(function (q) { return Progress.isMistake(q.id); });
      return list; // 复习错题：不随机、全量
    }
    if (cfg.mode === "mock") { /* 模考：全部三单元 + 全部题型 */ }
    return list;
  }

  /* ============================================================
   * 设置界面
   * ============================================================ */
  function renderSetup() {
    var body = $("#practice-body");
    var modes = [
      ["mixed", "综合练习", "三个单元、全部题型混合"],
      ["unit", "按单元练习", "只练 Unit 1 / 2 / 3"],
      ["type", "按题型练习", "只练选择 / 填空 / 对话"],
      ["important", "只练重要知识点", "仅“必背/重要”级别题目"],
      ["mock", "模拟考试", "三单元全题型 · 练习模拟（非官方格式）"],
      ["review", "复习错题", "只做此前做错、尚未订正的题"]
    ];
    var h = '<div class="setup">' +
      '<h2>模块 B · 练习与模考</h2>' +
      '<p class="muted">选择练习方式、题量与讲解时机，然后开始。进度自动保存在本地。</p>' +
      '<div class="mode-grid">' +
      modes.map(function (m) {
        return '<label class="mode-card' + (cfg.mode === m[0] ? " active" : "") + '">' +
          '<input type="radio" name="ps-mode" value="' + m[0] + '"' + (cfg.mode === m[0] ? " checked" : "") + '>' +
          '<span class="mode-name">' + m[1] + '</span><span class="mode-desc">' + m[2] + '</span></label>';
      }).join("") + "</div>";

    // 条件：单元选择
    if (cfg.mode === "unit") {
      h += '<div class="opt-row"><span class="opt-label">选择单元：</span>' +
        '<div class="chip-row">' +
        ["U1", "U2", "U3"].map(function (u) {
          var uu = app().UNIT_OF[u];
          return '<label class="chip' + (cfg.unit === u ? " active" : "") + '"><input type="radio" name="ps-unit" value="' + u + '"' + (cfg.unit === u ? " checked" : "") + '>Unit ' + uu.number + '</label>';
        }).join("") + "</div></div>";
    }
    // 条件：题型选择
    if (cfg.mode === "type") {
      h += '<div class="opt-row"><span class="opt-label">选择题型：</span><div class="chip-row">' +
        ["mcq", "fill", "dialogue"].map(function (t) {
          return '<label class="chip' + (cfg.type === t ? " active" : "") + '"><input type="radio" name="ps-type" value="' + t + '"' + (cfg.type === t ? " checked" : "") + '>' + TYPE_LABEL[t] + '</label>';
        }).join("") + "</div></div>";
    }

    var pool = filterQuestions();
    var poolDesc = cfg.mode === "review"
      ? "当前有 " + pool.length + " 道错题可复习"
      : "题库符合范围的题目：" + pool.length + " 道";

    // 题量 + 讲解时机
    if (cfg.mode !== "review") {
      h += '<div class="opt-row"><span class="opt-label">题量：</span><div class="chip-row" id="ps-counts">' +
        [5, 10, 20, 0].map(function (n) {
          var label = n === 0 ? "全部" : n + " 题";
          return '<label class="chip' + (cfg.count === n ? " active" : "") + '"><input type="radio" name="ps-count" value="' + n + '"' + (cfg.count === n ? " checked" : "") + '>' + label + '</label>';
        }).join("") + "</div></div>";
    }

    h += '<div class="opt-row"><span class="opt-label">讲解时机：</span><div class="chip-row">' +
      [["immediate", "每题立即讲解"], ["deferred", "完成整套后再讲解"]].map(function (t) {
        return '<label class="chip' + (cfg.timing === t[0] ? " active" : "") + '"><input type="radio" name="ps-timing" value="' + t[0] + '"' + (cfg.timing === t[0] ? " checked" : "") + '>' + t[1] + '</label>';
      }).join("") + "</div></div>";

    if (cfg.mode === "mock") {
      h += '<div class="opt-row"><span class="opt-label">限时（分钟，0=不限）：</span><div class="chip-row">' +
        [0, 15, 30, 45].map(function (n) {
          return '<label class="chip' + (cfg.timeLimit === n ? " active" : "") + '"><input type="radio" name="ps-time" value="' + n + '"' + (cfg.timeLimit === n ? " checked" : "") + '>' + (n === 0 ? "不限" : n + " 分") + '</label>';
        }).join("") + "</div>" +
        '<div class="mock-note">说明：三份课程 PDF 未规定正式考试的题量、分值或时长，此处为<strong>练习模拟</strong>，非官方考试格式。</div></div>';
    }

    h += '<div class="setup-foot"><span class="pool-desc">' + esc(poolDesc) + '</span>' +
      '<button class="btn primary big" data-act="ps-start"' + (pool.length === 0 ? " disabled" : "") + '>开始练习</button></div>';
    h += "</div>";
    body.innerHTML = h;

    // 绑定单选变更
    $all('input[name="ps-mode"]', body).forEach(function (r) {
      r.addEventListener("change", function () { cfg.mode = this.value; if (this.value === "unit" && cfg.unit === "all") cfg.unit = "U1"; snd("playNavTick"); renderSetup(); });
    });
    $all('input[name="ps-unit"]', body).forEach(function (r) { r.addEventListener("change", function () { cfg.unit = this.value; snd("playNavTick"); renderSetup(); }); });
    $all('input[name="ps-type"]', body).forEach(function (r) { r.addEventListener("change", function () { cfg.type = this.value; snd("playNavTick"); renderSetup(); }); });
    $all('input[name="ps-count"]', body).forEach(function (r) { r.addEventListener("change", function () { cfg.count = +this.value; renderSetup(); }); });
    $all('input[name="ps-timing"]', body).forEach(function (r) { r.addEventListener("change", function () { cfg.timing = this.value; renderSetup(); }); });
    $all('input[name="ps-time"]', body).forEach(function (r) { r.addEventListener("change", function () { cfg.timeLimit = +this.value; renderSetup(); }); });
  }

  function presetUnit(u) {
    cfg.mode = "unit"; cfg.unit = u; renderSetup();
  }

  /* ============================================================
   * 开始一次练习
   * ============================================================ */
  function buildSession(pool, opts) {
    var questions = pool.slice();
    if (!opts || !opts.keepOrder) questions = shuffle(questions);
    if (cfg.count > 0 && questions.length > cfg.count) questions = questions.slice(0, cfg.count);
    return {
      questions: questions,
      index: 0,
      answers: [],       // {qid, userAnswer, correctAnswer, correct, unit, type, importance, explanation, knowledgePoint}
      timing: cfg.timing,
      mode: cfg.mode,
      startedAt: Date.now(),
      timeLimit: cfg.timeLimit || 0,
      deadline: (cfg.timeLimit && cfg.mode === "mock") ? Date.now() + cfg.timeLimit * 60000 : 0
    };
  }

  function startFromSetup() {
    var pool = filterQuestions();
    if (cfg.mode === "review") {
      // 错题复习保持题目原顺序，便于逐条订正
      var ordered = QUESTIONS.filter(function (q) { return Progress.isMistake(q.id); });
      if (!ordered.length) { alert("当前没有待复习的错题。"); return; }
      startSession(buildSession(ordered, { keepOrder: true }));
      return;
    }
    if (!pool.length) { alert("该范围内没有题目，请调整设置。"); return; }
    startSession(buildSession(pool));
  }

  function quickPractice(mode, val) {
    if (mode === "unit") { cfg.mode = "unit"; cfg.unit = val; cfg.count = 0; }
    if (mode === "type") { cfg.mode = "type"; cfg.type = val; }
    nav("practice");
    renderSetup();
    startFromSetup();
  }

  function startSession(sess) {
    app().setSession(sess);
    startTimer(sess);
    renderQuestion();
  }

  function nav(view) { app().navTo(view); }

  /* ---------- 限时 ---------- */
  var timerId = null;
  function startTimer(sess) {
    stopTimer();
    if (!sess.deadline) return;
    timerId = setInterval(function () {
      var left = Math.max(0, sess.deadline - Date.now());
      var el = $("#ps-timer");
      if (el) {
        var m = Math.floor(left / 60000), s = Math.floor((left % 60000) / 1000);
        el.textContent = "剩余 " + m + ":" + (s < 10 ? "0" : "") + s;
        el.classList.toggle("danger", left < 60000);
      }
      if (left <= 0) { stopTimer(); snd("playMockSubmit"); alert("时间到，自动提交。"); renderResults(true); }
    }, 500);
  }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  /* ============================================================
   * 渲染题目
   * ============================================================ */
  function renderQuestion() {
    var sess = app().getSession();
    if (!sess) { renderSetup(); return; }
    if (sess.index >= sess.questions.length) { renderResults(true); return; }
    var q = sess.questions[sess.index];
    var n = sess.questions.length, i = sess.index + 1;

    var head = '<div class="runner-head">' +
      '<div class="runner-bar"><span style="width:' + Math.round((i - 1) / n * 100) + '%"></span></div>' +
      '<div class="runner-meta">' +
      '<span class="q-pos">第 ' + i + " / " + n + " 题</span>" +
      '<span class="unit-badge sm">' + unitLabel(q.unit) + "</span>" +
      '<span class="type-badge">' + TYPE_LABEL[q.type] + "</span>" +
      '<span class="imp imp-' + q.importance + '">' + IMP_LABEL[q.importance] + "</span>" +
      '<span class="runner-timer" id="ps-timer"></span>' +
      "</div></div>";

    var topicName = "";
    var hit = app().TOPIC_BY_ID[q.topic];
    if (hit) topicName = hit.topic.title;

    var body = '<div class="runner-body">' +
      (topicName ? '<div class="q-topic">知识点：' + esc(topicName) + "</div>" : "") +
      '<div class="q-text">' + it(q.question) + sayBtn(q.question, "sentence", "朗读题干") + "</div>" +
      questionBody(q) +
      "</div>";

    var actions = '<div class="runner-actions">' +
      '<button class="btn primary big" id="btn-submit" data-act="submit">提交答案</button>' +
      '<div id="q-feedback" class="q-feedback"></div>' +
      "</div>";

    $("#practice-body").innerHTML = '<div class="runner">' + head + body + actions + "</div>";
    // 填空/对话聚焦第一空
    var first = $(".blank-input", $("#practice-body"));
    if (first) first.focus();
  }

  function questionBody(q) {
    if (q.type === "mcq") {
      return '<div class="options">' + q.options.map(function (o, i) {
        var letter = "ABCD"[i];
        return '<label class="option"><input type="radio" name="ps-answer" value="' + i + '">' +
          '<span class="opt-letter">' + letter + '</span><span class="opt-text">' + it(o) + "</span></label>";
      }).join("") + "</div>";
    }
    if (q.type === "fill") return fillHtml(q);
    if (q.type === "dialogue") return dialogueHtml(q);
    return "";
  }
  function fillHtml(q) {
    var parts = q.template.split(/\[(blank\d+)\]/);
    var out = "", bi = 0;
    for (var i = 0; i < parts.length; i++) {
      if (/^blank\d+$/.test(parts[i])) { out += '<input class="blank-input" name="ps-blank" autocomplete="off" spellcheck="false" placeholder="输入意大利语">'; bi++; }
      else out += it(parts[i]);
    }
    // 整句朗读只读已有意大利语文字，跳过占位空格（不读 placeholder）
    var spoken = "";
    try { if (window.Pron && window.Pron.templateSpokenText) spoken = window.Pron.templateSpokenText(q.template); } catch (e) {}
    return '<div class="q-fill">' + out + sayBtn(spoken, "sentence", "朗读题干") + "</div>";
  }
  function dialogueHtml(q) {
    var bi = 0;
    var lines = [], answers = [];
    var turns = q.turns.map(function (t) {
      if (t.blank) {
        var input = '<input class="blank-input wide" name="ps-blank" autocomplete="off" spellcheck="false" placeholder="补全这句">';
        bi++;
        lines.push(null);
        // 答案仅在“含答案播放”（判分揭晓后）时才会被朗读
        answers.push(q.blanks[bi - 1] && q.blanks[bi - 1].accepted ? q.blanks[bi - 1].accepted[0] : "");
        return '<div class="turn is-blank"><span class="spk">' + esc(t.speaker) + '</span><span class="bubble">' + input + "</span></div>";
      }
      lines.push(t.text);
      answers.push(null);
      return '<div class="turn"><span class="spk">' + esc(t.speaker) + '</span><span class="bubble">' + it(t.text) + sayBtn(t.text, "sentence", "播放这句") + "</span></div>";
    }).join("");
    var key = regDlg(lines, answers);
    return '<div class="context">' + it(q.context || "") + "</div>" +
      '<div class="dlg-tools">' + dlgBtn(key, "播放完整对话（跳过未填的空）", false) + "</div>" +
      '<div class="dialogue">' + turns + "</div>";
  }

  /* ============================================================
   * 提交 / 判分
   * ============================================================ */
  function collectAnswer(q) {
    if (q.type === "mcq") {
      var checked = $('input[name="ps-answer"]:checked', $("#practice-body"));
      if (!checked) return null;
      var idx = +checked.value;
      return { userAnswer: q.options[idx], correct: idx === q.answerIndex, correctAnswer: q.options[q.answerIndex] };
    }
    // fill / dialogue
    var vals = $all('input[name="ps-blank"]', $("#practice-body")).map(function (inp) { return inp.value; });
    if (!vals.length) return null;
    var res = Grading.checkBlanks(vals, q.blanks);
    var userAnswer = vals.map(function (v) { return v.trim() === "" ? "（未填）" : v.trim(); }).join(" / ");
    return { userAnswer: userAnswer, correct: res.correct, correctAnswer: q.answerDisplay || "" };
  }

  function submitCurrent() {
    var sess = app().getSession();
    if (!sess) return;
    var q = sess.questions[sess.index];
    if (sess.answers[sess.index]) return; // 已作答

    var got = collectAnswer(q);
    if (!got) { alert(q.type === "mcq" ? "请先选择一个答案。" : "请先填写空格。"); return; }

    // 记录
    var rec = {
      qid: q.id, unit: q.unit, type: q.type, importance: q.importance,
      userAnswer: got.userAnswer, correctAnswer: got.correctAnswer, correct: got.correct,
      explanation: q.explanation, knowledgePoint: q.knowledgePoint
    };
    sess.answers[sess.index] = rec;
    Progress.record(rec);

    // 音效：仅“立即讲解”模式在此判分一次即播对/错。
    // 已过上方“已作答”与“未作答”守卫 → 每题至多一次；
    // “完成后再讲解”模式不提前泄露对错，故此处不播（结果页统一提示）。
    if (sess.timing === "immediate") { if (rec.correct) snd("playCorrect"); else snd("playIncorrect"); }

    // 锁定输入
    $all("#practice-body input").forEach(function (el) { el.disabled = true; });
    var sub = $("#btn-submit"); if (sub) { sub.disabled = true; sub.classList.add("used"); }

    var fb = $("#q-feedback");
    var showFeedback = sess.timing === "immediate";
    var html = "";
    if (showFeedback) html = feedbackHtml(rec, q);
    else html = '<div class="fb-neutral">✓ 已记录（按“完成整套后再讲解”，提交后暂不显示对错）</div>';
    html += '<div class="fb-actions"><button class="btn primary" data-act="next">' +
      (sess.index + 1 < sess.questions.length ? "下一题" : "查看结果") + "</button></div>";
    fb.innerHTML = html;
    fb.classList.add("shown");

    // 标注选项对错（立即模式）
    if (showFeedback) markOptions(q, rec);
  }

  /* 为一道对话题注册“含答案”的行数据（用于判分揭晓后的完整播放） */
  function dlgKeyFor(q) {
    if (!q || q.type !== "dialogue" || !q.turns) return "";
    var lines = [], answers = [], bi = 0;
    q.turns.forEach(function (t) {
      if (t.blank) {
        lines.push(null);
        answers.push(q.blanks && q.blanks[bi] && q.blanks[bi].accepted ? q.blanks[bi].accepted[0] : "");
        bi++;
      } else { lines.push(t.text); answers.push(null); }
    });
    return regDlg(lines, answers);
  }

  function feedbackHtml(rec, q) {
    var cls = rec.correct ? "ok" : "bad";
    var h = '<div class="fb ' + cls + '">' +
      '<div class="fb-verdict">' + (rec.correct ? "✓ 回答正确" : "✗ 回答错误") + "</div>" +
      '<div class="fb-row"><span class="fb-k">你的答案：</span><span class="fb-v">' + it(rec.userAnswer) + sayBtn(rec.userAnswer, "sentence", "朗读你的答案") + "</span></div>";
    if (!rec.correct)
      h += '<div class="fb-row"><span class="fb-k">正确答案：</span><span class="fb-v ans">' + it(rec.correctAnswer) + sayBtn(rec.correctAnswer, "sentence", "朗读正确答案") + "</span></div>";
    if (rec.knowledgePoint)
      h += '<div class="fb-row"><span class="fb-k">相关知识点：</span><span class="fb-v">' + it(rec.knowledgePoint) + "</span></div>";
    if (rec.explanation)
      h += '<div class="fb-expl"><strong>讲解：</strong>' + it(rec.explanation) + "</div>";
    if (rec.explanation)
      h += '<div class="fb-actions"><button type="button" class="btn ghost sm" data-act="expl-done">已读完解析</button></div>';
    // 对话题：答案已揭晓，可播放“含答案”的完整对话
    if (q && q.type === "dialogue") {
      var dk = dlgKeyFor(q);
      if (dk) h += '<div class="fb-row dlg-tools"><span class="fb-k">对话朗读：</span>' + dlgBtn(dk, "播放完整对话（含答案）", true) + "</div>";
    }
    if (!rec.correct) {
      // 其他选项为何不对（选择题）
      if (q.type === "mcq" && q.distractorExplanations) {
        var wrongs = [];
        q.options.forEach(function (o, i) {
          if (i !== q.answerIndex && q.distractorExplanations[String(i)])
            wrongs.push('<li><strong>' + "ABCD"[i] + ". " + it(o) + "</strong> — " + esc(q.distractorExplanations[String(i)]) + "</li>");
        });
        if (wrongs.length) h += '<div class="fb-why"><strong>其他选项为什么不对：</strong><ul>' + wrongs.join("") + "</ul></div>";
      }
      h += '<div class="fb-actions"><button class="btn ghost" data-act="show-similar" data-q="' + esc(q.id) + '">看一道同类题</button></div>';
    }
    h += "</div>";
    return h;
  }

  function markOptions(q, rec) {
    if (q.type !== "mcq") return;
    $all(".option", $("#practice-body")).forEach(function (lab, i) {
      var inp = lab.querySelector("input");
      if (i === q.answerIndex) lab.classList.add("right");
      else if (inp.checked) lab.classList.add("wrong");
      lab.classList.add("locked");
    });
  }

  function nextQuestion() {
    var sess = app().getSession();
    if (!sess) return;
    sess.index++;
    if (sess.index >= sess.questions.length) renderResults(true);
    else renderQuestion();
  }

  /* ============================================================
   * 结果 / 小结
   * ============================================================ */
  function renderResults() {
    var sess = app().getSession();
    if (!sess || !sess.answers.length) { renderSetup(); return; }
    stopTimer();

    // 音效：结果“首次”展示时播一次，重绘不重复（用场次标记防重）。
    // 模考 → 克制、区别化的结果提示；其余练习 → 简短成功旋律。
    // 仅凭提交本身不播放“成功音”，成功音属于“看到成绩”这一刻。
    if (!sess._resultsSoundPlayed) {
      sess._resultsSoundPlayed = true;
      if (sess.mode === "mock") snd("playMockResults"); else snd("playSessionComplete");
    }
    var ans = sess.answers.filter(Boolean);
    var correct = ans.filter(function (a) { return a.correct; }).length;
    var wrong = ans.length - correct;
    var acc = ans.length ? Math.round(correct / ans.length * 100) : 0;

    // 单元 / 题型小计
    var byUnit = {}, byType = {};
    ans.forEach(function (a) {
      byUnit[a.unit] = byUnit[a.unit] || { c: 0, w: 0 };
      byType[a.type] = byType[a.type] || { c: 0, w: 0 };
      if (a.correct) { byUnit[a.unit].c++; byType[a.type].c++; }
      else { byUnit[a.unit].w++; byType[a.type].w++; }
    });

    var modeName = { mixed: "综合练习", unit: "按单元练习", type: "按题型练习", important: "重要知识点", mock: "模拟考试", review: "错题复习" }[sess.mode] || "练习";

    var summary = {
      at: Date.now(), mode: modeName, total: ans.length, correct: correct, wrong: wrong, accuracy: acc,
      byUnit: byUnit, byType: byType
    };
    Progress.saveSession(summary);

    var deferred = sess.timing === "deferred";

    var h = '<div class="results">' +
      '<h2>' + (modeName) + " · 小结</h2>" +
      '<div class="stat-grid">' +
      card("总题数", ans.length, "本场完成") +
      card("正确 / 错误", correct + " / " + wrong, "") +
      card("正确率", acc + "%", "") +
      card("用时", fmtTime(Date.now() - sess.startedAt), "") +
      "</div>";

    // 单元分解
    var unitRows = Object.keys(byUnit).map(function (u) {
      var s = byUnit[u]; return "<tr><td>" + unitLabel(u) + "</td><td>" + s.c + "</td><td>" + s.w + "</td><td>" + (s.c + s.w ? Math.round(s.c / (s.c + s.w) * 100) : 0) + "%</td></tr>";
    }).join("");
    if (unitRows) h += '<h3 class="sub">按单元</h3>' + table(["单元", "对", "错", "正确率"], unitRows);

    var typeRows = Object.keys(byType).map(function (t) {
      var s = byType[t]; return "<tr><td>" + TYPE_LABEL[t] + "</td><td>" + s.c + "</td><td>" + s.w + "</td><td>" + (s.c + s.w ? Math.round(s.c / (s.c + s.w) * 100) : 0) + "%</td></tr>";
    }).join("");
    if (typeRows) h += '<h3 class="sub">按题型</h3>' + table(["题型", "对", "错", "正确率"], typeRows);

    // 逐题回顾
    h += '<h3 class="sub">逐题回顾</h3><div class="review-list">';
    ans.forEach(function (a, i) {
      var showExpl = deferred || !a.correct;
      h += '<div class="rev-item ' + (a.correct ? "ok" : "bad") + '">' +
        '<div class="rev-head"><span class="rev-idx">' + (i + 1) + "</span>" +
        '<span class="rev-mark">' + (a.correct ? "✓" : "✗") + "</span>" +
        '<span class="unit-badge sm">' + unitLabel(a.unit) + "</span>" +
        '<span class="type-badge">' + TYPE_LABEL[a.type] + "</span></div>";
      var q = app().Q_BY_ID[a.qid];
      if (q) h += '<div class="rev-q">' + it(q.question) + sayBtn(q.question, "sentence", "朗读题干") + "</div>";
      h += '<div class="rev-row"><span class="fb-k">你的答案：</span>' + it(a.userAnswer) + sayBtn(a.userAnswer, "sentence", "朗读你的答案") + "</div>";
      if (!a.correct) h += '<div class="rev-row"><span class="fb-k">正确答案：</span><span class="ans">' + it(a.correctAnswer) + sayBtn(a.correctAnswer, "sentence", "朗读正确答案") + "</span></div>";
      if (showExpl) {
        if (a.knowledgePoint) h += '<div class="rev-row"><span class="fb-k">知识点：</span>' + it(a.knowledgePoint) + "</div>";
        if (a.explanation) h += '<div class="rev-expl">' + it(a.explanation) + "</div>";
      }
      // 结果页已判分：对话题可播放“含答案”的完整对话
      if (q && q.type === "dialogue") {
        var rdk = dlgKeyFor(q);
        if (rdk) h += '<div class="rev-row dlg-tools"><span class="fb-k">对话朗读：</span>' + dlgBtn(rdk, "播放完整对话（含答案）", true) + "</div>";
      }
      h += "</div>";
    });
    h += "</div>";

    // 行动
    var wrongCount = ans.filter(function (a) { return !a.correct; }).length;
    h += '<div class="results-actions">' +
      '<button class="btn primary" data-act="rev-retry-wrong"' + (wrongCount ? "" : " disabled") + ">重做本场错题（" + wrongCount + "）</button>" +
      '<button class="btn" data-act="rev-review">复习错题本</button>' +
      '<button class="btn ghost" data-act="ps-back-setup">返回设置</button>' +
      "</div></div>";

    $("#practice-body").innerHTML = h;
    $("#practice-body").scrollIntoView({ behavior: "smooth", block: "start" });
    app().setSession(sess);
  }

  function card(label, value, sub) {
    return '<div class="stat-card"><div class="stat-value">' + esc(value) + '</div><div class="stat-label">' + esc(label) + '</div><div class="stat-sub">' + esc(sub) + "</div></div>";
  }
  function table(headers, rows) {
    return '<div class="tbl-wrap"><table class="tbl"><thead><tr>' + headers.map(function (x) { return "<th>" + esc(x) + "</th>"; }).join("") + "</tr></thead><tbody>" + rows + "</tbody></table></div>";
  }
  function fmtTime(ms) {
    var s = Math.floor(ms / 1000); var m = Math.floor(s / 60); s = s % 60;
    return m + " 分 " + (s < 10 ? "0" : "") + s + " 秒";
  }

  /* ============================================================
   * 错题相关动作
   * ============================================================ */
  function wrongQidsFromSession() {
    var sess = app().getSession();
    if (!sess) return [];
    return sess.answers.filter(Boolean).filter(function (a) { return !a.correct; }).map(function (a) { return a.qid; });
  }
  function startByIds(ids) {
    var qs = ids.map(function (id) { return app().Q_BY_ID[id]; }).filter(Boolean);
    if (!qs.length) { alert("没有可练习的题目。"); return; }
    startSession(buildSession(qs, { keepOrder: true }));
  }
  function retryWrong() { var ids = wrongQidsFromSession(); if (!ids.length) { alert("本场没有错题。"); return; } startByIds(ids); }
  function reviewMistakes() {
    var ids = Progress.mistakeList().map(function (m) { return m.qid; });
    if (!ids.length) { alert("错题本是空的，继续加油！"); return; }
    startByIds(ids);
  }
  function showSimilar(qid) {
    var q = app().Q_BY_ID[qid];
    if (!q) return;
    var pool = QUESTIONS.filter(function (x) {
      return x.id !== qid && (x.topic === q.topic || x.unit === q.unit);
    });
    // 优先同主题
    pool.sort(function (a, b) { return (a.topic === q.topic ? 0 : 1) - (b.topic === q.topic ? 0 : 1); });
    var sim = pool[0];
    if (!sim) { alert("暂时没有同类题了。"); return; }
    renderQuestionPreview(sim, "同类巩固题");
  }

  /* 以只读+单题作答的形式渲染一道题（用于“看同类题”） */
  function renderQuestionPreview(q, title) {
    var html = '<div class="runner preview">' +
      '<div class="runner-head"><div class="runner-meta">' +
      '<span class="q-pos">' + esc(title || "试一试") + "</span>" +
      '<span class="unit-badge sm">' + unitLabel(q.unit) + "</span>" +
      '<span class="type-badge">' + TYPE_LABEL[q.type] + "</span>" +
      "</div></div>" +
      '<div class="runner-body"><div class="q-text">' + it(q.question) + sayBtn(q.question, "sentence", "朗读题干") + "</div>" + questionBody(q) + "</div>" +
      '<div class="runner-actions"><button class="btn primary" id="btn-submit" data-act="submit-preview" data-q="' + esc(q.id) + '">提交</button>' +
      '<div id="q-feedback" class="q-feedback"></div>' +
      '<button class="btn ghost" data-act="close-preview">返回原题</button></div></div>';
    // 临时挂载到一个浮层
    var overlay = document.createElement("div");
    overlay.className = "preview-overlay";
    overlay.innerHTML = '<div class="preview-box">' + html + "</div>";
    document.body.appendChild(overlay);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) overlay.remove();
      var act = e.target.closest("[data-act]");
      if (!act) return;
      if (act.dataset.act === "close-preview") { overlay.remove(); return; }
      if (act.dataset.act === "submit-preview") {
        var got = collectAnswer(q);
        if (!got) { alert(q.type === "mcq" ? "请先选择答案。" : "请先填写。"); return; }
        $all("input", overlay).forEach(function (i2) { i2.disabled = true; });
        var rec = { correct: got.correct, userAnswer: got.userAnswer, correctAnswer: got.correctAnswer, explanation: q.explanation, knowledgePoint: q.knowledgePoint };
        // 音效：同类题预览为即时判分，播一次对/错（按钮随即禁用，防重复）
        if (got.correct) snd("playCorrect"); else snd("playIncorrect");
        $("#q-feedback", overlay).innerHTML = feedbackHtml(rec, q) ;
        markOptionsIn(overlay, q, rec);
        act.disabled = true;
      }
    });
  }
  function markOptionsIn(root, q, rec) {
    if (q.type !== "mcq") return;
    $all(".option", root).forEach(function (lab, i) {
      var inp = lab.querySelector("input");
      if (i === q.answerIndex) lab.classList.add("right");
      else if (inp && inp.checked) lab.classList.add("wrong");
      lab.classList.add("locked");
    });
  }

  /* ============================================================
   * 进度页
   * ============================================================ */
  function renderProgress() {
    var ov = Progress.overall();
    var totalTopics = 0, doneTopics = 0;
    CONTENT.units.forEach(function (u) {
      u.topics.forEach(function (t) { totalTopics++; if (Progress.isTopicDone(t.id)) doneTopics++; });
    });

    var h = '<div class="progress-page"><h2>我的进度</h2>' +
      '<div class="stat-grid">' +
      card("累计作答", ov.attempted, "总题量") +
      card("正确率", ov.accuracy + "%", ov.correct + " 对 / " + ov.wrong + " 错") +
      card("知识清单", doneTopics + "/" + totalTopics, "已完成主题") +
      card("待订正错题", Progress.mistakeList().length, "错题本") +
      "</div>";

    // 单元成绩
    var unitRows = CONTENT.units.map(function (u) {
      var s = Progress.unitStats(u.id);
      return "<tr><td>" + unitLabel(u.id) + " · " + esc(u.title) + "</td><td>" + s.attempted + "</td><td>" + s.correct + "</td><td>" + s.wrong + "</td><td>" + (s.attempted ? Math.round(s.correct / s.attempted * 100) : 0) + "%</td></tr>";
    }).join("");
    h += '<h3 class="sub">各单元成绩</h3>' + table(["单元", "作答", "正确", "错误", "正确率"], unitRows);

    // 题型成绩
    var typeRows = ["mcq", "fill", "dialogue"].map(function (t) {
      var s = Progress.typeStats(t);
      return "<tr><td>" + TYPE_LABEL[t] + "</td><td>" + s.attempted + "</td><td>" + s.correct + "</td><td>" + s.wrong + "</td><td>" + (s.attempted ? Math.round(s.correct / s.attempted * 100) : 0) + "%</td></tr>";
    }).join("");
    h += '<h3 class="sub">各题型成绩</h3>' + table(["题型", "作答", "正确", "错误", "正确率"], typeRows);

    // 错题本
    var mistakes = Progress.mistakeList();
    h += '<h3 class="sub">错题本（待订正 · ' + mistakes.length + "）</h3>";
    if (!mistakes.length) {
      h += '<p class="muted">当前没有待订正的错题。🎉</p>';
    } else {
      h += '<div class="review-list">';
      mistakes.forEach(function (m) {
        var q = app().Q_BY_ID[m.qid];
        if (!q) return;
        h += '<div class="rev-item bad">' +
          '<div class="rev-head"><span class="unit-badge sm">' + unitLabel(q.unit) + "</span>" +
          '<span class="type-badge">' + TYPE_LABEL[q.type] + "</span>" +
          '<span class="rev-time">' + new Date(m.info.at).toLocaleString() + "</span></div>" +
          '<div class="rev-q">' + it(q.question) + sayBtn(q.question, "sentence", "朗读题干") + "</div>" +
          '<div class="rev-row"><span class="fb-k">你的答案：</span>' + it(m.info.wrongAnswer) + sayBtn(m.info.wrongAnswer, "sentence", "朗读你的答案") + "</div>" +
          '<div class="rev-row"><span class="fb-k">正确答案：</span><span class="ans">' + it(m.info.correctAnswer) + sayBtn(m.info.correctAnswer, "sentence", "朗读正确答案") + "</span></div>" +
          (q.knowledgePoint ? '<div class="rev-row"><span class="fb-k">知识点：</span>' + it(q.knowledgePoint) + "</div>" : "") +
          (q.explanation ? '<div class="rev-expl">' + it(q.explanation) + "</div>" : "") +
          '<div class="rev-actions"><button class="btn sm" data-act="show-similar" data-q="' + esc(q.id) + '">同类题</button></div>' +
          "</div>";
      });
      h += "</div>";
      h += '<div class="results-actions"><button class="btn primary" data-act="rev-review">重做全部错题</button></div>';
    }

    // 历史场次
    var ss = Progress.sessions().slice(-8).reverse();
    if (ss.length) {
      h += '<h3 class="sub">最近练习记录</h3><div class="tbl-wrap"><table class="tbl"><thead><tr><th>时间</th><th>模式</th><th>题数</th><th>正确</th><th>正确率</th></tr></thead><tbody>' +
        ss.map(function (s) {
          return "<tr><td>" + new Date(s.at).toLocaleString() + "</td><td>" + esc(s.mode) + "</td><td>" + s.total + "</td><td>" + s.correct + "</td><td>" + s.accuracy + "%</td></tr>";
        }).join("") + "</tbody></table></div>";
    }

    // 声音设置（面板 HTML 由 sound.js 提供，控件事件在 sound.js 内以 document 委托接线）
    h += (window.Sound && window.Sound.settingsHtml) ? window.Sound.settingsHtml() : "";

    // 发音设置（面板 HTML 由 pronunciation.js 提供，事件同样在其内部以 document 委托接线）
    h += (window.Pron && window.Pron.settingsHtml) ? window.Pron.settingsHtml() : "";

    h += '<div class="results-actions"><button class="btn ghost" data-act="reset-progress">清空全部进度</button></div>';
    h += "</div>";
    $("#progress-body").innerHTML = h;
  }

  /* 对外接口 */
  window.__practice = {
    renderSetup: renderSetup, presetUnit: presetUnit, startFromSetup: startFromSetup,
    quickPractice: quickPractice, renderProgress: renderProgress, renderResults: renderResults,
    submitCurrent: submitCurrent, nextQuestion: nextQuestion,
    retryWrong: retryWrong, reviewMistakes: reviewMistakes, showSimilar: showSimilar,
    _renderQuestion: renderQuestion
  };
})();
