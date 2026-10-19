/* content-u1.js — Unit 1 《Primi contatti》 (源: UNITA1_NE1.pdf, 课本第6-16、145-149页) */
CONTENT.units.push({
  id: "U1", number: 1, title: "Primi contatti",
  titleZh: "初次见面 —— 打招呼、自我介绍、问姓名与国籍",
  sourcePdf: "UNITA1_NE1.pdf",
  pages: "课文第6–16页；练习第145–149页",
  overview: "第一单元教你在刚认识别人时需要的全部表达：怎么打招呼、怎么问对方叫什么名字、怎么介绍自己、怎么问对方是哪国人、怎么留电话和地址。语法上你会学到意大利语最核心的三个动词 essere（是）、avere（有）、chiamarsi（叫……名字）的现在时单数形式，以及定冠词 il/la、国籍形容词、疑问词和 0–20 的数字。",
  topics: [
    {
      id: "U1-T1", title: "打招呼与告别", titleIt: "Saluti e congedi", importance: "essential",
      knowledge: "意大利人在一天的不同时间用不同的问候语。最核心的三个是：白天（上午到傍晚之前）用 buongiorno，晚上用 buona sera，深夜道别时用 buonanotte。朋友、熟人之间随时可以用 ciao。离开时礼貌地说 arrivederci。",
      rules: [
        "时间段（caffè culturale，第16页）：5:00–13:00 是上午 mattina → 见面说 Buongiorno；13:00–19:00 是下午 pomeriggio → 说 Buona sera；19:00–23:00 是晚上 sera → 说 Buona sera；23:00–5:00 是深夜 notte → 离开时说 Buonanotte。",
        "ciao 只用于朋友、熟人（平辈的 tu 关系）；对不熟的人、长辈、上级要用 buongiorno / buona sera。",
        "礼貌体（称对方为 Lei）告别时说 arrivederLa（写成一个词，L 大写）；用 tu 时说 arrivederci。",
        "piacere 意思是“很高兴认识你”，在互相介绍之后说，男女通用；更正式的回应是 molto lieto（男）/ molto lieta（女）。",
        "scusi 是礼貌地引起注意或道歉（相当于“劳驾/请问”，用 Lei）；用 tu 时是 scusa。"
      ],
      vocabulary: [
        { it: "ciao", zh: "嗨/你好/再见（仅熟人）", note: "对朋友既可问候也可告别" },
        { it: "buongiorno", zh: "您好/早上好（白天）", note: "buono+giorno" },
        { it: "buona sera", zh: "晚上好", note: "buona+sera" },
        { it: "buonanotte", zh: "晚安（深夜道别）", note: "buona+notte" },
        { it: "arrivederci", zh: "再见（礼貌通用）", note: "Lei 体: arrivederLa" },
        { it: "piacere", zh: "很高兴认识你", note: "介绍后说，男女通用" },
        { it: "molto lieto / lieta", zh: "很荣幸（男/女）", note: "较正式的回应" },
        { it: "scusi / scusa", zh: "劳驾/请问（Lei/tu）", note: "礼貌引起注意" }
      ],
      grammarTables: [{
        title: "一天中的问候对照",
        headers: ["时间段", "意大利语", "见面问候", "离开告别"],
        rows: [
          ["5:00–13:00", "mattina 上午", "Buongiorno!", "Buongiorno! / A presto!"],
          ["13:00–19:00", "pomeriggio 下午", "Buona sera!", "Arrivederci! / Buona giornata!"],
          ["19:00–23:00", "sera 晚上", "Buona sera!", "Arrivederci! / Ci vediamo!"],
          ["23:00–5:00", "notte 深夜", "—（一般不再问候）", "Buonanotte!"]
        ],
        note: "café culturale（第16页）明确给出了这些时间段与对应问候语。"
      }],
      examples: [
        { it: "Buongiorno, signora Gucci!", zh: "您好，古奇女士！（白天）" },
        { it: "Buona sera, signor Muti!", zh: "晚上好，穆蒂先生！" },
        { it: "Ciao, Paolo!", zh: "嗨，保罗！（朋友之间）" },
        { it: "Buonanotte!", zh: "晚安！（深夜离开时）" }
      ],
      steps: "看一句问候先判断两件事：①现在是几点（决定 buongiorno / buona sera / buonanotte）；②对方是谁（决定用 ciao 还是 buongiorno，以及结尾用 arrivederci 还是 arrivederLa）。例如晚上在办公室见到老师：先说 Buona sera, professore，离开时说 arrivederLa（因为用的是礼貌体 Lei）。",
      commonMistakes: [
        { wrong: "对陌生长辈说 “Ciao!”", right: "应说 “Buongiorno!” 或 “Buona sera!”", why: "ciao 只用于熟人、朋友之间，对长辈或不熟的人不礼貌。" },
        { wrong: "把 arrivederci 用于 tu 关系还写成 arrivederLa", right: "tu → arrivederci；Lei → arrivederLa", why: "两种称呼对应不同的告别形式，Lei 体要连写且 L 大写。" }
      ],
      summary: [
        "白天 buongiorno、晚上 buona sera、深夜道别 buonanotte。",
        "ciao=熟人；礼貌体用 buongiorno/buona sera + arrivederLa。",
        "piacere=很高兴认识你（介绍后说，男女通用）。"
      ],
      miniPractice: [
        { q: "现在是晚上 8 点，你见到一位不熟的教授，应该说：", options: ["Ciao!", "Buona sera, professore!", "Buonanotte!"], answer: "Buona sera, professore!", explain: "晚上 8 点（sera）用 buona sera；对教授要用礼貌称呼，不能用 ciao。" },
        { q: "用礼貌体（Lei）告别时说：", options: ["arrivederci", "arrivederLa", "ciao"], answer: "arrivederLa", explain: "Lei 体告别用 arrivederLa（连写、L 大写）；tu 体才是 arrivederci。" }
      ]
    },
    {
      id: "U1-T2", title: "自我介绍与询问姓名", titleIt: "Presentarsi e chiedere il nome", importance: "essential",
      knowledge: "认识新朋友时，你要会问“你叫什么名字”并回答“我叫……”。用 tu 称呼平辈问 Come ti chiami?，用礼貌体 Lei 问 Come si chiama?。回答都是“我叫……= Mi chiamo …”。互相介绍后要补一句 piacere。",
      rules: [
        "问对方名字：tu → Come ti chiami?；Lei → Come si chiama?",
        "回答“我叫……”：Mi chiamo + 名字。（mi chiamo 是 chiamarsi 的第一人称单数，意为“我叫”。）",
        "确认某人身份：La signora Genovesi?（您是热那亚女士吗？）— 回答 Sì, sono io.（是的，就是我。）",
        "被介绍时礼貌回应 Piacere.（很高兴认识你），对方常回 Piacere. 或 Molto lieto./Molto lieta.",
        "介绍他人用：Anch'io mi chiamo Gucci, Paola Gucci.（我也姓古奇，保拉·古奇。）"
      ],
      vocabulary: [
        { it: "come ti chiami", zh: "你叫什么名字（tu）", note: "对应 Come si chiama?（Lei）" },
        { it: "mi chiamo", zh: "我叫……", note: "chiamarsi 的 io 形式" },
        { it: "signor / signora", zh: "先生 / 女士", note: "后接姓氏或名字" },
        { it: "io", zh: "我", note: "人称代词，通常可省略" },
        { it: "tu / Lei", zh: "你（熟人）/ 您（礼貌）", note: "决定动词与称呼形式" }
      ],
      grammarTables: [{
        title: "问名与答名（tu 与 Lei 对照）",
        headers: ["含义", "用 tu（熟人）", "用 Lei（礼貌）"],
        rows: [
          ["你叫什么？", "Come ti chiami?", "Come si chiama?"],
          ["我叫……", "Mi chiamo …", "Mi chiamo …"],
          ["你呢？", "E tu?", "E Lei?"]
        ],
        note: "回答在 tu 和 Lei 下都用 Mi chiamo …，没有区别。"
      }],
      examples: [
        { it: "Ciao, sono Valeria, e tu come ti chiami? — Alberto. E tu? — Io Cecilia.", zh: "嗨，我是瓦莱里亚，你叫什么？—— 阿尔贝托。你呢？—— 我塞西莉亚。" },
        { it: "Scusi, Lei come si chiama? — Franca Gucci. E Lei? — Anch'io mi chiamo Gucci, Paola Gucci.", zh: "请问您叫什么？—— 弗兰卡·古奇。您呢？—— 我也姓古奇，保拉·古奇。" },
        { it: "La signora Genovesi? — Sì, sono io. E Lei è il signor…? — Ragazzi. Marcello Ragazzi.", zh: "您是热那亚女士吗？—— 是的，就是我。那您是……先生？—— 拉加齐，马尔切洛·拉加齐。" }
      ],
      steps: "一个完整的自我介绍分三步：①先说自己 Ciao, sono Valeria（嗨，我是瓦莱里亚）；②再问对方 e tu come ti chiami?；③对方回答后回一句 piacere。注意意大利语里“我=io”通常省略，因为动词 mi chiamo 已经包含“我”的意思。",
      commonMistakes: [
        { wrong: "对不熟的长辈说 Come ti chiami?", right: "应说 Come si chiama?", why: "ti chiami 用于 tu（熟人）；对长辈/不熟的人用礼貌体 si chiama。" },
        { wrong: "回答名字时说 “Io mi chiamo Valeria” 当作固定句", right: "直接说 “Mi chiamo Valeria.” 即可", why: "io 一般省略；只有要强调“是我”时才加 io。" }
      ],
      summary: [
        "问名：tu→Come ti chiami?；Lei→Come si chiama?。",
        "答名：Mi chiamo + 名字（tu/Lei 都一样）。",
        "介绍后说 piacere；确认身份 Sì, sono io."
      ],
      miniPractice: [
        { q: "你想礼貌地问一位先生的名字，应说：", options: ["Come ti chiami?", "Come si chiama?", "Chi è?"], answer: "Come si chiama?", explain: "对不熟的人用礼貌体 Lei → Come si chiama?；ti chiami 只用于熟人。" },
        { q: "别人问 “Come ti chiami?”，你回答“我叫马可”：", options: ["Sono Marco.", "Mi chiamo Marco.", "Mi chiamo, Marco?"], answer: "Mi chiamo Marco.", explain: "“我叫……”用 Mi chiamo + 名字。Sono Marco 意思是“我是马可（人）”，也对，但“叫什么名字”标准答法是 Mi chiamo。" }
      ]
    },
    {
      id: "U1-T3", title: "动词 essere（是）与 chiamarsi（叫）", titleIt: "essere e chiamarsi (presente)", importance: "essential",
      knowledge: "意大利语动词要根据“人称”变位。essere 表示“是”，chiamarsi 表示“叫……名字”。第一单元先学它们的单数形式：我(io)、你 tu)、您(Lei)。这是整个课程最基础、最重要的动词。",
      rules: [
        "essere（是）：io sono（我是）、tu sei（你是）、Lei è（您是）。",
        "chiamarsi（叫……）：io mi chiamo、tu ti chiami、Lei si chiama。注意 chiamarsi 是自反动词，人称要和 mi/ti/si 搭配。",
        "意大利语中主语代词(io/tu/Lei)通常省略，因为动词变位已经说明人称；只有强调“是我/是你”时才用。",
        "礼貌体 Lei 既可以指男性也可以指女性，动词都用 è / si chiama。"
      ],
      vocabulary: [
        { it: "essere", zh: "是", note: "核心动词" },
        { it: "sono / sei / è", zh: "我是/你是/您是", note: "essere 单数变位" },
        { it: "chiamarsi", zh: "叫……名字", note: "自反动词" },
        { it: "mi chiamo / ti chiami / si chiama", zh: "我叫/你叫/您叫", note: "chiamarsi 单数变位" },
        { it: "italiano / italiana", zh: "意大利的/意大利人", note: "国籍形容词" }
      ],
      grammarTables: [
        {
          title: "essere 与 chiamarsi 现在时（单数）",
          headers: ["人称", "essere 是", "chiamarsi 叫"],
          rows: [
            ["io 我", "sono", "mi chiamo"],
            ["tu 你", "sei", "ti chiami"],
            ["Lei 您", "è", "si chiama"]
          ],
          note: "Lei 是礼貌体，男女通用，动词形式相同。"
        }
      ],
      examples: [
        { it: "Di dove sei? — Sono di Genova. Sono italiano.", zh: "你是哪里人？—— 我是热那亚人。我是意大利人。" },
        { it: "Io mi chiamo Dario. E tu come ti chiami?", zh: "我叫达里奥。你叫什么名字？" },
        { it: "Scusi, Lei è italiano? — Sì, sono italiano.", zh: "请问您是意大利人吗？—— 是的，我是意大利人。" }
      ],
      steps: "造句时先选动词，再选人称。例：“我是安娜”=（主语我 io）+（动词 chiamarsi→mi chiamo）+（名字 Anna）= Mi chiamo Anna.“你是意大利人吗？”= Di dove sei?（你哪里人）→ Sono italiano.（回答：我是意大利人）。注意 essere 的 è 上面那撇是重音，不能省。",
      commonMistakes: [
        { wrong: "写成 “Io sono di Genova, io chiamo Dario.”", right: "应是 “Sono di Genova. Mi chiamo Dario.”", why: "“我叫……”必须用自反形式 mi chiamo，不是 chiamo；且 io 通常省略。" },
        { wrong: "把 Lei è 写成 “Lei é”（用 e 而非 è）", right: "正确是 “Lei è.”", why: "é（锐音）和 è（钝音）在意大利语是不同字母，表示“是”必须用 è。" }
      ],
      summary: [
        "essere: sono / sei / è。",
        "chiamarsi: mi chiamo / ti chiami / si chiama。",
        "主语代词通常省略；Lei 男女通用。"
      ],
      miniPractice: [
        { q: "（我）叫安娜。选择正确的意大利语：", options: ["Sono Anna.", "Mi chiamo Anna.", "Chiamo Anna."], answer: "Mi chiamo Anna.", explain: "“叫……名字”用自反动词 chiamarsi → mi chiamo Anna。Sono Anna 是“我是安娜（人）”。" },
        { q: "“您是意大利人吗？”= Scusi, Lei ___ italiano?", options: ["sei", "è", "sono"], answer: "è", explain: "Lei（礼貌体）对应的 essere 形式是 è。sei 用于 tu，sono 用于 io。" }
      ]
    },
    {
      id: "U1-T4", title: "动词 avere（有）与电话、地址", titleIt: "avere, numero di telefono e indirizzo", importance: "essential",
      knowledge: "avere 的意思是“有”。第一单元用它来问和回答“你有电话号码吗/你的电话号码是多少”，以及谈论地址。核心句型是 Qual è il tuo/Suo numero di telefono?（你的/您的电话号码是多少？）",
      rules: [
        "avere（有）：io ho（我有）、tu hai（你有）、Lei ha（您有）。",
        "问号码：tu → Qual è il tuo numero di telefono?；Lei → Qual è il Suo numero di telefono?",
        "没听清时礼貌地说 Come, scusi?（Lei）/ Come, scusa?（tu），意思是“你说什么？再说一遍”。",
        "地址用 Qual è il tuo/Suo indirizzo?，回答形如 Via Garibaldi, 22.（加里波第大街22号。）街道名前用介词 Via / Piazza。",
        "意大利语电话号码按数字逐个读，也可分成两位一组读。"
      ],
      vocabulary: [
        { it: "avere", zh: "有", note: "核心动词" },
        { it: "ho / hai / ha", zh: "我有/你有/您有", note: "avere 单数变位" },
        { it: "numero di telefono", zh: "电话号码", note: "cellulare 手机" },
        { it: "indirizzo", zh: "地址", note: "Via 街 / Piazza 广场" },
        { it: "come, scusi?", zh: "请问说什么？（Lei）", note: "tu: come, scusa?" },
        { it: "scrivere", zh: "写", note: "Come si scrive? 怎么拼写？" }
      ],
      grammarTables: [{
        title: "avere 现在时（单数）",
        headers: ["人称", "avere 有"],
        rows: [["io 我", "ho"], ["tu 你", "hai"], ["Lei 您", "ha"]],
        note: "avere 是不规则动词，必须单独记忆。"
      }],
      examples: [
        { it: "Qual è il Suo numero di telefono? — 340 2345678.", zh: "您的电话号码是多少？—— 340 2345678。" },
        { it: "Qual è il tuo indirizzo? — Via Garibaldi, 22.", zh: "你的地址是什么？—— 加里波第大街22号。" },
        { it: "Come, scusi? — Dico: Via Garibaldi, ventidue.", zh: "请问您说什么？—— 我说的是：加里波第大街22号。" }
      ],
      steps: "问电话：先用疑问词 Qual（哪个/什么）+ è（是）+ il tuo numero di telefono。“Qual è”就是“什么是”。回答直接报数字。如果没听清，加一句 Come, scusi? 请求重复，这是非常常用、礼貌的说法。",
      commonMistakes: [
        { wrong: "“Hai numero di telefono?”", right: "“Hai un numero di telefono?” 或 “Qual è il tuo numero di telefono?”", why: "意大利语名词前一般要有冠词（un / il），不能光秃秃说 numero。" },
        { wrong: "地址写成 “Via Garibaldi 22” 但读成一个词", right: "读作 “Via Garibaldi, ventidue”", why: "街道名和门牌号是两部分，门牌号用基数词读出。" }
      ],
      summary: [
        "avere: ho / hai / ha。",
        "问号码：Qual è il tuo/Suo numero di telefono?",
        "问地址：Qual è il tuo/Suo indirizzo? — Via…, 22.",
        "没听清：Come, scusi?（Lei）/ Come, scusa?（tu）。"
      ],
      miniPractice: [
        { q: "（我）有一部手机。= Io ___ un cellulare.", options: ["ho", "hai", "è"], answer: "ho", explain: "avere 的 io 形式是 ho，表示“我有”。" },
        { q: "礼貌地问对方电话号码，应说：", options: ["Qual è il tuo numero?", "Qual è il Suo numero di telefono?", "Come ti chiami?"], answer: "Qual è il Suo numero di telefono?", explain: "对不熟的人用礼貌体 Suo；问号码要用 numero di telefono。" }
      ]
    }
    ,
    {
      id: "U1-T5", title: "字母表与拼写", titleIt: "L'alfabeto e lo spelling", importance: "important",
      knowledge: "意大利语字母表在拉丁字母基础上有 5 个外来字母：J、K、W、X、Y（读作 i lunga、kappa、doppia vu、ics、ipsilon）。当别人没听清你的名字时，要能逐字母拼读。练习中有专门的拼读对话。",
      rules: [
        "常用字母读音（第8页）：B bi [bi]、C ci [tʃi]、D di [di]、F effe、G gi [dʒi]、H acca、L elle、M emme、N enne、P pi、Q cu、R erre [r]（颤音）、S esse、T ti、V vi/vu、Z zeta。",
        "外来字母：J i lunga、K kappa、W doppia vu、X ics、Y ipsilon。",
        "拼写名字时逐字母念，元音单独念，辅音加元音字母念（如 G-I-N-O 念作 gi-i-enne-o）。",
        "Come si scrive?（怎么拼写？）用来请对方把名字写/拼出来。"
      ],
      vocabulary: [
        { it: "l'alfabeto", zh: "字母表", note: "" },
        { it: "lo spelling", zh: "拼读、逐字母拼写", note: "来自英语" },
        { it: "Come si scrive?", zh: "怎么拼写？", note: "请对方拼出名字" },
        { it: "lettera", zh: "字母", note: "" },
        { it: "nome / cognome", zh: "名 / 姓", note: "" }
      ],
      grammarTables: [{
        title: "字母与读音（含重音标记）",
        headers: ["字母", "读音"],
        rows: [["A", "[a]"], ["B", "bi [bi]"], ["C", "ci [tʃi]"], ["D", "di [di]"], ["E", "[e]"], ["F", "effe"], ["G", "gi [dʒi]"], ["H", "acca"], ["I", "[i]"], ["L", "elle"], ["M", "emme"], ["N", "enne"], ["O", "[o]"], ["P", "pi"], ["Q", "cu"], ["R", "erre [r]"], ["S", "esse"], ["T", "ti"], ["U", "[u]"], ["V", "vi/vu"], ["Z", "zeta"]],
        note: "J/K/W/X/Y 是外来字母：i lunga, kappa, doppia vu, ics, ipsilon。"
      }],
      examples: [
        { it: "Come si scrive? — G-I-N-O.", zh: "怎么拼写？—— G-I-N-O（吉诺）。" },
        { it: "C come ciao.", zh: "C 就是 ciao 里的 c（读 [tʃ]）。" }
      ],
      steps: "听到一个没听清的名字，问 Come si scrive?，然后让对方逐字母念。拼读时元音字母单独念一个音，辅音字母念“辅音名+元音”，如 N 念作 enne，R 念作 erre。",
      commonMistakes: [
        { wrong: "把意大利字母数量当成 21 个而忽略外来字母", right: "基础 21 个 + 外来 5 个（J K W X Y）", why: "课本第8页列出这些外来字母及其读法。" }
      ],
      summary: [
        "会读常用字母；记住 R=erre（颤音）、Z=zeta、H=acca（不发音）。",
        "外来字母 J K W X Y 的读法要记。",
        "Come si scrive? = 请对方拼写。"
      ],
      miniPractice: [
        { q: "字母 “Z” 的意大利语读法是：", options: ["zeta", "zè", "zed"], answer: "zeta", why: "" , explain: "Z 读作 zeta（第8页字母表）。" },
        { q: "请别人拼写名字，应说：", options: ["Come ti chiami?", "Come si scrive?", "Qual è?"], answer: "Come si scrive?", explain: "“怎么拼写？”用 Come si scrive?；Come ti chiami 是“你叫什么名字”。" }
      ]
    },
    {
      id: "U1-T6", title: "国籍词与介词 di", titleIt: "Le nazionalità e la preposizione di", importance: "essential",
      knowledge: "第一单元要会问“你是哪国人、来自哪里”，并回答“我是某国人、来自某地”。国籍词是形容词，要和主语在性、数上配合。来自某城市/国家用介词 di。",
      rules: [
        "问国籍/籍贯：tu → Di dove sei?；Lei → Di dov'è?",
        "回答“来自某地”：Sono di + 城市/国家。如 Sono di Genova.（我来自热那亚。）",
        "国籍形容词以 -o 结尾的，阴性变 -a：maschile italiano / femminile italiana（男/女 意大利人）。",
        "以 -e 结尾的国籍形容词，阴阳性同形：maschile irlandese / femminile irlandese（爱尔兰人）。",
        "名词前用定冠词：il signore（先生）/ la signora（女士）；Lei 是礼貌体，男女都用。"
      ],
      vocabulary: [
        { it: "di dove sei / di dov'è", zh: "你是哪里人（tu/Lei）", note: "di + 地点" },
        { it: "italiano/-a", zh: "意大利（人）", note: "Italia" },
        { it: "tedesco/-a", zh: "德国（人）", note: "Germania" },
        { it: "austriaco/-a", zh: "奥地利（人）", note: "Austria" },
        { it: "svizzero/-a", zh: "瑞士（人）", note: "Svizzera" },
        { it: "spagnolo/-a", zh: "西班牙（人）", note: "Spagna" },
        { it: "inglese", zh: "英国（人）", note: "-e 结尾，阴阳同形" },
        { it: "irlandese", zh: "爱尔兰（人）", note: "-e 结尾" },
        { it: "portoghese", zh: "葡萄牙（人）", note: "-e 结尾" },
        { it: "francese", zh: "法国（人）", note: "-e 结尾" }
      ],
      grammarTables: [
        {
          title: "国籍形容词（单数）：-o 结尾 vs -e 结尾",
          headers: ["性", "-o 结尾（变 -a）", "-e 结尾（不变）"],
          rows: [
            ["maschile 阳性", "italiano（男意大利人）", "irlandese（男爱尔兰人）"],
            ["femminile 阴性", "italiana（女意大利人）", "irlandese（女爱尔兰人）"]
          ],
          note: "-o → -a（阴阳不同）；-e → 阴阳相同。"
        },
        {
          title: "国名 ↔ 国籍对照",
          headers: ["国家", "国籍（阳/阴）"],
          rows: [["Italia", "italiano / italiana"], ["Germania", "tedesco / tedesca"], ["Austria", "austriaco / austriaca"], ["Svizzera", "svizzero / svizzera"], ["Spagna", "spagnolo / spagnola"], ["Inghilterra", "inglese / inglese"], ["Irlanda", "irlandese / irlandese"], ["Portogallo", "portoghese / portoghese"], ["Francia", "francese / francese"]],
          note: "国名以 -a 结尾的多为阴性；对应的 -o/-e 国籍按上面规则变化。"
        }
      ],
      examples: [
        { it: "Sei tedesco? — No, sono austriaco.", zh: "你是德国人吗？—— 不，我是奥地利人。" },
        { it: "Di dove sei? — Sono italiana, di Genova.", zh: "你是哪里人？—— 我是意大利人，来自热那亚。" },
        { it: "Sono di Dublino. / E Lei di dov'è? — Di Verona.", zh: "我来自都柏林。/ 您是哪里人？—— 来自维罗纳。" }
      ],
      steps: "回答“哪国人”分两步：先说国籍（Sono italiano/a），再说来自哪（di + 城市）。注意形容词要和你的性别一致：男生说 italiano，女生说 italiana。来自城市一定用 di（Di Genova），这是第一单元的规则。",
      commonMistakes: [
        { wrong: "女生说 “Sono italiano.”", right: "女生说 “Sono italiana.”", why: "-o 结尾的国籍要按性别变 -a；-e 结尾的才不变。" },
        { wrong: "用 “Di Genova sono” 把介词放错位置", right: "Sono di Genova.", why: "di 紧跟在地点前，位于句末。" }
      ],
      summary: [
        "问：Di dove sei? / Di dov'è?；答：Sono di + 地点。",
        "国籍 -o→阴阳不同（italiano/italiana）；-e 阴阳同形（irlandese）。",
        "城市/国家前用 di。"
      ],
      miniPractice: [
        { q: "一位女生说“我是德国人”：Sono ___.", options: ["tedesco", "tedesca", "tedese"], answer: "tedesca", explain: "tedesco 以 -o 结尾，女生要用阴性 tedesca。" },
        { q: "回答“我来自热那亚”：Sono ___ Genova.", options: ["a", "di", "in"], answer: "di", why: "" , explain: "第一单元规则：城市前用介词 di 表示“来自”。（第二单元讲居住地会引入 a/in，此处按第一单元用 di。）" }
      ]
    },
    {
      id: "U1-T7", title: "疑问词 come / di dove / qual", titleIt: "Gli interrogativi", importance: "important",
      knowledge: "疑问词用来提问，必须放在动词之前（或介词之后）。第一单元的三个疑问词是：come（怎样/什么名字）、di dove（哪里人/从哪来）、qual-（哪个/什么，用于 Qual è…?）。",
      rules: [
        "come 问“怎样/什么（名字）”：Come ti chiami?（你叫什么？）",
        "di dove 问“哪里人/从哪来”：Di dove sei?（你是哪里人？）",
        "qual + è 构成 Qual è…?（……是什么？）：Qual è il tuo numero?（你的号码是什么？）",
        "疑问词总是放在动词之前，或跟在介词之后（如 di + dove）。"
      ],
      vocabulary: [
        { it: "come", zh: "怎样 / 什么（名字）", note: "Come ti chiami?" },
        { it: "di dove", zh: "哪里 / 从哪", note: "Di dove sei?" },
        { it: "qual-è", zh: "……是什么", note: "Qual è il tuo…?" },
        { it: "chi", zh: "谁", note: "Chi è? 谁？（后续会深入）" }
      ],
      grammarTables: [{
        title: "第一单元疑问词一览",
        headers: ["疑问词", "意思", "例句"],
        rows: [
          ["come", "怎样/什么（名字）", "Come ti chiami?"],
          ["di dove", "哪里人/从哪来", "Di dove sei?"],
          ["qual-è", "……是什么", "Qual è il tuo numero di telefono?"]
        ],
        note: "疑问词永远在动词前或介词后。"
      }],
      examples: [
        { it: "Come ti chiami?", zh: "你叫什么名字？" },
        { it: "Di dove sei?", zh: "你是哪里人？" },
        { it: "Qual è il tuo indirizzo?", zh: "你的地址是什么？" }
      ],
      steps: "造疑问句的万能公式：疑问词 + 动词 + 其他。例：想问“你的电话号码”，把“什么”换成 Qual è，再加 il tuo numero di telefono → Qual è il tuo numero di telefono?",
      commonMistakes: [
        { wrong: "“Il tuo numero di telefono qual è?”", right: "“Qual è il tuo numero di telefono?”", why: "疑问词必须在动词（è）之前。" }
      ],
      summary: [
        "come=怎样/什么名字；di dove=哪里人；qual-è=……是什么。",
        "疑问词永远放在动词前或介词后。"
      ],
      miniPractice: [
        { q: "提问“你是哪里人？”应说：", options: ["Come sei?", "Di dove sei?", "Qual è?"], answer: "Di dove sei?", explain: "问籍贯/哪国人用 Di dove sei?。" },
        { q: "提问“你的电话号码是什么？”：", options: ["Qual è il tuo numero di telefono?", "Come è il tuo numero?", "Di dove è il numero?"], answer: "Qual è il tuo numero di telefono?", explain: "问“……是什么”用 Qual è…。" }
      ]
    },
    {
      id: "U1-T8", title: "数字 0–20", titleIt: "I numeri da 0 a 20", importance: "important",
      knowledge: "第一单元要求掌握 0 到 20 的基数词，用于报电话号码、年龄等。这些数字大多不规则，需要反复背诵。",
      rules: [
        "0–20 逐个记忆：zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci, undici, dodici, tredici, quattordici, quindici, sedici, diciassette, diciotto, diciannove, venti。",
        "报电话号码时可逐个读，也可两位一组读（如 340 读作 trecentoquaranta 或逐数字）。",
        "uno 在元音前可能有变化，但第一单元主要关注单个数字的认读。"
      ],
      vocabulary: [
        { it: "zero", zh: "0", note: "" }, { it: "uno", zh: "1", note: "" }, { it: "due", zh: "2", note: "" },
        { it: "tre", zh: "3", note: "" }, { it: "quattro", zh: "4", note: "" }, { it: "cinque", zh: "5", note: "" },
        { it: "sei", zh: "6", note: "与“你是”sei 同形" }, { it: "sette", zh: "7", note: "" }, { it: "otto", zh: "8", note: "" },
        { it: "nove", zh: "9", note: "" }, { it: "dieci", zh: "10", note: "" }, { it: "undici", zh: "11", note: "" },
        { it: "dodici", zh: "12", note: "" }, { it: "tredici", zh: "13", note: "" }, { it: "quattordici", zh: "14", note: "" },
        { it: "quindici", zh: "15", note: "" }, { it: "sedici", zh: "16", note: "" }, { it: "diciassette", zh: "17", note: "" },
        { it: "diciotto", zh: "18", note: "" }, { it: "diciannove", zh: "19", note: "" }, { it: "venti", zh: "20", note: "" }
      ],
      grammarTables: [{
        title: "数字 0–20",
        headers: ["数字", "意大利语", "数字", "意大利语"],
        rows: [["0", "zero", "11", "undici"], ["1", "uno", "12", "dodici"], ["2", "due", "13", "tredici"], ["3", "tre", "14", "quattordici"], ["4", "quattro", "15", "quindici"], ["5", "cinque", "16", "sedici"], ["6", "sei", "17", "diciassette"], ["7", "sette", "18", "diciotto"], ["8", "otto", "19", "diciannove"], ["9", "nove", "20", "venti"], ["10", "dieci", "", ""]],
        note: "17/18/19 由 dieci(10) 派生：diciassette, diciotto, diciannove。"
      }],
      examples: [
        { it: "Il mio numero è 340 2345678.", zh: "我的号码是 340 2345678。" },
        { it: "Via Garibaldi, 22.", zh: "加里波第大街，22 号。" }
      ],
      steps: "记数字时把 11–20 和 1–10 分开背。注意 sei（6）与“你是”sei 同形，靠语境区分；venti（20）在后续单元会和 uno/tre 组合成 21/23（ventuno/ventitré）。",
      commonMistakes: [
        { wrong: "把 6 sei 和“你是” sei 混淆", right: "靠语境：Di dove sei?（你是哪人）/ numero sei（6号）", why: "同形不同义，看句子结构区分。" }
      ],
      summary: [
        "背熟 0–20：zero…venti。",
        "17/18/19 = diciassette / diciotto / diciannove。",
        "sei 既是 6 也是“你是”。"
      ],
      miniPractice: [
        { q: "数字 15 是：", options: ["quindici", "quattordici", "sedici"], answer: "quindici", explain: "15=quindici；14=quattordici；16=sedici。" },
        { q: "数字 8 是：", options: ["otto", "nove", "dieci"], answer: "otto", explain: "8=otto，9=nove，10=dieci。" }
      ]
    },
    {
      id: "U1-T9", title: "发音要点：c 和 g 的读音", titleIt: "Pronuncia: la c e la g", importance: "supporting",
      knowledge: "意大利语的 c 和 g 的发音取决于后面的字母。这是课本专门讲解的发音规则，对正确拼读和记忆单词很有帮助（例如判断一个词里的 c 读 [k] 还是 [tʃ]）。",
      rules: [
        "c 在 e、i 前读 [tʃ]（类似“恰/七”）；在 a、o、u 前读 [k]（类似“卡/科/库”）。",
        "g 在 e、i 前读 [dʒ]（类似“贾/吉”）；在 a、o、u 前读 [g]（类似“嘎/勾”）。",
        "练习词（第9页）：caffè [k]、piacere [tʃ]、spaghetti [dʒ]、gatto [g]、ciao [tʃ]、cinema [tʃ]、chitarra [k]、gelato [dʒ]、giornale [dʒ]、formaggio [dʒ]、cane [k]、zucchero [k]、medico [dʒ]。",
        "另有 cuore [kw]、fungo、lago、alberghi、guardare 等练习词。"
      ],
      vocabulary: [
        { it: "c: [k] / [tʃ]", zh: "卡 / 恰", note: "a,o,u 前 [k]；e,i 前 [tʃ]" },
        { it: "g: [g] / [dʒ]", zh: "嘎 / 吉", note: "a,o,u 前 [g]；e,i 前 [dʒ]" },
        { it: "chi-, che-", zh: "读 [k]", note: "ch 在 e,i 前仍读 [k]" },
        { it: "ghi-, ghe-", zh: "读 [g]", note: "gh 在 e,i 前仍读 [g]" }
      ],
      grammarTables: [{
        title: "c / g 发音规律",
        headers: ["字母", "后接 a/o/u", "后接 e/i"],
        rows: [["c", "[k]（卡/科/库）", "[tʃ]（恰/七）"], ["g", "[g]（嘎/勾）", "[dʒ]（吉/贾）"]],
        note: "gh/gh 保持 [g]/[k]：如 chitarra [k]、alberghi [g]。"
      }],
      examples: [
        { it: "caffè, cane, ciao, cinema, cucina", zh: "c 在 a 前读 [k]（caffè/cane）；在 i 前读 [tʃ]（ciao/cinema/cucina）" },
        { it: "gelato, giorno, giardino, funghi", zh: "g 在 e 前读 [dʒ]（gelato/giorno）；gh 保持 [g]（funghi）" }
      ],
      steps: "读一个新词先看 c/g 后面跟什么元音：跟 a/o/u 用“硬音”[k]/[g]，跟 e/i 用“软音”[tʃ]/[dʒ]。若 e/i 前还要保持硬音，就写 gh/gh（如 chitarra、alberghi）。",
      commonMistakes: [
        { wrong: "把 ciao 读成 “ki-ao”", right: "ciao 读 [tʃaʊ]（“恰-奥”）", why: "虽然拼写像 ci+ao，c 在 i 前读软音 [tʃ]。" }
      ],
      summary: [
        "c/g 在 a,o,u 前读硬音 [k]/[g]；在 e,i 前读软音 [tʃ]/[dʒ]。",
        "gh/gh 用于在 e,i 前保持硬音。"
      ],
      miniPractice: [
        { q: "单词 “gatto”（猫）中的 g 读：", options: ["[g]（硬音）", "[dʒ]（软音）"], answer: "[g]（硬音）", explain: "g 在 a 前读硬音 [g]；只有在 e/i 前才读软音 [dʒ]。" },
        { q: "单词 “ciardo / cielo” 中的 ci 读：", options: ["[tʃ]（软音，像“七”）", "[k]（硬音）"], answer: "[tʃ]（软音，像“七”）", explain: "c 在 i 前读软音 [tʃ]。" }
      ]
    }
  ]
});
