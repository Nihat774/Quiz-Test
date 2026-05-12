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
    question: "Niyyət harada edilir?",
    options: ["Qəlbdə", "Uca səslə", "Kağızda", "Yazılı şəkildə"],
    correctAnswer: "Qəlbdə",
    difficulty: "easy"
  },
  {
    id: 8,
    question: "Zəkat kimlərə verilir?",
    options: ["Zənginlərə", "18 yaşına çatmamış şəxslərə", "Qadınlara", "üç və daha çox uşağı olanlara"],
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
    options: ["Yatmaq", "Qan çıxması", "Asqırmaq", "Qadına toxunmaq"],
    correctAnswer: "Yatmaq",
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
    options: ["Yeməkdən sonra", "Cənabət halında", "Yuxudan sonra", "Gəzinti zamanı"],
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
    options: ["Gecə", "Günorta", "Axşam", "Həmişə"],
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
    question: "Vitir namazı neçə rükətdir?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3",
    difficulty: "easy"
  },
]
  // ---------------- DAVAM (21–50) ----------------