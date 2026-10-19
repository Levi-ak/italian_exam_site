/* ============================================================
 * progress.js — 本地进度与成绩追踪（localStorage，无需登录/后端）
 * 保存：知识清单完成情况、每题作答记录、单元/题型成绩、错题本。
 * ============================================================ */
(function (root) {
  "use strict";
  var KEY = "ita_exam_progress_v1";
  var data = null;

  function load() {
    if (data) return data;
    try {
      var raw = localStorage.getItem(KEY);
      data = raw ? JSON.parse(raw) : null;
    } catch (e) { data = null; }
    if (!data) {
      data = {
        topics: {},          // topicId -> {done:bool}
        attempts: {},        // qid -> {attempts:n, correct:n, wrong:n, lastUser, lastCorrect:bool, mastered:bool, unit, type, importance}
        unitStats: {},       // unit -> {correct, wrong}
        typeStats: {},       // type -> {correct, wrong}
        mistakes: {},        // qid -> {wrongAnswer, correctAnswer, at, resolved:bool}
        sessions: []         // 历史场次摘要
      };
    }
    return data;
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) {}
  }

  // —— 知识清单 ——
  function isTopicDone(topicId) { return !!(load().topics[topicId] && load().topics[topicId].done); }
  function setTopicDone(topicId, done) {
    load().topics[topicId] = { done: !!done };
    save();
    return isTopicDone(topicId);
  }
  function topicStats() {
    var d = load(), total = 0, done = 0;
    Object.keys(d.topics).forEach(function (k) { total++; if (d.topics[k].done) done++; });
    return { total: total, done: done };
  }

  // —— 记录一次作答 ——
  // result: {qid, unit, type, importance, userAnswer, correctAnswer, correct:bool}
  function record(result) {
    var d = load();
    var a = d.attempts[result.qid] || { attempts: 0, correct: 0, wrong: 0, mastered: false, unit: result.unit, type: result.type, importance: result.importance };
    a.attempts++;
    a.lastUser = result.userAnswer;
    a.lastCorrect = result.correct;
    a.unit = result.unit; a.type = result.type; a.importance = result.importance;
    if (result.correct) { a.correct++; } else { a.wrong++; }
    // 掌握：答对且无后续错误
    d.attempts[result.qid] = a;

    var u = d.unitStats[result.unit] || { correct: 0, wrong: 0 };
    var t = d.typeStats[result.type] || { correct: 0, wrong: 0 };
    if (result.correct) { u.correct++; t.correct++; }
    else { u.wrong++; t.wrong++; }
    d.unitStats[result.unit] = u;
    d.typeStats[result.type] = t;

    // 错题本
    if (result.correct) {
      if (d.mistakes[result.qid] && d.mistakes[result.qid].resolved === false) {
        // 再次作答正确则标记已解决（但仍保留在错题历史）
        d.mistakes[result.qid].resolved = true;
        d.mistakes[result.qid].times = (d.mistakes[result.qid].times || 1) + 1;
      }
    } else {
      d.mistakes[result.qid] = {
        wrongAnswer: result.userAnswer,
        correctAnswer: result.correctAnswer,
        at: Date.now(),
        resolved: false,
        unit: result.unit,
        type: result.type,
        times: (d.mistakes[result.qid] ? d.mistakes[result.qid].times || 1 : 1)
      };
    }
    save();
    return a;
  }

  function getAttempt(qid) { return load().attempts[qid] || null; }
  function isMistake(qid) { var m = load().mistakes[qid]; return !!m && !m.resolved; }
  function mistakeList() {
    var d = load(), out = [];
    Object.keys(d.mistakes).forEach(function (qid) {
      var m = d.mistakes[qid];
      if (!m.resolved) out.push({ qid: qid, info: m });
    });
    return out;
  }
  function allMistakes() { var d = load(); return Object.keys(d.mistakes).map(function (qid) { return { qid: qid, info: d.mistakes[qid] }; }); }

  function attemptedQuestions() { var d = load(); return Object.keys(d.attempts).length; }
  function unitStats(unit) { var d = load(); var s = d.unitStats[unit]; return s ? { correct: s.correct, wrong: s.wrong, attempted: s.correct + s.wrong } : { correct: 0, wrong: 0, attempted: 0 }; }
  function typeStats(type) { var d = load(); var s = d.typeStats[type]; return s ? { correct: s.correct, wrong: s.wrong, attempted: s.correct + s.wrong } : { correct: 0, wrong: 0, attempted: 0 }; }

  // 汇总成绩
  function overall() {
    var d = load(), correct = 0, wrong = 0;
    Object.keys(d.attempts).forEach(function (qid) { correct += d.attempts[qid].correct; wrong += d.attempts[qid].wrong; });
    var attempted = correct + wrong;
    return {
      attempted: attempted, correct: correct, wrong: wrong,
      accuracy: attempted ? Math.round(correct / attempted * 100) : 0
    };
  }

  // 保存一次练习场次
  function saveSession(summary) {
    var d = load();
    d.sessions.push(summary);
    if (d.sessions.length > 100) d.sessions = d.sessions.slice(-100);
    save();
    return summary;
  }
  function sessions() { return load().sessions.slice(); }

  function resetAll() {
    data = { topics: {}, attempts: {}, unitStats: {}, typeStats: {}, mistakes: {}, sessions: [] };
    save();
  }

  root.Progress = {
    isTopicDone: isTopicDone, setTopicDone: setTopicDone, topicStats: topicStats,
    record: record, getAttempt: getAttempt, isMistake: isMistake,
    mistakeList: mistakeList, allMistakes: allMistakes,
    attemptedQuestions: attemptedQuestions, overall: overall,
    unitStats: unitStats, typeStats: typeStats,
    saveSession: saveSession, sessions: sessions, resetAll: resetAll
  };
})(window);
