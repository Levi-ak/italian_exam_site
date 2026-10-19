# 意语备考复习站 · Espresso 1（Unit 1–3）

一个**纯前端、可本地打开**的意大利语备考复习网站，界面为中文，意语原文保留并附中文讲解。
全部课程内容**严格取自**三份课程 PDF：

- `UNITA1_NE1.pdf` — Unit 1 *Primi contatti*（初次见面）
- `UNITA2_NE1.pdf` — Unit 2 *Io e gli altri*（我与他人）
- `UNITA3_NE1.pdf` — Unit 3 *Buon appetito*（祝你好胃口）

教材对应 **Espresso 1 New Edition（Alma Edizioni）第一册第 1–3 课**。
本项目**不使用任何外部框架 / 构建工具 / 在线接口**，也不需要登录或数据库。

---

## 一、如何运行

本项目是静态网页，所有数据以 JS 文件形式内嵌（用 `<script>` 标签加载），因此**直接双击 `index.html` 就能用**（`file://` 协议即可）。

**方式 A：直接打开**
双击 `index.html` 即可在浏览器中打开。

**方式 B：本地服务器（推荐，体验最稳）**

```bash
cd italian_exam_site
python -m http.server 8765
# 浏览器访问 http://localhost:8765/index.html
```

> 进度、错题本、练习记录都保存在浏览器 `localStorage`（本地），不需要联网。
> 若浏览器对 `file://` 的本地存储有限制，请改用方式 B。

---

## 二、两个模块

### 模块 A · 知识复习
- 三个单元 → 共 **32 个知识点主题**（U1: 9，U2: 12，U3: 11）。
- 每个主题包含：**知识讲解 / 重要规则 / 词汇表 / 语法表格 / 例句（意语+中文）/ 答题步骤 / 常见错误 / 小结 / 小练习**。
- 主题按重要性分级标签：**必背 / 重要 / 辅助**。
- 可勾选“完成”，进度自动保存。

### 模块 B · 练习 / 模考
6 种练习方式：
1. **综合练习** —— 三单元、全部题型混合
2. **按单元练习** —— 只练 Unit 1 / 2 / 3
3. **按题型练习** —— 只练选择 / 填空 / 对话
4. **只练重要知识点** —— 仅“必背 / 重要”级别题目
5. **模拟考试** —— 三单元全题型、可选限时（⚠️ 练习模拟，**非官方考试格式**，见下文）
6. **复习错题** —— 只做此前做错、尚未订正的题

可配置：**题量**（5 / 10 / 20 / 全部）、**讲解时机**（每题立即讲解 / 完成整套后再讲解）。

**题型**：选择题（34）、填空题（17）、对话补全（9），共 **60 题**。

**答对 / 答错后**：
- 答错会展示：**你的答案 / 正确答案 / 相关知识点 / 详细中文讲解 / 其他选项为何不对（选择题）/ 一道同类巩固题**。
- 判分宽容：忽略大小写、多余空格、无害标点，**统一重音**（`caffe` == `caffè`）、统一直/弯引号；支持**多个可接受答案**。

**成绩与进度**（“我的进度”页）：
- 已练 / 正确 / 错误 / 正确率；按**单元**、按**题型**分别统计。
- 错题本（我的答案 / 正确答案 / 知识点 / 讲解），支持**重做错题**、**复习全部错题**。
- 一键**清空进度**。

---

## 三、题库可维护性

题目存放于 `js/questions-u1/u2/u3.js`（每单元一个文件，便于维护），JSON 数组格式，每题字段：

```text
id, unit, topic, type(mcq|fill|dialogue), difficulty, importance(essential|important|supporting),
question,
  mcq    → options[], answerIndex
  fill   → template("...[blank0]..."), blanks[{accepted:[...]}]
  dialogue → context, turns[{speaker, text|blank:true}], blanks[{accepted:[...]}]
explanation, distractorExplanations, knowledgePoint, source(源PDF文件名), page(源页码/定位)
```

- **每题都标注来源 PDF 与页码**，可追溯到原始课程 PDF。
- `js/grading.js` 是独立的判分引擎（UMD，浏览器 / Node / Duktape 通用）。

---

## 四、内容提取说明与已知问题

三份 PDF 均已逐页检查，提取过程如下：

1. **三份 PDF 全部是扫描图像，没有文本层**（0 个可提取文本字符）。
2. 因此采用“逐页渲染为图片 → 逐页视觉阅读”的方式提取内容，共 **56 页**，全部成功读出，**无无法辨认的页面**。
3. 课程为 *Espresso 1 New Edition* 第 1–3 课。PDF 页与书本页的对应关系：
   - Unit 1：课文页 = 书 6–16 页；练习页 = 书 145–149 页
   - Unit 2：课文页 = 书 17–28 页；练习页 = 书 150–153 页
   - Unit 3：课文页 = 书 33–44 页；练习页 = 书 158–162 页

**已知问题 / 注意事项：**
- **全部三份 PDF 为扫描图像**，无文本层；所有文字均通过逐页读图获得。
- **`UNITA1_NE1.pdf` 第 15–16 页是书本第 147 页的重复扫描**（同一页被扫了两次），提取时已按同一页处理、去重。
- **三份 PDF 都没有规定正式考试的题量、分值或考试时长**。因此本站的“模拟考试”只是**练习模拟**，并非官方考试格式；网站内也**不做任何“包过 / 保分”类承诺**（PDF 未如此说明）。

> 内容一律保留意语原文 + 中文翻译/讲解；凡 PDF 未明确说明的，均不臆造课程主题、语法或考试要求。

---

## 五、自动化测试

**1）无头校验 + 判分测试（推荐在改动数据后运行）**

```bash
cd italian_exam_site
python _work/validate.py
```

该脚本用真实 JS 引擎（Duktape）完成：
- 11 个 JS 文件的**真实解析 / 执行**（任何语法错误都会被捕获）；
- 内容与题库结构校验（3 单元 / 32 主题 / 60 题 / 三类题型齐全 / 题号唯一）；
- **答案判定自动化测试**（大小写、空格、标点、重音、多可接受答案、填空逐空、选择题判分）；
- 题库健全性审计（必填字段、选项越界、空格数量与占位符一致）。

> 依赖：`pip install dukpy`

**2）浏览器内判分测试**
直接打开 `tests/test_grading.html`，即可在浏览器里看到判分引擎的逐条断言结果（当前 **15/15 通过**）。

---

## 六、目录结构

```text
italian_exam_site/
├── index.html                 页面骨架（加载顺序固定）
├── css/style.css              样式（响应式、浅色主题、意大利绿/红点缀）
├── js/
│   ├── content-data.js        内容容器（CONTENT / QUESTIONS）
│   ├── content-u1.js          Unit 1 知识点（9 主题）
│   ├── content-u2.js          Unit 2 知识点（12 主题）
│   ├── content-u3.js          Unit 3 知识点（11 主题）
│   ├── questions-u1.js        Unit 1 题目（17）
│   ├── questions-u2.js        Unit 2 题目（20）
│   ├── questions-u3.js        Unit 3 题目（23）
│   ├── grading.js             判分引擎（UMD）
│   ├── progress.js            localStorage 进度 / 成绩 / 错题本
│   ├── app.js                 路由、首页、模块 A
│   └── practice.js            模块 B 练习/模考引擎 + 进度页
├── tests/test_grading.html    浏览器内判分测试
├── materials/                 原始三份 PDF（复制件）
└── _work/
    ├── validate.py            无头校验 + 自动化测试
    └── pages/                 56 页渲染图（供逐页核对）
```

---

## 七、说明

- 课程内容来源：*Espresso 1 New Edition*（Alma Edizioni）Unit 1–3，**仅供个人备考复习使用**。
- 全部代码与数据在 E 盘 `italian_exam_site` 目录下，与同级其它项目互不影响。
