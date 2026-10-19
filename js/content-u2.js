/* content-u2.js — Unit 2 《Io e gli altri》 (源: UNITA2_NE1.pdf, 课本第17-28、150-153页) */
CONTENT.units.push({
  id: "U2", number: 2, title: "Io e gli altri",
  titleZh: "我与他人 —— 问近况、介绍朋友、谈职业与居住",
  sourcePdf: "UNITA2_NE1.pdf",
  pages: "课文第17–28页；练习第150–153页",
  overview: "第二单元围绕“人”展开：怎么问别人“最近怎么样”、怎么把朋友介绍给别人、怎么谈论职业和工作地点、住在哪、会说什么语言、多大年纪。语法上你会学到动词 stare（处于/在）、fare（做）、parlare（说）的现在时全人称变位，以及名词的性、否定句、定冠词与不定冠词（单数）、介词 a/in 和 20–100 的数字。",
  topics: [
    {
      id: "U2-T1", title: "问候近况：Come stai? / Come va?", titleIt: "Chiedere e rispondere come va", importance: "essential",
      knowledge: "见面寒暄问“你好吗”，意大利语有三种说法：Come stai?（你好吗，tu）、Come sta?（您好吗，Lei）、Come va?（最近怎么样，通用）。回答从最积极到最消极依次是：Benissimo!（非常好）→ Bene, grazie / Sto bene.（挺好）→ Non c'è male.（还不错）→ Male.（不好）。若对方说不好，要回一句 Oh, mi dispiace.（那真遗憾）。",
      rules: [
        "问“你好吗”：tu → Come stai?；Lei → Come sta?；通用 → Come va?",
        "回答梯度（从最积极到最消极）：Benissimo! → Bene, grazie. / Sto bene. → Non c'è male. → Male.",
        "stare 的 io 形式是 sto：Sto bene.（我挺好）/ Oggi sto male.（我今天不好）。",
        "对方说不好时回 Oh, mi dispiace.（真遗憾/真可惜）。"
      ],
      vocabulary: [
        { it: "come stai / come sta", zh: "你好吗/您好吗", note: "tu / Lei" },
        { it: "come va", zh: "最近怎么样", note: "通用" },
        { it: "benissimo", zh: "非常好", note: "ben + -issimo 强调" },
        { it: "bene", zh: "好/挺好", note: "" },
        { it: "non c'è male", zh: "还不错/不算差", note: "字面“没有坏”" },
        { it: "male", zh: "不好/糟", note: "" },
        { it: "mi dispiace", zh: "真遗憾", note: "回应对方的坏消息" }
      ],
      grammarTables: [{
        title: "问/答“近况”一览",
        headers: ["含义", "说法"],
        rows: [
          ["你好吗？（tu）", "Come stai?"],
          ["您好吗？（Lei）", "Come sta?"],
          ["最近怎么样？", "Come va?"],
          ["非常好", "Benissimo!"],
          ["挺好，谢谢", "Bene, grazie. / Sto bene."],
          ["还不错", "Non c'è male."],
          ["不好", "Male. / Oggi sto male."],
          ["（听到坏消息）真遗憾", "Oh, mi dispiace."]
        ],
        note: "回答顺序从最积极到最消极排列。"
      }],
      examples: [
        { it: "Ciao Giuliana. Come stai? — Bene, grazie. E tu? — Non c'è male, grazie.", zh: "你好朱莉安娜。你怎么样？—— 挺好，谢谢。你呢？—— 还不错，谢谢。" },
        { it: "Come va, signora? — Benissimo, grazie.", zh: "您好吗，女士？—— 非常好，谢谢。" }
      ],
      steps: "寒暄的固定套路：先问候（Ciao, come stai?）→ 回答（Bene, grazie.）→ 反问（E tu? / E Lei?）。若想表达“不太好”，用 Non c'è male（中性）或 Male（不好），对方会安慰你 mi dispiace。",
      commonMistakes: [
        { wrong: "回答 “Sono bene.”", right: "回答 “Sto bene.”", why: "“处于某种状态”用动词 stare（sto），不是 essere（sono）。" }
      ],
      summary: [
        "问近况：Come stai?（tu）/ Come sta?（Lei）/ Come va?（通用）。",
        "答：Benissimo → bene → non c'è male → male。",
        "“我挺好”= Sto bene（用 stare）。"
      ],
      miniPractice: [
        { q: "回答“我挺好，谢谢”应说：", options: ["Sono bene, grazie.", "Sto bene, grazie.", "È bene, grazie."], answer: "Sto bene, grazie.", explain: "表示身体/状态“处于……”用 stare → Sto bene。" },
        { q: "“还不错”的意大利语是：", options: ["Benissimo", "Non c'è male", "Male"], answer: "Non c'è male", explain: "non c'è male = 不算差、还不错；male 是“不好”。" }
      ]
    },
    {
      id: "U2-T2", title: "介绍他人：Questo/a è…", titleIt: "Presentare qualcuno", importance: "essential",
      knowledge: "把朋友介绍给别人时说“这位是……”= Questo è…（阳性）/ Questa è…（阴性）。常用句型 Ti presento Katia（我给你介绍卡蒂亚）。介绍朋友时常加“一个我的朋友”= un mio amico / una mia amica。别人介绍后要互道 piacere / molto lieto（lieta）。",
      rules: [
        "介绍他人：Ti/Le presento + 人。（tu 用 Ti，Lei 用 Le）",
        "“这位是……”：阳性 Questo è + 人；阴性 Questa è + 人。",
        "“我的一个朋友”：阳性 un mio amico；阴性 una mia amica。（注意 un/una 与 mio/amico 的性数配合）",
        "被介绍后礼貌回应：Piacere. / Molto lieto.（男）/ Molto lieta.（女）。"
      ],
      vocabulary: [
        { it: "ti presento / Le presento", zh: "我给你/您介绍", note: "tu / Lei" },
        { it: "questo è / questa è", zh: "这位是（阳/阴）", note: "" },
        { it: "un mio amico", zh: "我的一个朋友（阳）", note: "" },
        { it: "una mia amica", zh: "我的一个朋友（阴）", note: "" },
        { it: "molto lieto / lieta", zh: "很荣幸（男/女）", note: "正式回应" }
      ],
      grammarTables: [{
        title: "介绍他人（tu / Lei 对照）",
        headers: ["含义", "用 tu", "用 Lei"],
        rows: [
          ["我给你介绍……", "Ti presento Katia.", "Le presento Katia."],
          ["这位是……", "Questo è Massimo.", "Questo è Massimo."],
          ["我的一个朋友", "un mio amico / una mia amica", "un mio amico / una mia amica"]
        ],
        note: "questo/questa 根据被介绍的人的性别选择。"
      }],
      examples: [
        { it: "Questa è Susana, una mia amica portoghese, di Lisbona. E questo è Massimo, un mio amico.", zh: "这位是苏珊娜，我的一个葡萄牙朋友，来自里斯本。这位是马西莫，我的一个朋友。" },
        { it: "Ah, ti presento il signor Lucchetti. Signor Lucchetti, la signora Vinci. — Piacere. — Molto lieto.", zh: "啊，我给您介绍卢凯蒂先生。卢凯蒂先生，这位是万奇女士。—— 很高兴认识您。—— 我也很荣幸。" }
      ],
      steps: "介绍两人认识的完整流程：①对你想介绍的人说 Questa è Susana, una mia amica…（介绍+身份）；②转向另一人说 E questo è Massimo…；③让他们互道 piacere / molto lieto。性别由被介绍者决定用 questo 还是 questa。",
      commonMistakes: [
        { wrong: "介绍女生时说 “Questo è Carla.”", right: "应说 “Questa è Carla.”", why: "questo（阳）/ questa（阴）要和被介绍者的性别一致。" }
      ],
      summary: [
        "介绍：Ti/Le presento…；Questo è…（阳）/ Questa è…（阴）。",
        "“我的一个朋友”：un mio amico / una mia amica。",
        "回应：Piacere / Molto lieto(a)。"
      ],
      miniPractice: [
        { q: "介绍一位女性朋友：Questa è Anna, ___ amica.", options: ["un mio", "una mia", "un'una"], answer: "una mia", explain: "阴性朋友用 una mia amica。" },
        { q: "把朋友介绍给对方（礼貌体）应说：", options: ["Ti presento…", "Le presento…", "Mi presento…"], answer: "Le presento…", explain: "对不熟的人用礼貌体 Lei → Le presento。Mi presento 是“我自我介绍”。" }
      ]
    },
    {
      id: "U2-T3", title: "动词 stare（处于/在）与 parlare（说）", titleIt: "stare e parlare (presente, tutte le persone)", importance: "important",
      knowledge: "第二单元把动词变位扩展到全部六个人称：io, tu, lui/lei/Lei, noi, voi, loro。stare 表示“处于某种状态/在某地”（如 sto bene），parlare 表示“说（语言）”。这两个都是规则的 -are 动词，变位有规律。",
      rules: [
        "stare：io sto / tu stai / lui,lei,Lei sta / noi stiamo / voi state / loro stanno（不规则，需记忆）。",
        "parlare（规则 -are）：io parlo / tu parli / lui,lei,Lei parla / noi parliamo / voi parlate / loro parlano。",
        "“你说意大利语吗？”= Parli l'italiano?（tu）/ Parla l'italiano?（Lei）。",
        "陈述句：Tu parli il portoghese.（你说葡萄牙语。）"
      ],
      vocabulary: [
        { it: "stare", zh: "处于/在（状态）", note: "不规则" },
        { it: "parlare", zh: "说/讲", note: "规则 -are" },
        { it: "sto / stai / sta", zh: "我/你/他（您）处于", note: "stare 前三人称" },
        { it: "parlo / parli / parla", zh: "我说/你说/他说", note: "parlare" }
      ],
      grammarTables: [
        {
          title: "stare 现在时（全人称）",
          headers: ["人称", "stare"],
          rows: [["io", "sto"], ["tu", "stai"], ["lui, lei, Lei", "sta"], ["noi", "stiamo"], ["voi", "state"], ["loro", "stanno"]],
          note: "不规则动词，单独记忆。"
        },
        {
          title: "parlare 现在时（规则 -are）",
          headers: ["人称", "parlare"],
          rows: [["io", "parlo"], ["tu", "parli"], ["lui, lei, Lei", "parla"], ["noi", "parliamo"], ["voi", "parlate"], ["loro", "parlano"]],
          note: "规则动词：去 -are 加 -o/-i/-a/-iamo/-ate/-ano。"
        }
      ],
      examples: [
        { it: "Tu parli il portoghese. / Tu non parli il portoghese.", zh: "你说葡萄牙语。/ 你不说葡萄牙语。" },
        { it: "Io sto benissimo. E tu? — Anch'io, grazie.", zh: "我非常好。你呢？—— 我也是，谢谢。" }
      ],
      steps: "记住六个人称的顺序 io/tu/lui,lei,Lei/noi/voi/loro。规则 -are 动词的结尾依次是 -o/-i/-a/-iamo/-ate/-ano。把 parlare 去掉 -are 得到词干 parl-，再加结尾即可：parl+o=parlo，parl+i=parli……。stare 不规则，直接背：sto/stai/sta/stiamo/state/stanno。",
      commonMistakes: [
        { wrong: "把 stare 当规则动词说 “sto/stai/stamo…”", right: "noi 是 stiamo，loro 是 stanno", why: "stare 是不规则动词，变化需单独记忆。" }
      ],
      summary: [
        "stare: sto/stai/sta/stiamo/state/stanno。",
        "parlare(规则): parlo/parli/parla/parliamo/parlate/parlano。",
        "六人称顺序：io/tu/lui,lei,Lei/noi/voi/loro。"
      ],
      miniPractice: [
        { q: "“我们说意大利语”= Noi ___ l'italiano.", options: ["parlamo", "parliamo", "parlate"], answer: "parliamo", explain: "parlare 的 noi 形式是 parliamo（-iamo 结尾）。" },
        { q: "“他们处于很好的状态”= Loro ___ benissimo.", options: ["stanno", "stiamo", "stanno."], answer: "stanno", explain: "stare 的 loro 形式是 stanno。" }
      ]
    },
    {
      id: "U2-T4", title: "职业与工作地点", titleIt: "Il lavoro e il luogo di lavoro", importance: "essential",
      knowledge: "第二单元重点谈论“做什么工作”和“在哪工作”。问职业用 Che lavoro fai?（你做什么工作？），回答用 Faccio il/la + 职业（我做……/我是……）。问工作地点用 Dove lavori?，回答用介词 in + 地点。",
      rules: [
        "问职业：Che lavoro fai?（tu）/ Che lavoro fa?（Lei）。也可说 Che cosa fai?",
        "回答“我是/做……”：Sono + 职业 或 Faccio il/la + 职业。如 Faccio la segretaria.（我是秘书。）/ Faccio l'operaio.（我是工人。）",
        "问工作地点：Dove lavori?（tu）/ Dove lavora?（Lei）。回答 in + 地点：In una scuola.（在一所学校。）/ In un ospedale.（在一家医院。）",
        "常见职业（第20-21页）：il medico（医生）、l'avvocato（律师）、l'architetto（建筑师）、l'insegnante（教师）、il giornalista（记者）、la segretaria（秘书）、il farmacista（药剂师）、la commessa（女店员）、il cuoco（厨师）、l'operaio（工人）、l'infermiere（护士）、l'estetista（美容师）、l'impiegata（女职员）。",
        "职业名词的阴阳性：很多职业 -o/-a 配对（cuoco/cuoca、operaio/operaia）；insegnante、medico 等形式特殊。"
      ],
      vocabulary: [
        { it: "Che lavoro fai/fa?", zh: "你/您做什么工作？", note: "tu / Lei" },
        { it: "faccio il/la…", zh: "我做……/我是……", note: "fa + 冠词 + 职业" },
        { it: "Dove lavori/lavora?", zh: "你/您在哪工作？", note: "" },
        { it: "in una scuola", zh: "在一所学校", note: "in + 地点" },
        { it: "medico / avvocato / architetto", zh: "医生/律师/建筑师", note: "" },
        { it: "insegnante / segretaria / commessa", zh: "教师/秘书/女店员", note: "" }
      ],
      grammarTables: [{
        title: "职业问答句型",
        headers: ["含义", "句型"],
        rows: [
          ["你做什么工作？", "Che lavoro fai?"],
          ["我做秘书。", "Faccio la segretaria."],
          ["我是医生。", "Sono medico."],
          ["你在哪工作？", "Dove lavori?"],
          ["我在学校工作。", "Lavoro in una scuola."]
        ],
        note: "faccio 后接 il/la + 职业。"
      }],
      examples: [
        { it: "Siete di qui? — No, siamo di Napoli, ma abitiamo qui a Bologna. — Ah, di Napoli! E che cosa fate di bello? Studiate? — No, io lavoro in una scuola di lingue. — Sei insegnante? — No, faccio la segretaria.", zh: "你们是本地人吗？—— 不，我们是那不勒斯人，但住在这里博洛尼亚。……我在一所语言学校工作。—— 你是教师吗？—— 不，我是秘书。" },
        { it: "Patrizia lavora in una scuola, fa l'insegnante. / Pino lavora in un ristorante, fa il cuoco.", zh: "帕特里齐亚在学校工作，她是教师。/ 皮诺在餐厅工作，他是厨师。" }
      ],
      steps: "回答“做什么工作”有两种方式：①正式一点 Sono + 职业（Sono medico）；②课本常用的 Faccio il/la + 职业（Faccio la segretaria）。注意 il/la 要跟职业的性搭配：女性秘书说 la segretaria，男性工人说 l'operaio。",
      commonMistakes: [
        { wrong: "“Faccio segretaria.”（漏掉冠词）", right: "“Faccio la segretaria.”", why: "faccio 后必须加定冠词 il/la 再接职业。" },
        { wrong: "说 “Lavoro a una scuola.”", right: "“Lavoro in una scuola.”", why: "工作地点（机构内部）用介词 in；城市名才用 a。" }
      ],
      summary: [
        "问职业：Che lavoro fai/fa?",
        "答：Sono + 职业 或 Faccio il/la + 职业。",
        "问地点：Dove lavori?；答 in + 地点。"
      ],
      miniPractice: [
        { q: "“我在医院工作。”= Lavoro ___ un ospedale.", options: ["a", "in", "di"], answer: "in", explain: "工作地点（机构）用介词 in。" },
        { q: "回答“我是厨师”（男）：Faccio ___ cuoco.", options: ["il", "la", "l'"], answer: "il", explain: "cuoco 是阳性职业，用定冠词 il。" }
      ]
    }
    ,
    {
      id: "U2-T5", title: "essere / fare / avere 现在时（全人称）", titleIt: "essere, fare, avere (tutte le persone)", importance: "essential",
      knowledge: "第二单元把三个核心不规则动词补全到六个人称。这三个动词使用频率极高，必须全部背熟：essere（是）、avere（有）、fare（做）。",
      rules: [
        "essere：io sono / tu sei / lui,lei,Lei è / noi siamo / voi siete / loro sono。",
        "avere：io ho / tu hai / lui,lei,Lei ha / noi abbiamo / voi avete / loro hanno。",
        "fare：io faccio / tu fai / lui,lei,Lei fa / noi facciamo / voi fate / loro fanno。",
        "注意不规则拼写：hanno 与 hai 里的 h 不发音但要写（为了和 hai/a 区分）；fai/fanno 也要记牢。"
      ],
      vocabulary: [
        { it: "essere / avere / fare", zh: "是 / 有 / 做", note: "三大核心不规则动词" },
        { it: "siamo / siete", zh: "我们是 / 你们是", note: "essere" },
        { it: "abbiamo / avete", zh: "我们有 / 你们有", note: "avere" },
        { it: "facciamo / fate", zh: "我们做 / 你们做", note: "fare" }
      ],
      grammarTables: [
        { title: "essere 现在时", headers: ["人称", "essere"], rows: [["io", "sono"], ["tu", "sei"], ["lui, lei, Lei", "è"], ["noi", "siamo"], ["voi", "siete"], ["loro", "sono"]], note: "" },
        { title: "avere 现在时", headers: ["人称", "avere"], rows: [["io", "ho"], ["tu", "hai"], ["lui, lei, Lei", "ha"], ["noi", "abbiamo"], ["voi", "avete"], ["loro", "hanno"]], note: "hanno/hai 中的 h 不发音。" },
        { title: "fare 现在时", headers: ["人称", "fare"], rows: [["io", "faccio"], ["tu", "fai"], ["lui, lei, Lei", "fa"], ["noi", "facciamo"], ["voi", "fate"], ["loro", "fanno"]], note: "" }
      ],
      examples: [
        { it: "Noi siamo di Berlino. / Io faccio la segretaria.", zh: "我们是柏林人。/ 我是秘书。" },
        { it: "Loro hanno un cane. / Voi avete un gatto?", zh: "他们有一只狗。/ 你们有一只猫吗？" }
      ],
      steps: "这三个动词没有统一规律，只能背。建议按人称竖着读：sono/sei/è/siamo/siete/sono（essere）；ho/ai/ha/abbiamo/avete/hanno（avere）；faccio/fai/fa/facciamo/fate/fanno（fare）。多读几遍形成语感。",
      commonMistakes: [
        { wrong: "写成 “loro hanno” 少了 h", right: "正确是 “hanno”", why: "loro 的 avoir 形式是 hanno，h 要写（虽然不发音）。" },
        { wrong: "把 fare 的 noi 写成 “faciamo”", right: "正确是 “facciamo”（双 c）", why: "fare 的 noi 形式是 facciamo，注意双 c。" }
      ],
      summary: [
        "essere: sono/sei/è/siamo/siete/sono。",
        "avere: ho/ai/ha/abbiamo/avete/hanno。",
        "fare: faccio/fai/fa/facciamo/fate/fanno。"
      ],
      miniPractice: [
        { q: "“他们有”= Loro ___ un cane.", options: ["hanno", "hao", "ha"], answer: "hanno", explain: "avere 的 loro 形式是 hanno（带 h）。" },
        { q: "“我们做”= Noi ___ la segretaria.", options: ["facciamo", "faciamo", "facciamo."], answer: "facciamo", explain: "fare 的 noi 形式是 facciamo，双 c。" }
      ]
    },
    {
      id: "U2-T6", title: "语言与 Parli…?", titleIt: "Le lingue", importance: "important",
      knowledge: "谈论会说什么语言。问“你说……语吗？”用 Parli…?（tu）/ Parla…?（Lei）。各种语言的名词大多带定冠词（l'italiano, il tedesco…），因为语言名是由国家/民族名词变来的。",
      rules: [
        "问“你说……语吗？”：Parli il tedesco?（tu）/ Parla il tedesco?（Lei）。",
        "回答：Sì, parlo un po'. / No, non parlo il russo.",
        "常见语言（第20页）：l'italiano（意）、lo spagnolo（西）、l'olandese（荷）、lo svedese（瑞典）、l'inglese（英）、il portoghese（葡）、il russo（俄）、il tedesco（德）、il francese（法）、il greco（希）。",
        "语言名词前一般带定冠词：il tedesco, il francese, lo spagnolo, l'italiano（元音前用 l'）。"
      ],
      vocabulary: [
        { it: "parli / parla", zh: "你说/您说", note: "parlare tu / Lei" },
        { it: "l'italiano / il tedesco", zh: "意大利语/德语", note: "带冠词" },
        { it: "lo spagnolo / il francese", zh: "西班牙语/法语", note: "" },
        { it: "il russo / il greco", zh: "俄语/希腊语", note: "" },
        { it: "un po'", zh: "一点", note: "parlo un po' 我会一点" }
      ],
      grammarTables: [{
        title: "常见语言",
        headers: ["语言", "意大利语"],
        rows: [["意大利语", "l'italiano"], ["西班牙语", "lo spagnolo"], ["英语", "l'inglese"], ["法语", "il francese"], ["德语", "il tedesco"], ["俄语", "il russo"], ["葡萄牙语", "il portoghese"], ["希腊语", "il greco"], ["荷兰语", "l'olandese"], ["瑞典语", "lo svedese"]],
        note: "语言名前带定冠词；元音前用 l'，s+辅音前用 lo。"
      }],
      examples: [
        { it: "Parli il tedesco? — Sì, parlo un po'. / No, non parlo il russo.", zh: "你说德语吗？—— 是的，我会一点。/ 不，我不说俄语。" },
        { it: "Tu parli il portoghese. Tu non parli il portoghese.", zh: "你说葡萄牙语。你不说葡萄牙语。" }
      ],
      steps: "问语言 = Parli（说）+ 冠词 + 语言。否定回答直接在动词前加 non：Non parlo il russo.（我不说俄语。）语言名前的冠词不能省。",
      commonMistakes: [
        { wrong: "“Parli tedesco?”（漏冠词）", right: "“Parli il tedesco?”", why: "语言名前要加定冠词 il/lo/l'。" }
      ],
      summary: [
        "问语言：Parli/Parla + 冠词 + 语言？",
        "语言名前带冠词：il tedesco, lo spagnolo, l'italiano…。",
        "否定：Non parlo il russo."
      ],
      miniPractice: [
        { q: "“你说法语吗？”= Parli ___ francese?", options: ["il", "lo", "l'"], answer: "il", explain: "francese 前用定冠词 il（f+辅音前用 il）。" },
        { q: "“我不说俄语。”= Non parlo ___ russo.", options: ["il", "lo", "l'"], answer: "il", explain: "russo 前用定冠词 il。" }
      ]
    }
    ,
    {
      id: "U2-T7", title: "居住地：Dove abiti? 与介词 a / in", titleIt: "Dove abiti? e le preposizioni a / in", importance: "essential",
      knowledge: "问“你住在哪？”用 Dove abiti?（tu）/ Dove abita?（Lei）。回答时用介词：城市名前用 a，国家名前用 in，一般地点（机构、建筑）也用 in。这是第二单元的核心语法点之一。",
      rules: [
        "问居住：tu → Dove abiti?；Lei → Dove abita?。回答：(Abito) a + 城市 / in + 国家。",
        "介词 a + 城市：Abito a Bologna.（我住博洛尼亚。）",
        "介词 in + 国家 / 一般地点：Abito in Italia.（我住意大利。）/ Lavoro in una scuola.（我在学校工作。）",
        "“你是本地人吗？”：Sei di qui?（tu）/ È di qui?（Lei）。回答 Sì. / No, sono di…",
        "注意：城市用 a，国家和机构用 in；这是最容易混淆的规则。"
      ],
      vocabulary: [
        { it: "abito / abita", zh: "我住/您住", note: "abitare tu / Lei" },
        { it: "a Bologna", zh: "在博洛尼亚", note: "a + 城市" },
        { it: "in Italia", zh: "在意大利", note: "in + 国家" },
        { it: "di qui", zh: "本地/这里", note: "Sei di qui?" },
        { it: "qui", zh: "这里", note: "" }
      ],
      grammarTables: [{
        title: "介词 a 与 in 的选择",
        headers: ["地点类型", "介词", "例句"],
        rows: [
          ["城市", "a", "Abito a Bologna."],
          ["国家", "in", "Abito in Italia."],
          ["机构/地点（学校、医院…）", "in", "Lavoro in una scuola. / In un ospedale."]
        ],
        note: "城市用 a；国家与一般地点用 in。"
      }],
      examples: [
        { it: "No, siamo di Napoli, ma abitiamo qui a Bologna.", zh: "不，我们是那不勒斯人，但住在这里博洛尼亚。" },
        { it: "Dove abiti? — Abito a Roma, in Italia.", zh: "你住哪？—— 我住在意大利罗马。" },
        { it: "Sei di qui? — No, sono di Napoli.", zh: "你是本地人吗？—— 不，我是那不勒斯人。" }
      ],
      steps: "回答“住哪”分两级：先说城市（a + 城市），可再补国家（in + 国家）。例：Abito a Roma, in Italia.（我住在罗马，在意大利。）判断用 a 还是 in：城市→a；国家/机构→in。",
      commonMistakes: [
        { wrong: "“Abito in Roma.”", right: "“Abito a Roma.”", why: "城市名前用介词 a，不用 in。" },
        { wrong: "“Lavoro a una scuola.”", right: "“Lavoro in una scuola.”", why: "机构地点用 in，只有城市用 a。" }
      ],
      summary: [
        "问：Dove abiti?/abita?；答：Abito a + 城市 / in + 国家。",
        "城市→a；国家/机构→in。",
        "Sei di qui? = 你是本地人吗？"
      ],
      miniPractice: [
        { q: "“我住在米兰。”= Io ___ a Milano.", options: ["abito", "abit", "ho"], answer: "abito", explain: "“住”用动词 abitare，io 形式 abito。" },
        { q: "“我住在意大利。”= Io vivo ___ Italia.", options: ["a", "in", "di"], answer: "in", explain: "国家名前用介词 in。" }
      ]
    },
    {
      id: "U2-T8", title: "名词的性与 questo / questa", titleIt: "Il genere dei sostantivi e questo/questa", importance: "important",
      knowledge: "意大利语名词分阳性（maschile）和阴性（femminile）。一般以 -o 结尾的是阳性，以 -a 结尾的是阴性，以 -e 结尾的可能是阳性也可能是阴性。指示词 questo（这个，阳）/ questa（这个，阴）要和所指对象的性一致。",
      rules: [
        "名词的性：以 -o 结尾多为阳性（negozio 店、ristorante…）；以 -a 结尾多为阴性（farmacia 药店、conversazione…）。",
        "以 -e 结尾的名词性不固定，需单独记忆（如 il collega 同事（阳）、il farmacista 药剂师（阳））。",
        "questo（这个，阳性）/ questa（这个，阴性）：Questo è Carlo.（这位是卡洛，男）/ Questa è Carla.（这位是卡拉，女）。",
        "questo/questa 要和它指的人或物的性保持一致。"
      ],
      vocabulary: [
        { it: "il genere", zh: "（名词的）性", note: "maschile / femminile" },
        { it: "maschile / femminile", zh: "阳性 / 阴性", note: "" },
        { it: "negozio / ristorante", zh: "商店 / 餐厅（阳）", note: "-o/-e 阳性" },
        { it: "farmacia / conversazione", zh: "药店 / 对话（阴）", note: "-a 阴性" },
        { it: "questo / questa", zh: "这个（阳/阴）", note: "" }
      ],
      grammarTables: [{
        title: "名词性判断",
        headers: ["结尾", "一般性别", "例子"],
        rows: [
          ["-o", "阳性 maschile", "il negozio（商店）"],
          ["-a", "阴性 femminile", "la farmacia（药店）"],
          ["-e", "不固定，需记忆", "il collega（同事）、il farmacista（药剂师）"]
        ],
        note: "有例外，如 collega/farmacista 虽 -a/-e 但是阳性。"
      }],
      examples: [
        { it: "Questo è Carlo. Questa è Carla.", zh: "这位是卡洛（男）。这位是卡拉（女）。" },
        { it: "Questa è Susana, una mia amica.", zh: "这位是苏珊娜，我的一个朋友（女）。" }
      ],
      steps: "判断一个名词是阳性还是阴性，先看结尾：-o→阳，-a→阴，-e→需查词典。用 questo/questa 时，看你指的是男/阳性还是女/阴性：指男生/阳性用 questo，指女生/阴性用 questa。",
      commonMistakes: [
        { wrong: "指女生说 “Questo è Maria.”", right: "“Questa è Maria.”", why: "Maria 是阴性，指示词要用 questa。" },
        { wrong: "以为 -a 结尾一定是阴性", right: "如 collega、farmacista 是阳性，需记忆", why: "有例外，-a 结尾不绝对等于阴性。" }
      ],
      summary: [
        "-o 阳、-a 阴、-e 不固定（需记忆）。",
        "questo(阳)/questa(阴) 要与所指对象的性一致。",
        "注意例外：collega、farmacista 是阳性。"
      ],
      miniPractice: [
        { q: "“这位是安娜（女）。”= ___ è Anna.", options: ["Questo", "Questa", "Che"], answer: "Questa", explain: "Anna 是阴性，用 questa。" },
        { q: "“农场/同事 collega”是：", options: ["阳性", "阴性", "中性"], answer: "阳性", explain: "collega 虽以 -a 结尾但是阳性（il collega）。" }
      ]
    }
    ,
    {
      id: "U2-T9", title: "否定句", titleIt: "La negazione", importance: "important",
      knowledge: "意大利语的否定很简单：在动词前面加 non 即可。回答否定问题时还可以直接用 no。否定词 non 要放在动词之前。",
      rules: [
        "否定 = non + 动词。如 Parli il russo? → No, non parlo il russo.（不说俄语。）",
        "non 永远放在动词前面：Non parlo.（我不说。）/ Non abito qui.（我不住这儿。）",
        "回答否定疑问句可先用 No，再补完整否定句。",
        "否定不限于回答，也可直接陈述：Non sono di qui.（我不是本地人。）"
      ],
      vocabulary: [
        { it: "non", zh: "不/没有（否定词）", note: "放在动词前" },
        { it: "no", zh: "不", note: "回答否定" }
      ],
      grammarTables: [{
        title: "否定句结构",
        headers: ["肯定", "否定"],
        rows: [
          ["Parlo il russo.", "Non parlo il russo."],
          ["Abito qui.", "Non abito qui."],
          ["Sono di qui.", "Non sono di qui."]
        ],
        note: "non + 动词，顺序固定。"
      }],
      examples: [
        { it: "Sei inglese? — No, sono americano.", zh: "你是英国人吗？—— 不，我是美国人。" },
        { it: "Parli il russo? — No, non parlo il russo.", zh: "你说俄语吗？—— 不，我不说俄语。" }
      ],
      steps: "把一个肯定句变否定，只需在动词前加 non。先找动词（parlo/abitò/sono），在它前面放 non：Parlo→Non parlo。注意 non 的位置永远在动词前，不能像英语那样放句尾。",
      commonMistakes: [
        { wrong: "“Parlo non il russo.”", right: "“Non parlo il russo.”", why: "non 必须放在动词前，不是动词后或宾语前。" }
      ],
      summary: [
        "否定 = non + 动词。",
        "non 永远在动词前。",
        "回答否定可先用 No。"
      ],
      miniPractice: [
        { q: "把“我说意大利语”变否定：", options: ["Non parlo l'italiano.", "Parlo non l'italiano.", "No parlo l'italiano."], answer: "Non parlo l'italiano.", explain: "否定词 non 放在动词 parlo 之前。" }
      ]
    },
    {
      id: "U2-T10", title: "定冠词与不定冠词（单数）", titleIt: "Articoli determinativi e indeterminativi (singolare)", importance: "essential",
      knowledge: "冠词是放在名词前的小词。定冠词 il/la/l'/lo 表示“这个/那个”（特指、已知）；不定冠词 un/una/un'/uno 表示“一个”（泛指、首次提到）。用哪个取决于后面名词的性，以及名词开头是辅音、元音还是 s+辅音。这是第二单元的重点。",
      rules: [
        "定冠词（单数）：辅音前 il signore / la signora；元音前 l'amico / l'amica；s+辅音前 lo straniero / la straniera。",
        "不定冠词（单数）：辅音前 un commesso / una commessa；元音前 un impiegato / un'impiegata；s+辅音前 uno straniero / una straniera。",
        "阳性：il(辅)/l'(元)/lo(s+辅)；阴性：la(辅)/l'(元)/la(s+辅)。",
        "不定冠词阳性：un(辅)/un'(元)/uno(s+辅)；阴性：una(辅)/un'(元)/una(s+辅)。",
        "“我有一个办公室和一个广告公司”：Ho un'agenzia e lavoro in un ufficio.（元音前用 un'）"
      ],
      vocabulary: [
        { it: "il / la / l' / lo", zh: "定冠词（阳/阴）", note: "特指" },
        { it: "un / una / un' / uno", zh: "不定冠词（一个）", note: "泛指" },
        { it: "signore / signora", zh: "先生/女士", note: "il / la" },
        { it: "straniero / straniera", zh: "外国人（阳/阴）", note: "lo / la；uno / una" },
        { it: "impiegato / impiegata", zh: "职员（阳/阴）", note: "un impiegato / un'impiegata" }
      ],
      grammarTables: [
        {
          title: "定冠词（单数）",
          headers: ["位置", "阳性", "阴性"],
          rows: [
            ["辅音前", "il signore", "la signora"],
            ["元音前", "l'amico", "l'amica"],
            ["s+辅音前", "lo straniero", "la straniera"]
          ],
          note: "元音前用 l'；s+辅音前阳性用 lo。"
        },
        {
          title: "不定冠词（单数）",
          headers: ["位置", "阳性", "阴性"],
          rows: [
            ["辅音前", "un commesso", "una commessa"],
            ["元音前", "un impiegato", "un'impiegata"],
            ["s+辅音前", "uno straniero", "una straniera"]
          ],
          note: "元音前阴性用 un'；s+辅音前阳性用 uno。"
        }
      ],
      examples: [
        { it: "Ho un'agenzia e lavoro in un ufficio.", zh: "我有一家广告公司，在一间办公室工作。" },
        { it: "Luisa fa la commessa. Alberto fa l'operaio.", zh: "路易莎是店员。阿尔贝托是工人。" }
      ],
      steps: "选冠词三步：①先定性（阳/阴）；②看名词开头：辅音 / 元音 / s+辅音；③对号入座。例：元音开头的阴性 agency → 不定冠词 un'（un'agenzia）；s+辅音开头阳性 straniero → 定冠词 lo、不定冠词 uno。",
      commonMistakes: [
        { wrong: "“un amico”（元音前）", right: "“un amico”是对的，但阴性要说 “un'amica”", why: "元音开头时，不定冠词阴性是 un'（连字符），阳性是 un。" },
        { wrong: "“lo studente” 说成 “il studente”", right: "“lo studente”（s+辅音前用 lo）", why: "s+辅音开头的阳性名词用 lo，不用 il。" }
      ],
      summary: [
        "定冠词：辅音 il/la；元音 l'；s+辅音 lo/la。",
        "不定冠词：辅音 un/una；元音 un/un'；s+辅音 uno/una。",
        "关键是看名词开头（辅音/元音/s+辅音）和性。"
      ],
      miniPractice: [
        { q: "“一家广告公司”= ___ agenzia.", options: ["un'", "una", "un"], answer: "un'", explain: "agenia 以元音 a 开头，阴性不定冠词用 un'（un'agenzia）。" },
        { q: "“一个外国人（阳）”= ___ straniero.", options: ["un", "uno", "lo"], answer: "uno", explain: "straniero 是 s+辅音开头的阳性，不定冠词用 uno。" }
      ]
    }
    ,
    {
      id: "U2-T11", title: "疑问词 chi / che / dove / quanti 与年龄", titleIt: "Gli interrogativi e gli anni", importance: "important",
      knowledge: "第二单元扩充疑问词：chi（谁）、che / che cosa（什么）、dove（哪里）、quanti/quante（多少，问数量或年龄）。问年龄用 Quanti anni hai?（你几岁？）。",
      rules: [
        "chi 问“谁”：Chi è Pedro?（佩德罗是谁？）",
        "che / che cosa 问“什么”：Che lingue parli?（你说什么语言？）/ Che lavoro fai?（你做什么工作？）",
        "dove 问“哪里”：Dove lavori?（你在哪工作？）",
        "quanti（阳/复）/ quante（阴/复）问“多少”：Quanti anni hai?（你几岁？）",
        "疑问词永远在动词前或介词后（第一单元已确立的规则）。"
      ],
      vocabulary: [
        { it: "chi", zh: "谁", note: "Chi è?" },
        { it: "che / che cosa", zh: "什么", note: "Che lavoro?" },
        { it: "dove", zh: "哪里", note: "Dove lavori?" },
        { it: "quanti / quante", zh: "多少（阳/阴）", note: "Quanti anni?" },
        { it: "anni", zh: "岁/年", note: "Quanti anni hai?" }
      ],
      grammarTables: [{
        title: "第二单元疑问词",
        headers: ["疑问词", "意思", "例句"],
        rows: [
          ["chi", "谁", "Chi è Pedro?"],
          ["che / che cosa", "什么", "Che lingue parli?"],
          ["dove", "哪里", "Dove lavori?"],
          ["quanti / quante", "多少", "Quanti anni hai?"]
        ],
        note: "quanti(阳复) / quante(阴复) 要与被问的名词性数一致。"
      }],
      examples: [
        { it: "Quanti anni hai? — Venti. / Quanti anni ha? — Sessantadue.", zh: "你几岁？—— 20。/ 您多大？—— 62。" },
        { it: "Che lingue parli? — Parlo l'italiano e l'inglese.", zh: "你说什么语言？—— 我说意大利语和英语。" }
      ],
      steps: "问年龄：Quanti（多少）+ anni（岁）+ hai（你有）。意大利语用“有多少年”来问年龄，动词用 avere（有）：Quanti anni hai?（你有多少岁）→ 回答直接说数字 Venti.（20。）",
      commonMistakes: [
        { wrong: "问年龄用 “Come stai?” 或动词 essere", right: "用 “Quanti anni hai?”（动词 avere）", why: "意大利语问年龄用“有多少年”，动词是 avoir（hai）。" }
      ],
      summary: [
        "chi=谁；che/che cosa=什么；dove=哪里；quanti/quante=多少。",
        "问年龄：Quanti anni hai?（用 avoir 的 hai）。"
      ],
      miniPractice: [
        { q: "“你几岁？”= ___ anni hai?", options: ["Quanti", "Quante", "Che"], answer: "Quanti", explain: "anni（岁）是阳性复数，用 quanti。" },
        { q: "“佩德罗是谁？”= ___ è Pedro?", options: ["Che", "Chi", "Dove"], answer: "Chi", explain: "问“谁”用疑问词 chi。" }
      ]
    },
    {
      id: "U2-T12", title: "数字 20–100", titleIt: "I numeri da 20 a 100", importance: "important",
      knowledge: "第二单元把数字扩展到 100。20–29 有特殊合成形式（21=ventuno, 23=ventitré…），30/40/50/60/70/80/90 是整十数，100 是 cento。用于报数、说年龄、说价格等。",
      rules: [
        "整十数：30 trenta、40 quaranta、50 cinquanta、60 sessanta、70 settanta、80 ottanta、90 novanta、100 cento。",
        "20–29 特殊：20 venti、21 ventuno、22 ventidue、23 ventitré、24 ventiquattro、25 venticinque、26 ventisei、27 ventisette、28 ventotto、29 ventinove。",
        "十位+个位的合成规则：个位是 1 或 8 时省略词尾元音并连写：21=ventuno（venti+uno→ventuno）、28=ventotto（venti+otto→ventotto）；其他情况用重音或分写：23=ventitré、25=venticinque、46=quarantasei。",
        "注意 23 ventitré、26 ventisei、27 ventisette、29 ventinove 等的拼写与重音。"
      ],
      vocabulary: [
        { it: "venti", zh: "20", note: "" }, { it: "trenta", zh: "30", note: "" }, { it: "quaranta", zh: "40", note: "" },
        { it: "cinquanta", zh: "50", note: "" }, { it: "sessanta", zh: "60", note: "" }, { it: "settanta", zh: "70", note: "" },
        { it: "ottanta", zh: "80", note: "" }, { it: "novanta", zh: "90", note: "" }, { it: "cento", zh: "100", note: "" }
      ],
      grammarTables: [
        {
          title: "20–29 的特殊形式",
          headers: ["数字", "意大利语", "数字", "意大利语"],
          rows: [["20", "venti", "25", "venticinque"], ["21", "ventuno", "26", "ventisei"], ["22", "ventidue", "27", "ventisette"], ["23", "ventitré", "28", "ventotto"], ["24", "ventiquattro", "29", "ventinove"]],
          note: "21/28 连写省音；23 有重音 é。"
        },
        {
          title: "整十数 30–100",
          headers: ["数字", "意大利语", "数字", "意大利语"],
          rows: [["30", "trenta", "70", "settanta"], ["40", "quaranta", "80", "ottanta"], ["50", "cinquanta", "90", "novanta"], ["60", "sessanta", "100", "cento"]],
          note: "如 46=quarantasei（quaranta+sei）。"
        }
      ],
      examples: [
        { it: "Quanti anni hai? — Cinquantacinque.", zh: "你几岁？—— 55。" },
        { it: "Il menù costa venti euro.", zh: "套餐 20 欧元。" }
      ],
      steps: "记 20–29 是关键，因为它们不规则。先背 venti…ventinove，再背整十数 trenta…novanta，cento。合成时记住：+uno/+otto 要省音连写（ventuno/ventotto），其他保持或加重音。",
      commonMistakes: [
        { wrong: "把 21 写成 “ventiuno”", right: "“ventuno”（连写、省 i）", why: "个位 uno 前要省略词尾 i 并连写。" },
        { wrong: "把 28 写成 “ventiotto”", right: "“ventotto”（连写、省 i）", why: "otto 前同样省略 i 连写。" }
      ],
      summary: [
        "背熟 20–29（不规则）和整十数 30–100。",
        "+uno/+otto 省音连写：ventuno、ventotto。",
        "23=ventitré 带重音。"
      ],
      miniPractice: [
        { q: "数字 21 是：", options: ["ventuno", "ventiuno", "venti e uno"], answer: "ventuno", explain: "21=ventuno，uno 前省 i 连写。" },
        { q: "数字 28 是：", options: ["ventotto", "ventiotto", "venti otto"], answer: "ventotto", explain: "28=ventotto，otto 前省 i 连写。" }
      ]
    }
  ]
});
