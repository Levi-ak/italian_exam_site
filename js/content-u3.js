/* content-u3.js — Unit 3 《Buon appetito》 (源: UNITA3_NE1.pdf, 课本第33-44、158-162页) */
CONTENT.units.push({
  id: "U3", number: 3, title: "Buon appetito",
  titleZh: "祝你好胃口 —— 在酒吧与餐厅点餐、点菜、结账",
  sourcePdf: "UNITA3_NE1.pdf",
  pages: "课文第33–44页；练习第158–162页",
  overview: "第三单元围绕“吃喝”展开：在酒吧点咖啡和羊角包、在餐厅点菜（头盘/主盘/配菜/甜点）、点饮料、要账单、预订座位。语法上你会学到动词 prendere（拿/点）、volere（想要）、preferire（更喜欢）的现在时变位，名词的复数变化、定冠词的复数形式，以及 bene 与 buono 的区别和 che cosa / quali / quante 等疑问词。",
  topics: [
    {
      id: "U3-T1", title: "在酒吧点餐：Vorrei…", titleIt: "Al bar: ordinare con «Vorrei…»", importance: "essential",
      knowledge: "意大利人早上常在 bar（咖啡吧）站着喝咖啡、吃羊角包（cornetto）。点东西时最礼貌、最常用的句型是 Vorrei…（我想要……），用的是动词 volere 的条件式，非常客气。店员问 Cosa desidera?（您想要什么？）。",
      rules: [
        "点东西最礼貌的说法：Vorrei + 食物/饮料。（我想要……）",
        "店员招呼：Cosa desidera?（您想要什么？）/ I signori desiderano?（二位想要点什么？）",
        "也可以用 Io prendo…（我要/我点……）或 Per me…（给我……）。",
        "常见饮品（第34页）：il caffè（咖啡）、il cappuccino（卡布奇诺）、il caffè macchiato（意式奶咖）、il tè al limone/al latte（柠檬茶/奶茶）、la spremuta di pompelmo（西柚汁）、l'aranciata（橙汁汽水）、la birra（啤酒）、l'acqua minerale（矿泉水）、l'aperitivo（开胃酒）、lo spumante（起泡酒）、il bicchiere di latte（一杯牛奶）。",
        "常见食物：il cornetto（羊角包，可带奶油 crema 或果酱 marmellata）、il panino（三明治）、il toast、il tramezzino。"
      ],
      vocabulary: [
        { it: "Vorrei…", zh: "我想要……（礼貌）", note: "volere 的礼貌形式" },
        { it: "Cosa desidera?", zh: "您想要什么？", note: "店员用语" },
        { it: "prendo", zh: "我要/我点", note: "prendere 的 io 形式" },
        { it: "Per me…", zh: "给我……", note: "点餐常用" },
        { it: "cornetto", zh: "羊角包", note: "con crema/marmellata" },
        { it: "caffè / cappuccino", zh: "咖啡 / 卡布奇诺", note: "" },
        { it: "tè al limone", zh: "柠檬茶", note: "" },
        { it: "aranciata / spremuta", zh: "橙汁汽水 / 鲜榨汁", note: "" }
      ],
      grammarTables: [{
        title: "点餐常用句型",
        headers: ["含义", "说法"],
        rows: [
          ["我想要一个羊角包。", "Vorrei un cornetto."],
          ["我要一个羊角包。", "Io prendo un cornetto."],
          ["给我（一个）咖啡。", "Per me un caffè."],
          ["您想要什么？", "Cosa desidera? / I signori desiderano?"]
        ],
        note: "Vorrei 最礼貌；prendo 较直接；per me 口语。"
      }],
      examples: [
        { it: "I signori desiderano? — Io prendo un cornetto e un caffè macchiato. E Lei, signora? — Anch'io vorrei un cornetto e poi un tè al limone.", zh: "二位想要点什么？—— 我要一个羊角包和一杯奶咖。您呢，女士？—— 我也想要一个羊角包，再来一杯柠檬茶。" },
        { it: "I cornetti con la crema o con la marmellata? — Con la crema. / Per me invece con la marmellata.", zh: "羊角包要奶油的还是果酱的？—— 奶油的。/ 给我要果酱的。" }
      ],
      steps: "在 bar 点餐的流程：①店员问 Cosa desidera?；②你说 Vorrei un cornetto e un caffè.（我想要一个羊角包和一杯咖啡）；③若被追问细节（con la crema o con la marmellata?）再回答。记住礼貌句型 Vorrei 比直接说“我要”更得体。",
      commonMistakes: [
        { wrong: "对店员说 “Io voglio un caffè.”（太生硬）", right: "应说 “Vorrei un caffè.”", why: "voglio 太直接、略显粗鲁；点餐用礼貌的 Vorrei。" }
      ],
      summary: [
        "点餐礼貌句型：Vorrei + 食物/饮料。",
        "也可用 Io prendo… / Per me…。",
        "记住常见饮品与 cornetto 等词。"
      ],
      miniPractice: [
        { q: "礼貌地说“我想要一杯咖啡”：", options: ["Voglio un caffè.", "Vorrei un caffè.", "Prendo caffè."], answer: "Vorrei un caffè.", explain: "点餐用礼貌的 Vorrei；voglio 太直接。" },
        { q: "“羊角包”是：", options: ["cornetto", "panino", "toast"], answer: "cornetto", explain: "cornetto=羊角包；panino=三明治；toast=吐司。" }
      ]
    },
    {
      id: "U3-T2", title: "动词 prendere / volere / preferire", titleIt: "prendere, volere, preferire (presente)", importance: "essential",
      knowledge: "点餐的三个核心动词：prendere（拿/点/吃喝）、volere（想要）、preferire（更喜欢）。prendere 和 preferire 有规律可循，volere 不规则。全人称变位都要掌握。",
      rules: [
        "prendere：io prendo / tu prendi / lui,lei,Lei prende / noi prendiamo / voi prendete / loro prendono。",
        "volere（不规则）：io voglio / tu vuoi / lui,lei,Lei vuole / noi vogliamo / voi volete / loro vogliono。",
        "preferire：io preferisco / tu preferisci / lui,lei,Lei preferisce / noi preferiamo / voi preferite / loro preferiscono。",
        "preferire 的 io 是 preferisco（-isco 结尾），注意与规则动词区分。"
      ],
      vocabulary: [
        { it: "prendere", zh: "拿/点/吃喝", note: "" },
        { it: "volere", zh: "想要", note: "不规则" },
        { it: "preferire", zh: "更喜欢", note: "-isco 结尾" },
        { it: "voglio / vuoi / vuole", zh: "我想要/你想要/他想要", note: "volere" },
        { it: "preferisco / preferisci", zh: "我更喜欢/你更喜欢", note: "preferire" }
      ],
      grammarTables: [
        { title: "prendere 现在时", headers: ["人称", "prendere"], rows: [["io", "prendo"], ["tu", "prendi"], ["lui, lei, Lei", "prende"], ["noi", "prendiamo"], ["voi", "prendete"], ["loro", "prendono"]], note: "" },
        { title: "volere 现在时", headers: ["人称", "volere"], rows: [["io", "voglio"], ["tu", "vuoi"], ["lui, lei, Lei", "vuole"], ["noi", "vogliamo"], ["voi", "volete"], ["loro", "vogliono"]], note: "不规则，需记忆。" },
        { title: "preferire 现在时", headers: ["人称", "preferire"], rows: [["io", "preferisco"], ["tu", "preferisci"], ["lui, lei, Lei", "preferisce"], ["noi", "preferiamo"], ["voi", "preferite"], ["loro", "preferiscono"]], note: "io 是 preferisco。" }
      ],
      examples: [
        { it: "Vuoi anche tu la pasta o preferisci qualcos'altro?", zh: "你也想吃意面还是想要别的？" },
        { it: "Noi prendiamo un'aranciata e una spremuta di pompelmo.", zh: "我们要一杯橙汁汽水和一杯西柚汁。" }
      ],
      steps: "造句时先确定动词和人称。例：“你想要什么？”= Che cosa vuoi?（volere→vuoi）；“我更喜欢肉”= Preferisco la carne.（preferire→preferisco）。volere 不规则要硬背；preferire 记住 io 是 -isco。",
      commonMistakes: [
        { wrong: "把 preferire 的 io 说成 “prefero”", right: "“preferisco”", why: "preferire 属 -ire 类，io 变位是 preferisco（-isco）。" },
        { wrong: "把 volere 的 noi 说成 “volemо”", right: "“vogliamo”", why: "volere 不规则，noi 是 vogliamo。" }
      ],
      summary: [
        "prendere: prendo/prendi/prende/prendiamo/prendete/prendono。",
        "volere: voglio/vuoi/vuole/vogliamo/volete/vogliono（不规则）。",
        "preferire: preferisco/preferisci/preferisce/preferiamo/preferite/preferiscono。"
      ],
      miniPractice: [
        { q: "“我更喜欢鱼。”= Io ___ il pesce.", options: ["preferisco", "prendo", "voglio"], answer: "preferisco", explain: "preferire 的 io 形式是 preferisco。" },
        { q: "“他们想要一个开胃酒。”= Loro ___ un aperitivo.", options: ["vogliono", "volete", "vuole"], answer: "vogliono", explain: "volere 的 loro 形式是 vogliono。" }
      ]
    },
    {
      id: "U3-T3", title: "在餐厅点菜：一顿饭的结构", titleIt: "Al ristorante: la struttura del pasto", importance: "essential",
      knowledge: "意大利正餐有固定顺序：antipasto（头盘/前菜）→ primo（第一道，通常是意面/汤）→ secondo（第二道，肉或鱼）+ contorno（配菜）→ dessert（甜点）。点菜时要会说“我要一个第一道/第二道”。",
      rules: [
        "餐序：antipasto → primo → secondo（配 contorno）→ dessert。",
        "点菜：Vorrei solo un primo.（我只要一个第一道。）/ Per me un secondo.",
        "店员问：Che cosa avete oggi?（今天有什么？）/ Desidera ancora qualcos'altro?（您还想要点别的吗？）",
        "菜单（第36页）示例：Antipasti—Prosciutto e formaggio, Bruschette；Primi—Tortellini in brodo, Tagliatelle ai porcini, Lasagne al forno, Risotto ai funghi, Minestrone, Spaghetti ai frutti di mare, Spaghetti al pomodoro；Secondi (carne)—Cotoletta alla milanese, Arrosto di vitello；Secondi (pesce)—Trota al forno, Sogliola；Contorni—Insalata mista, Patatine fritte, Purè di patate, Spinaci al burro, Peperoni alla griglia；Dessert—Frutta fresca, Macedonia, Fragole, Gelato, Panna cotta, Tiramisù。",
        "饮料：Un quarto di vino rosso/bianco.（四分之一升红酒/白酒）/ Mezza minerale.（半瓶矿泉水）Gasata o naturale?（气泡的还是无气的？）"
      ],
      vocabulary: [
        { it: "antipasto", zh: "头盘/前菜", note: "复数 antipasti" },
        { it: "primo", zh: "第一道（面/汤）", note: "" },
        { it: "secondo", zh: "第二道（肉/鱼）", note: "" },
        { it: "contorno", zh: "配菜", note: "" },
        { it: "dessert", zh: "甜点", note: "" },
        { it: "menu / menù", zh: "菜单", note: "" },
        { it: "vino rosso / bianco", zh: "红酒/白酒", note: "" },
        { it: "gasata / naturale", zh: "气泡的/无气的", note: "矿泉水" }
      ],
      grammarTables: [{
        title: "意大利餐的结构（顺序）",
        headers: ["顺序", "类别", "例子"],
        rows: [
          ["1", "antipasto 头盘", "prosciutto, bruschette"],
          ["2", "primo 第一道", "spaghetti, lasagne, risotto, minestrone"],
          ["3", "secondo 第二道", "cotoletta, arrosto, trota, sogliola"],
          ["（配）", "contorno 配菜", "insalata, patatine, spinaci"],
          ["4", "dessert 甜点", "gelato, panna cotta, tiramisù"]
        ],
        note: "primo 一般是面/汤；secondo 是肉/鱼，配 contorno。"
      }],
      examples: [
        { it: "Vorrei solo un primo. — Che cosa avete oggi? — Spaghetti ai frutti di mare, tagliatelle ai porcini, tortellini in brodo…", zh: "我只要一个第一道。—— 今天有什么？—— 海鲜意面、牛肝菌宽面、清汤意饺……" },
        { it: "Una cotoletta con le patatine fritte. E da bere? — Un quarto di vino rosso e mezza minerale.", zh: "一份炸肉排配炸薯条。喝点什么？—— 四分之一升红酒和半瓶矿泉水。" }
      ],
      steps: "点一顿完整饭按顺序说：先 Antipasto?（要不要前菜）→ Primo（第一道）→ Secondo + Contorno（第二道+配菜）→ Dessert。只想要一道时用 Vorrei solo un primo. 问今天有什么用 Che cosa avete oggi?",
      commonMistakes: [
        { wrong: "把 secondo 当成“第二份”", right: "secondo 是正餐的“第二道（主菜：肉/鱼）”", why: "在餐饮语境 secondo 指主菜，不是数字“第二”。" }
      ],
      summary: [
        "餐序：antipasto → primo → secondo(+contorno) → dessert。",
        "点菜：Vorrei solo un primo. / Che cosa avete oggi?",
        "primo=面/汤；secondo=肉/鱼。"
      ],
      miniPractice: [
        { q: "意大利正餐中，“第一道 primo”通常是：", options: ["肉或鱼", "意面或汤", "甜点"], answer: "意面或汤", explain: "primo 一般是意面或汤类；肉/鱼是 secondo。" },
        { q: "“我只要一个第一道。”= Vorrei ___ un primo.", options: ["solo", "anche", "più"], answer: "solo", explain: "solo=只、只要。Vorrei solo un primo.（只要第一道。）" }
      ]
    }
    ,
    {
      id: "U3-T4", title: "名词的复数", titleIt: "Il plurale dei sostantivi", importance: "essential",
      knowledge: "把名词从单数变复数有明确规律：阳性 -o/-e 结尾变 -i，阴性 -a 结尾变 -e，阴性 -e 结尾变 -i。但有例外——末音节带重音的词和以辅音结尾的词，复数不变。",
      rules: [
        "阳性名词 -o / -e → 复数 -i：l'aperitivo → gli aperitivi；il bicchiere → i bicchieri。",
        "阴性名词 -a → 复数 -e：la bevanda → le bevande；la carne → le carni。",
        "阴性名词 -e → 复数 -i：（与阳性同规则）",
        "例外（复数不变）：末音节带重音的名词（如 il tè → i tè；la specialità → le specialità）和以辅音结尾的名词（如 il toast → i toast），复数保持不变。",
        "练习（第38页）：il gelato → i gelati；lo spumante → gli spumanti；l'antipasto → gli antipasti；la pizza → le pizze；l'insalata → le insalate。"
      ],
      vocabulary: [
        { it: "aperitivo / aperitivi", zh: "开胃酒（单/复）", note: "-o → -i" },
        { it: "bicchiere / bicchieri", zh: "杯子（单/复）", note: "-e → -i" },
        { it: "bevanda / bevande", zh: "饮料（单/复）", note: "-a → -e" },
        { it: "carne / carni", zh: "肉（单/复）", note: "-a → -e" },
        { it: "tè / tè", zh: "茶（单/复不变）", note: "末音节重音" },
        { it: "toast / toast", zh: "吐司（单/复不变）", note: "辅音结尾" },
        { it: "specialità / specialità", zh: "特色菜（单/复不变）", note: "末音节重音" }
      ],
      grammarTables: [{
        title: "名词复数规则与例外",
        headers: ["类型", "单数", "复数", "规则"],
        rows: [
          ["阳性 -o", "l'aperitivo", "gli aperitivi", "-o → -i"],
          ["阳性 -e", "il bicchiere", "i bicchieri", "-e → -i"],
          ["阴性 -a", "la bevanda", "le bevande", "-a → -e"],
          ["末音节重音", "il tè", "i tè", "不变"],
          ["辅音结尾", "il toast", "i toast", "不变"]
        ],
        note: "-o/-e→-i，-a→-e；重音词与辅音结尾词不变。"
      }],
      examples: [
        { it: "il gelato → i gelati; la pizza → le pizze; l'insalata → le insalate.", zh: "冰淇淋→冰淇淋们；披萨→披萨们；沙拉→沙拉们。" },
        { it: "il tè → i tè; la specialità → le specialità; il toast → i toast.", zh: "茶→茶（复数不变）；特色菜→特色菜（不变）；吐司→吐司（不变）。" }
      ],
      steps: "变复数三步：①看性（阳/阴）；②看结尾（-o/-e/-a/重音/辅音）；③套规则。例：gelato（阳 -o）→ gelati；pizza（阴 -a）→ pizze；tè（末音节重音）→ 不变。",
      commonMistakes: [
        { wrong: "把 pizza 变成 “pizzas”", right: "“le pizze”", why: "阴性 -a 结尾变 -e，不是加 s。" },
        { wrong: "把 tè 变成 “tès”", right: "“i tè”（不变）", why: "末音节带重音的名词复数不变。" }
      ],
      summary: [
        "阳 -o/-e → -i；阴 -a → -e；阴 -e → -i。",
        "例外：末音节重音词、辅音结尾词复数不变（tè, toast, specialità）。"
      ],
      miniPractice: [
        { q: "“冰淇淋们”= i ___", options: ["gelati", "gelate", "gelato"], answer: "gelati", explain: "gelato（阳 -o）复数变 -i → gelati。" },
        { q: "“茶（复数）”= i ___", options: ["tè", "tès", "tèi"], answer: "tè", explain: "tè 末音节带重音，复数不变。" }
      ]
    },
    {
      id: "U3-T5", title: "定冠词的复数", titleIt: "Gli articoli determinativi (plurale)", importance: "important",
      knowledge: "定冠词也有复数形式，要和名词的性数一致。阳性复数是 i（辅音前）/ gli（元音或 s+辅音前）；阴性复数是 le。掌握它才能说出“这些冰淇淋”“那些沙拉”。",
      rules: [
        "阳性复数：辅音前 i（il gelato → i gelati）；元音前或 s+辅音前 gli（l'antipasto → gli antipasti；lo spumante → gli spumanti）。",
        "阴性复数：一律 le（la pizza → le pizze；l'insalata → le insalate）。",
        "单数→复数对照：il → i；lo → gli；l' → gli（阳）/ le（阴）；la → le。"
      ],
      vocabulary: [
        { it: "il → i", zh: "定冠词阳（辅音）", note: "" },
        { it: "lo → gli", zh: "定冠词阳（s+辅音）", note: "" },
        { it: "l' → gli / le", zh: "定冠词（元音前）", note: "阳 gli / 阴 le" },
        { it: "la → le", zh: "定冠词阴", note: "" }
      ],
      grammarTables: [{
        title: "定冠词 单数→复数",
        headers: ["单数", "复数", "位置"],
        rows: [
          ["il gelato", "i gelati", "阳性·辅音前"],
          ["lo spumante", "gli spumanti", "阳性·s+辅音前"],
          ["l'antipasto", "gli antipasti", "阳性·元音前"],
          ["la pizza", "le pizze", "阴性"],
          ["l'insalata", "le insalate", "阴性·元音前"]
        ],
        note: "阳性复数 i/gli；阴性复数一律 le。"
      }],
      examples: [
        { it: "il gelato → i gelati; lo spumante → gli spumanti; la pizza → le pizze.", zh: "冰淇淋→这些冰淇淋；起泡酒→这些起泡酒；披萨→这些披萨。" }
      ],
      steps: "先变名词复数，再配冠词：①gelato→gelati（阳、辅音）→ i gelati；②spumante→spumanti（s+辅音）→ gli spumanti；③pizza→pizze（阴）→ le pizze。",
      commonMistakes: [
        { wrong: "“le spumanti”", right: "“gli spumanti”", why: "spumante 是阳性（s+辅音开头），用 gli，不是 le。" }
      ],
      summary: [
        "阳性复数：i（辅音）/ gli（元音或 s+辅音）。",
        "阴性复数：一律 le。"
      ],
      miniPractice: [
        { q: "“沙拉们”= ___ insalate.", options: ["Le", "Gli", "I"], answer: "Le", explain: "insalata 是阴性，复数定冠词用 le。" },
        { q: "“起泡酒们”= ___ spumanti.", options: ["Gli", "Le", "I"], answer: "Gli", explain: "spumante 是阳性且 s+辅音开头，复数用 gli。" }
      ]
    },
    {
      id: "U3-T6", title: "bene 与 buono 的区别", titleIt: "bene – buono", importance: "important",
      knowledge: "bene 和 buono 都能译成“好”，但词性和用法完全不同：bene 是副词，修饰动词（做得好、吃得好）；buono 是形容词，修饰名词（好吃的东西）。这是第三单元明确区分的一对词。",
      rules: [
        "bene 是副词，永远用来修饰动词（si mangia bien = 吃得好；si beve bene = 喝得好）。回答问候或表示“好”用 bene：Bene, signora.（好的，女士。）",
        "buono 是形容词，永远用来修饰名词（Il caffè è molto buono. 这咖啡很好喝。）。",
        "buono 要和名词性数配合：buono/buona（单）/ buoni/buone（复）。如 le lasagne sono molto buone（复数阴性）。",
        "练习（第161页）用到：va bene（这样就好）、buona sera（晚上好）、buoni/buone。"
      ],
      vocabulary: [
        { it: "bene", zh: "好（副词）", note: "修饰动词" },
        { it: "buono/buona", zh: "好的（形容词）", note: "修饰名词，阳/阴" },
        { it: "buoni/buone", zh: "好的（复数）", note: "阳复/阴复" },
        { it: "va bene", zh: "这样就好/行", note: "固定说法" }
      ],
      grammarTables: [{
        title: "bene vs buono",
        headers: ["词", "词性", "修饰", "例句"],
        rows: [
          ["bene", "副词 avverbio", "动词 verbo", "Il caffè si beve bene."],
          ["buono", "形容词 aggettivo", "名词 sostantivo", "Il caffè è molto buono."]
        ],
        note: "bene→动词；buono→名词。"
      }],
      examples: [
        { it: "Vorrei solo un tè al latte. — Bene, signora.", zh: "我只要一杯奶茶。—— 好的，女士。（bene 回应，修饰动作）" },
        { it: "Qui il caffè è molto buono.", zh: "这儿的咖啡很好喝。（buono 修饰名词 caffè）" }
      ],
      steps: "判断用 bene 还是 buono：看它修饰什么。修饰动词或单独表示“好/行”→ bene（Va bene = 行、好的）；修饰名词（食物、东西）→ buono，还要变性数（buona/buoni/buone）。",
      commonMistakes: [
        { wrong: "“Il caffè è molto bene.”", right: "“Il caffè è molto buono.”", why: "修饰名词 caffè（好喝的）要用形容词 buono，不是副词 bene。" },
        { wrong: "“Va buono.”", right: "“Va bene.”", why: "va 是动词，修饰动词用副词 bene。" }
      ],
      summary: [
        "bene=副词，修饰动词（Va bene!）。",
        "buono=形容词，修饰名词，性数配合（buona/buoni/buone）。"
      ],
      miniPractice: [
        { q: "“这披萨很好吃。”= La pizza è molto ___.", options: ["buona", "bene", "buone"], answer: "buona", explain: "修饰名词 pizza（阴性单数）用 buona。" },
        { q: "“这样就好/行。”= Va ___.", options: ["bene", "buono", "buona"], answer: "bene", explain: "va 是动词，用副词 bene：Va bene." }
      ]
    }
    ,
    {
      id: "U3-T7", title: "餐具与餐桌词汇", titleIt: "Stoviglie e tavola", importance: "supporting",
      knowledge: "在餐厅用餐会接触到各种餐具和调味品的名称。这些词在课本第39页集中出现，虽然不是核心语法，但对看懂菜单、在餐桌上沟通很有帮助。",
      rules: [
        "餐具（第39页）：il piatto（盘子）、la forchetta（叉）、il coltello（刀）、il cucchiaio（勺）、il bicchiere（杯子）、il tovagliolo（餐巾）、la bottiglia（瓶子）。",
        "调味品：il sale（盐）、il pepe（胡椒）、l'olio（油）、l'aceto（醋）。",
        "食物：il pane（面包）。",
        "这些名词也遵循第三单元的复数规则（-o→-i 等）。"
      ],
      vocabulary: [
        { it: "il piatto", zh: "盘子", note: "复数 i piatti" },
        { it: "la forchetta", zh: "叉子", note: "复数 le forchette" },
        { it: "il coltello", zh: "刀", note: "复数 i coltelli" },
        { it: "il cucchiaio", zh: "勺子", note: "复数 i cucchiai" },
        { it: "il bicchiere", zh: "杯子", note: "复数 i bicchieri" },
        { it: "il tovagliolo", zh: "餐巾", note: "复数 i tovaglioli" },
        { it: "il sale / il pepe", zh: "盐 / 胡椒", note: "" },
        { it: "l'olio / l'aceto", zh: "油 / 醋", note: "" },
        { it: "il pane", zh: "面包", note: "" },
        { it: "la bottiglia", zh: "瓶子", note: "" }
      ],
      grammarTables: [{
        title: "常见餐具与调味品",
        headers: ["意大利语", "中文"],
        rows: [["il piatto", "盘子"], ["la forchetta", "叉"], ["il coltello", "刀"], ["il cucchiaio", "勺"], ["il bicchiere", "杯"], ["il tovagliolo", "餐巾"], ["il sale", "盐"], ["il pepe", "胡椒"], ["l'olio", "油"], ["l'aceto", "醋"], ["il pane", "面包"], ["la bottiglia", "瓶"]],
        note: "都可按复数规则变复数。"
      }],
      examples: [
        { it: "Scusi, mi porta ancora un tovagliolo?", zh: "劳驾，再给我一条餐巾好吗？" },
        { it: "Mettere il pane e il bicchiere sul tavolo.", zh: "把面包和杯子放到桌上。" }
      ],
      steps: "记这些词时可联想餐桌上的实物：吃要用 piatto（盘）、forchetta（叉）、coltello（刀）、cucchiaio（勺）；喝要用 bicchiere（杯）、bottiglia（瓶）；调味用 sale（盐）、pepe（胡椒）、olio（油）、aceto（醋）。",
      commonMistakes: [
        { wrong: "把 forchetta 当阳性说 “il forchetta”", right: "“la forchetta”", why: "forchetta 以 -a 结尾是阴性，用 la。" }
      ],
      summary: [
        "记餐具：piatto, forchetta, coltello, cucchiaio, bicchiere, tovagliolo。",
        "记调味：sale, pepe, olio, aceto；食物 pane。"
      ],
      miniPractice: [
        { q: "“叉子”是：", options: ["la forchetta", "il coltello", "il cucchiaio"], answer: "la forchetta", explain: "forchetta=叉子；coltello=刀；cucchiaio=勺。" },
        { q: "“盐”是：", options: ["il sale", "il pepe", "l'olio"], answer: "il sale", explain: "sale=盐；pepe=胡椒；olio=油。" }
      ]
    },
    {
      id: "U3-T8", title: "要账单与预订座位", titleIt: "Il conto e la prenotazione", importance: "important",
      knowledge: "在餐厅结束用餐要结账，或提前电话预订座位，都有固定说法。要账单说 Il conto, per favore/cortesia.；预订说 È possibile prenotare un tavolo per le otto?（能在8点订一张桌吗？）。还要会礼貌地请服务员再拿东西。",
      rules: [
        "要账单：Il conto, per favore! / E poi il conto, per cortesia.（结账，请。）",
        "叫服务员：在意大利不喊 cameriere，而说 Scusi!（劳驾）—— 这是课本明确提示的文化点。",
        "请服务员再拿东西：Scusi, mi porta ancora mezza minerale / un po' di pane / un tovagliolo?（劳驾，再给我半瓶矿泉水/一点面包/一条餐巾好吗？）",
        "预订座位：È possibile prenotare un tavolo per le otto?（能在8点订桌吗？）— Certo. Per quante persone?（当然，几位？）— Per sei, forse sette.（六位，也许七位。）— D'accordo. E a che nome?（好的，留什么名字？）— Lochmann.（洛赫曼。）",
        "感谢与回应：Grazie mille!（多谢！）— Prego, si figuri!（不客气！）",
        "礼貌用语：per favore / per cortesia / per piacere（请）。"
      ],
      vocabulary: [
        { it: "il conto", zh: "账单", note: "Il conto, per favore!" },
        { it: "prenotare", zh: "预订", note: "" },
        { it: "un tavolo", zh: "一张桌子", note: "" },
        { it: "per quante persone", zh: "几位", note: "" },
        { it: "a che nome", zh: "留什么名字", note: "" },
        { it: "mi porta ancora", zh: "再给我拿……", note: "请服务员" },
        { it: "grazie mille", zh: "多谢", note: "" },
        { it: "prego, si figuri", zh: "不客气", note: "" }
      ],
      grammarTables: [{
        title: "预订座位对话结构",
        headers: ["角色", "话语"],
        rows: [
          ["顾客", "Buongiorno. Scusi, è possibile prenotare un tavolo per le otto?"],
          ["店员", "Certo. Per quante persone?"],
          ["顾客", "Sei, forse sette."],
          ["店员", "D'accordo. E a che nome?"],
          ["顾客", "Lochmann."],
          ["店员", "Come, scusi?"],
          ["顾客", "Lochmann, elle-o-ci-acca-emme-a-enne-enne."],
          ["店员", "Prego, si figuri! A più tardi."],
          ["顾客", "Grazie mille. Arrivederci."]
        ],
        note: "没听清时说 Come, scusi?，然后逐字母拼读名字。"
      }],
      examples: [
        { it: "Il conto, per favore. — Ecco a lei.", zh: "结账，请。—— 给您。" },
        { it: "È possibile prenotare un tavolo per le otto? — Certo. Per quante persone?", zh: "能在8点订一张桌吗？—— 当然。几位？" },
        { it: "Scusi, mi porta ancora un po' di pane? — Certo, signora.", zh: "劳驾，再给我一点面包好吗？—— 当然，女士。" }
      ],
      steps: "预订座位完整流程：①È possibile prenotare un tavolo per + 时间（钟点）?；②回答人数 Per quante persone? → Sei.；③留名 E a che nome? → 姓氏；④若对方没听清用 Come, scusi? 再拼读；⑤最后 Grazie mille.。要账单只需 Il conto, per favore.",
      commonMistakes: [
        { wrong: "直接喊 “Cameroere!” 叫服务员", right: "说 “Scusi!”", why: "课本文化提示：在意大利叫服务员用 Scusi，不用 cameriere。" },
        { wrong: "“Il conto, grazie mille.”（用错词）", right: "“Il conto, per favore/cortesia.”", why: "要账单用 per favore / per cortesia；grazie mille 是“多谢”。" }
      ],
      summary: [
        "要账单：Il conto, per favore!",
        "叫服务员用 Scusi!（不用 cameriere）。",
        "预订：È possibile prenotare un tavolo per le otto? Per quante persone? A che nome?",
        "感谢：Grazie mille! — Prego, si figuri!"
      ],
      miniPractice: [
        { q: "在意大利叫服务员应该说：", options: ["Scusi!", "Cameroere!", "Hello!"], answer: "Scusi!", explain: "文化点：叫服务员用 Scusi，不用 cameriere。" },
        { q: "结账时说：", options: ["Il conto, per favore!", "Il menù, per favore!", "Acqua, per favore!"], answer: "Il conto, per favore!", explain: "il conto=账单；要结账说 Il conto, per favore." }
      ]
    }
    ,
    {
      id: "U3-T9", title: "疑问词 che cosa / quali / quante", titleIt: "Gli interrogativi", importance: "important",
      knowledge: "第三单元的疑问词用于点餐场景：che cosa（什么）、quale/quanti/quante（哪些/多少）。它们同样要放在动词之前。",
      rules: [
        "(Che) cosa avete oggi?（你们今天有什么？）—— cosa 表示“什么”。",
        "Quali piatti conoscete?（你们熟悉哪些菜？）—— quali 是“哪些”（复数）。",
        "Per quante persone?（几位？）—— quante 修饰阴性复数 persone。",
        "疑问词永远放在动词之前或介词之后（延续前面单元的规则）。"
      ],
      vocabulary: [
        { it: "(che) cosa", zh: "什么", note: "Che cosa avete?" },
        { it: "quale / quali", zh: "哪个/哪些（单/复）", note: "Quali piatti?" },
        { it: "quanti / quante", zh: "多少（阳/阴复）", note: "quante persone" },
        { it: "conoscere", zh: "认识/熟悉", note: "conoscete 你们熟悉" }
      ],
      grammarTables: [{
        title: "第三单元疑问词",
        headers: ["疑问词", "意思", "例句"],
        rows: [
          ["(che) cosa", "什么", "Che cosa avete oggi?"],
          ["quale / quali", "哪个/哪些", "Quali piatti conoscete?"],
          ["quanti / quante", "多少", "Per quante persone?"]
        ],
        note: "quale/quanti 要与被问名词的性数一致。"
      }],
      examples: [
        { it: "Che cosa avete oggi?", zh: "你们今天有什么？" },
        { it: "Quali piatti conoscete?", zh: "你们熟悉哪些菜？" },
        { it: "Certo. Per quante persone?", zh: "当然。几位？" }
      ],
      steps: "点餐场景三问：①问今天有什么 → Che cosa avete oggi?；②问有哪些菜 → Quali piatti…?；③订位问几位 → Per quante persone?。注意 quante 要和阴性复数 persone 一致。",
      commonMistakes: [
        { wrong: "“Per quanto persone?”", right: "“Per quante persone?”", why: "persone 是阴性复数，要用阴性 quante，不是 quanto。" }
      ],
      summary: [
        "che cosa=什么；quale/quali=哪个/哪些；quanti/quante=多少。",
        "疑问词在动词前或介词后。",
        "quante 与阴性复数（persone）搭配。"
      ],
      miniPractice: [
        { q: "订位时问“几位？”应说：", options: ["Per quante persone?", "Per quanto persone?", "Che persone?"], answer: "Per quante persone?", explain: "persone 阴性复数，用 quante。" },
        { q: "“你们今天有什么？”=", options: ["Che cosa avete oggi?", "Quale avete oggi?", "Dove avete oggi?"], answer: "Che cosa avete oggi?", explain: "问“什么”用 che cosa。" }
      ]
    },
    {
      id: "U3-T10", title: "餐饮场所的类型", titleIt: "I tipi di locali", importance: "supporting",
      knowledge: "课本第46页（caffè culturale）介绍意大利各种吃喝场所的区别。了解它们有助于理解文化背景和选择合适的餐厅。",
      rules: [
        "Ristorante（餐厅）：吃完整一顿饭（primo, secondo, contorno…）的地方。",
        "Trattoria（家庭餐馆）：和 ristorante 类似，但环境更简单朴素。",
        "Pizzeria（披萨店）：专门吃披萨的地方。",
        "Bar（咖啡吧）：吃早餐、喝咖啡或快速吃喝的地方（站着通常更快）。",
        "Gelateria（冰淇淋店）：买 gelato 的地方。",
        "Chiosco（露天小摊）：露天小空间，快速买三明治或披萨。",
        "Rosticceria（熟食店）：经济实惠，买现成的热食。"
      ],
      vocabulary: [
        { it: "il ristorante", zh: "餐厅（正餐）", note: "" },
        { it: "la trattoria", zh: "家庭餐馆", note: "环境更简单" },
        { it: "la pizzeria", zh: "披萨店", note: "" },
        { it: "il bar", zh: "咖啡吧", note: "早餐/咖啡" },
        { it: "la gelateria", zh: "冰淇淋店", note: "" },
        { it: "il chiosco", zh: "露天小摊", note: "" },
        { it: "la rosticceria", zh: "熟食店", note: "现成热食" }
      ],
      grammarTables: [{
        title: "各类餐饮场所",
        headers: ["场所", "特点"],
        rows: [
          ["ristorante", "吃完整一顿饭"],
          ["trattoria", "类似餐厅但更简单"],
          ["pizzeria", "专吃披萨"],
          ["bar", "早餐/咖啡，快速"],
          ["gelateria", "买冰淇淋"],
          ["chiosco", "露天小摊，快速"],
          ["rosticceria", "经济、现成热食"]
        ],
        note: "常见混合型：ristorante-pizzeria 等。"
      }],
      examples: [
        { it: "Trattoria: come il ristorante, ma l'ambiente è più semplice.", zh: "家庭餐馆：和餐厅一样，但环境更简单。" },
        { it: "Bar: per fare colazione, prendere un caffè o qualcosa in pochi minuti.", zh: "咖啡吧：吃早餐、喝咖啡或快速吃点东西。" }
      ],
      steps: "根据需求选场所：想吃正餐→ristorante/trattoria；只想吃披萨→pizzeria；快速喝咖啡早餐→bar；吃冰淇淋→gelateria；买现成热食→rosticceria。",
      commonMistakes: [
        { wrong: "以为 bar 是“酒吧（晚上喝酒）”", right: "意大利的 bar 主要是白天喝咖啡、吃早餐的地方", why: "文化差异：意大利 bar 以咖啡和早餐为主，并非夜店。" }
      ],
      summary: [
        "ristorante=正餐；trattoria=简朴餐馆；pizzeria=披萨店。",
        "bar=咖啡/早餐；gelateria=冰淇淋；chiosco=小摊；rosticceria=熟食。"
      ],
      miniPractice: [
        { q: "想吃冰淇淋应去：", options: ["la gelateria", "la rosticceria", "il chiosco"], answer: "la gelateria", explain: "gelateria 是冰淇淋店。" },
        { q: "想快速喝杯咖啡、吃早餐应去：", options: ["il bar", "il ristorante", "la pizzeria"], answer: "il bar", explain: "bar 是快速吃喝、喝咖啡、吃早餐的地方。" }
      ]
    },
    {
      id: "U3-T11", title: "发音 ci/gi 与意大利餐桌文化", titleIt: "Pronuncia e cultura", importance: "supporting",
      knowledge: "第三单元再次巩固 ci（[tʃ]）和 gi（[dʒ]）的发音对比，并给出几条重要的意大利用餐文化提示，帮助你在真实场景中得体应对。",
      rules: [
        "发音对比（第162页）：tʃ（ci）— mancia, per piacere, amici, ghiaccio, cappuccino, cucina；dʒ（gi）— mangiare, gelato, Gigi, giorno, Luigi, cugina。",
        "文化提示1：午饭后点咖啡（caffè），不要点 cappuccino（卡布奇诺一般只在早餐喝）。",
        "文化提示2：付账时意大利人常“alla romana”——即把账单平分。",
        "文化提示3：小费（la mancia）不是必须的；如果愿意，可以在离开前在桌上留一点。"
      ],
      vocabulary: [
        { it: "ci [tʃ] / gi [dʒ]", zh: "恰 / 吉", note: "发音对比" },
        { it: "la mancia", zh: "小费", note: "非必须" },
        { it: "all'romana", zh: "罗马式（平分账单）", note: "" },
        { it: "il conto", zh: "账单", note: "" }
      ],
      grammarTables: [{
        title: "ci vs gi 发音对比",
        headers: ["tʃ（ci）", "dʒ（gi）"],
        rows: [["mancia", "mangiare"], ["per piacere", "gelato"], ["amici", "Gigi"], ["ghiaccio", "giorno"], ["cappuccino", "Luigi"], ["cucina", "cugina"]],
        note: "注意 ghiaccio 的 gh 保持 [g]，与 giorno 的 gi [dʒ] 不同。"
      }],
      examples: [
        { it: "Dopo pranzo ordinate un caffè, non un cappuccino.", zh: "午饭后点咖啡，不要点卡布奇诺。" },
        { it: "Per pagare il conto gli italiani fanno all'romana: dividono il conto in parti uguali.", zh: "结账时意大利人实行“罗马式”：把账单平分。" }
      ],
      steps: "发音上重点分辨 ci（恰）和 gi（吉），多读对比词。文化上记住三条：①午餐后喝 caffè 不喝 cappuccino；②付账常平分（alla romana）；③小费非必须，愿意可留一点。",
      commonMistakes: [
        { wrong: "午饭后点 cappuccino", right: "午饭后点 caffè", why: "文化习惯：卡布奇诺一般早餐喝；午饭后喝咖啡（caffè）。" }
      ],
      summary: [
        "分清 ci[ tʃ ] 和 gi[ dʒ ]。",
        "午餐后喝 caffè 不喝 cappuccino。",
        "付账常平分（alla romana）；小费非必须。"
      ],
      miniPractice: [
        { q: "单词 “mangiare”（吃）中的 gi 读：", options: ["[dʒ]（吉）", "[tʃ]（恰）", "[g]（硬音）"], answer: "[dʒ]（吉）", explain: "gi 在 e/i 前读软音 [dʒ]。" },
        { q: "关于意大利餐桌文化，正确的是：", options: ["午饭后常点 caffè", "午饭后常点 cappuccino", "小费是强制的"], answer: "午饭后常点 caffè", explain: "文化点：午饭后点 caffè；cappuccino 多在早餐；小费非必须。" }
      ]
    }
  ]
});
