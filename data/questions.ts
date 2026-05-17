import { QuestionType } from "@/types/question";

export const questions: QuestionType[] = [
  {
    id: 1,
    question: "Namazın vaciblərindən biridir?",
    options: ["Subhənəkə duası", "Rüku", "Təhiyyat", "Qiraət"],
    correctAnswer: "Təhiyyat",
    difficulty: "medium"
  },
  {
    id: 2,
    question: "Namazın vaciblərindən biridir?",
    options: ["Fatihə surəsini oxumaq", "Rüku", "Salli-Barik duası", "İftitah təkbiri"],
    correctAnswer: "Fatihə surəsini oxumaq",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "Fəqihin hökm çıxarma metodlarından biri hansıdır?",
    options: ["Qiyas", "Etiqad", "Üsulu-fiqh", "Hədis"],
    correctAnswer: "Qiyas",
    difficulty: "medium"
  },
  {
    id: 4,
    question: "İcma nə deməkdir?",
    options: ["Alimlərin razılığı", "Fərdi fikir", "Şübhə", "Qanun"],
    correctAnswer: "Alimlərin razılığı",
    difficulty: "medium"
  },
  {
    id: 5,
    question: "Qiyas nədir?",
    options: ["Yeni ibadət", "Oxşarlığa əsasən hökm çıxarma", "Şübhə etmək", "Namazın bir hissəsi"],
    correctAnswer: "Oxşarlığa əsasən hökm çıxarma",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Sünnə nədir?",
    options: [
      "Peyğəmbərin (s) etdiyi və tövsiyə etdiyi əməllər",
      "Yalnız fərz ibadətlər",
      "Qadağan olunmuş şeylər",
      "Qanun kitabı"
    ],
    correctAnswer: "Peyğəmbərin (s) etdiyi və tövsiyə etdiyi əməllər",
    difficulty: "easy"
  },
  {
    id: 7,
    question: "Niyyət fərzdir, deyərkən nə nəzərdə tutulur?",
    options: ["Qəlbdə niyyət etmək", "Dil ilə niyyət etmək", "Fərz deyil"],
    correctAnswer: "Qəlbdə niyyət etmək",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Zəkat kimlərə verilir?",
    options: ["Zənginlərə", "Kasıblara", "Yaxın qohumlara", "bütün müsəlmanlara"],
    correctAnswer: "Ehtiyacı olanlara",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "Təharət nədir?",
    options: ["Təmizlik", "Sədəqə vermək", "Nafilə namaz", "Dua etmək"],
    correctAnswer: "Təmizlik",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "Hədis nədir?",
    options: [
      "Peyğəmbərin (s) sözləri və əməlləri",
      "Allahın sözləri",
      "Alimlərin sözləri",
      "Səhabənin sözləri"
    ],
    correctAnswer: "Peyğəmbərin (s) sözləri və əməlləri",
    difficulty: "easy"
  },

  // ---------------- DESTE NAMAZ ----------------
  {
    id: 11,
    question: "Dəstəmazın fərzlərindən biri hansıdır?",
    options: ["Ağızı yaxalamaq", "Ayağa məsh etmək", "Üzü yumaq", "Başın bütün hissəsini məsh etmək"],
    correctAnswer: "Üzü yumaq",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "Dəstəmazı pozan hal hansıdır?",
    options: ["Yemək yemək", "Qan çıxması və yayılması", "Asqırmaq", "Qadına toxunmaq"],
    correctAnswer: "Qan çıxması və yayılması",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "Dəstəmazın sünnələrindən biridir?",
    options: ["Niyyət", "Ayaqları yumaq", "Başın 1/4 hissəsini məsh etmək", "Dəsnamaz alarkən danışmaq"],
    correctAnswer: "Niyyət",
    difficulty: "easy"
  },

  // ---------------- QÜSL ----------------
  {
    id: 14,
    question: "Qüsl nə zaman vacib olur?",
    options: ["Yeməkdən sonra", "Cənabət halında", "Yuxudan sonra", "Məzi gələrkən"],
    correctAnswer: "Cənabət halında",
    difficulty: "easy"
  },
  {
    id: 15,
    question: "Qüslün fərzlərindən biridir?",
    options: ["Bədəni tam yumaq", "Ardıcıllıq", "Əuzu-bəsmələ", "Niyyət"],
    correctAnswer: "Bədəni tam yumaq",
    difficulty: "easy"
  },

  // ---------------- ORUC ----------------
  {
    id: 16,
    question: "Orucu pozan hal hansıdır?",
    options: ["Sistem qoşmaq", "Unudaraq yemək", "Qan vermək", "İhtilam olmaq"],
    correctAnswer: "Sistem qoşmaq",
    difficulty: "medium"
  },
  {
    id: 17,
    question: "Orucun niyyəti nə vaxt edilir?",
    options: ["Gecə", "Günorta", "Sübhdən sonra"],
    correctAnswer: "Gecə",
    difficulty: "medium"
  },

  // ---------------- NAMAZ ----------------
  {
    id: 18,
    question: "Hansı namazın fərzlərindən biridir?",
    options: ["Rüku", "Subhənəkə", "Salli-Barik", "Dua"],
    correctAnswer: "Rüku",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "Hansı namazı pozan əməldir?",
    options: ["Gülmək", "Səcdə yerindən kənara baxmaq", "Subhənəkə duasını tərk etmək"],
    correctAnswer: "Gülmək",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "Vitr namazı neçə rükətdir?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3",
    difficulty: "easy"
  },
    {
    id: 21,
    question: "İmanın şərtlərindən biridir?",
    options: ["Kəlmeyi şəhadət gətirmək", "Axirətə inanmaq", "Oruc tutmaq", "Qüsl almaq"],
    correctAnswer: "Axirətə inanmaq",
    difficulty: "easy"
  },
    {
    id: 22,
    question: "Təyəmmüm nədir?",
    options: ["Torpaq,qum və ya tozla üz və əlləri məsh etmə əməlidir", "Nafilə namazdır", "Orucun bir növüdür"],
    correctAnswer: "Torpaq,qum və ya tozla üz və əlləri məsh etmə əməlidir",
    difficulty: "easy"
  },
    {
    id: 23,
    question: "Biri orucu pozan əməldir",
    options: ["Udqunmaq", "Söyüş söymək", "Dəsnamaz alarkən boğaza suyun getməsi"],
    correctAnswer: "3",
    difficulty: "hard"
  },
   {
    id: 24,
    question: "Səfəri məsafə nə qədərdir?",
    options: ["Təxmini 90km-lik məsafə", "15km-lik məsafə", "25km-lik məsafə"],
    correctAnswer: "Təxmini 90km-lik məsafə",
    difficulty: "hard"
  },
  {
    id: 25,
    question: "Biri məkruhdur?",
    options: ["Telefondan dəsnamazsız Quran oxumaq", "Sübh namazını gec qılmaq", "Yatsı namazını gecənin son 1/3-də qılmaq","Axşam namazının dəsnamazı ilə yatsı namazını qılmaq"],
    correctAnswer: "Təxmini 90km-lik məsafə",
    difficulty: "hard"
  }
]
  // ---------------- DAVAM (21–50) ----------------