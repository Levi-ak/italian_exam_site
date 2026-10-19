/* ============================================================
 * grading.js — 答案判定逻辑（纯函数，无副作用，便于测试）
 * Italian exam revision site.
 *
 * 设计目标（见需求 §4、§7）：
 *  - 对大小写、多余标点、首尾/重复空格宽容；
 *  - 保留并尊重意大利语的重音字母（è/à/ò/ù/ì），但把"没打重音"的
 *    合理输入视为同一词（如 caffe == caffè），因为这属于无害输入差异；
 *  - 一题若在课程规则下有多个正确答案，用 accepted 数组显式全部接受；
 *  - 不依赖任何外部 AI 判分。
 *
 * 该文件在浏览器中挂到 window.Grading，在 Node 中 module.exports，
 * 以便同一份逻辑同时被网站和自动化测试使用。
 * ============================================================ */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.Grading = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  // 把弯引号/各种撇号统一成直撇号，便于比较
  function normalizeApostrophes(s) {
    return String(s)
      .replace(/[\u2018\u2019\u201B\u02BC]/g, "'") // ‘ ’ ‛ ʼ
      .replace(/[\u201C\u201D]/g, '"');            // “ ”
  }

  // 去掉组合用重音符号：è→e, à→a, ù→u …（NFD 分解后删除变音记号）
  function stripAccents(s) {
    return String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  /**
   * 判定用的规范化：
   * 小写 → 统一撇号 → 去掉标点(保留字母数字与空格) → 折叠空格 → 去重音。
   * 返回一个用于比较的纯文本串。
   */
  function canonical(text) {
    var s = normalizeApostrophes(text);
    s = s.toLowerCase();
    // 保留字母（含重音字母）、数字、空格；连字符视作空格；其余标点删除
    s = s.replace(/[-/_,;:!.?"()\[\]{}\u00AB\u00BB]/g, " ");
    s = s.replace(/[^0-9a-z\u00C0-\u024F\s]/g, " ");
    s = stripAccents(s);
    s = s.replace(/\s+/g, " ").trim();
    return s;
  }

  // 规范化用于"展示时的对比"，保留重音（只做大小写/空白/标点处理）
  function display(text) {
    var s = normalizeApostrophes(text);
    s = s.toLowerCase();
    s = s.replace(/[-/_,;:!.?"()\[\]{}\u00AB\u00BB]/g, " ");
    s = s.replace(/\s+/g, " ").trim();
    return s;
  }

  /**
   * 判断 user 是否匹配任一可接受答案。
   * accepted: 字符串 或 字符串数组（多个都算对）。
   * 返回 { correct:boolean, matched:string|null }
   */
  function matchAny(user, accepted) {
    if (accepted == null) return { correct: false, matched: null };
    var list = Array.isArray(accepted) ? accepted : [accepted];
    var u = canonical(user == null ? "" : user);
    if (u === "") return { correct: false, matched: null };
    for (var i = 0; i < list.length; i++) {
      var cand = list[i];
      if (cand == null) continue;
      var c = canonical(cand);
      if (c !== "" && u === c) {
        return { correct: true, matched: String(cand) };
      }
    }
    return { correct: false, matched: null };
  }

  /**
   * 多空格填空：blanks 是每空的可接受答案数组。
   * userAnswers 是用户对每空的输入（数组，顺序对应）。
   * 返回 { correct, results:[{correct, matched}], answeredCount }
   */
  function checkBlanks(userAnswers, blanks) {
    var results = [];
    var allCorrect = true;
    var answeredCount = 0;
    for (var i = 0; i < blanks.length; i++) {
      var user = (userAnswers && userAnswers[i]) || "";
      if (String(user).trim() !== "") answeredCount++;
      var m = matchAny(user, blanks[i].accepted || blanks[i]);
      results.push({ correct: m.correct, matched: m.matched });
      if (!m.correct) allCorrect = false;
    }
    return { correct: allCorrect, results: results, answeredCount: answeredCount };
  }

  /**
   * 判定一道选择题：user 是所选选项的 key（如 "A"/"B"），answer 是正确 key。
   */
  function checkChoice(user, answer) {
    var u = canonical(user == null ? "" : user);
    var a = canonical(answer == null ? "" : answer);
    return { correct: u !== "" && u === a };
  }

  return {
    canonical: canonical,
    display: display,
    stripAccents: stripAccents,
    normalizeApostrophes: normalizeApostrophes,
    matchAny: matchAny,
    checkBlanks: checkBlanks,
    checkChoice: checkChoice
  };
});
