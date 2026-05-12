"use client"

import { useSearchParams } from "next/navigation"
import { questions } from "@/data/questions"
import QuestionCard from "@/components/QuestionCard"
import AnswerButton from "@/components/AnswerButton"
import { useEffect, useState } from "react"
import { IoHomeSharp } from "react-icons/io5"
import Link from "next/link"
import { GrFormNext } from "react-icons/gr"
import { FaCheck } from "react-icons/fa"
import { MdOutlineClose } from "react-icons/md"

export default function QuizPage() {

  const searchParams = useSearchParams()
  const level = searchParams.get("level")

  const filteredQuestions = questions.filter(
    (q) => q.difficulty === level
  )

  // 🔥 10 random sual seç
  const [quizQuestions, setQuizQuestions] = useState<any[]>([])
  const [finished, setFinished] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [isAnswered, setIsAnswered] = useState(false)

  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)

  useEffect(() => {
    startQuiz()
  }, [])

  function startQuiz() {

    const shuffled = [...filteredQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10)

    setQuizQuestions(shuffled)

    setCurrentIndex(0)
    setCorrectCount(0)
    setWrongCount(0)
    setSelectedAnswer("")
    setIsAnswered(false)

    setFinished(false) // 🔥 VACİB
  }

  const currentQuestion = quizQuestions[currentIndex]

  function handleAnswer(option: string) {

    if (isAnswered) return

    setSelectedAnswer(option)
    setIsAnswered(true)

    if (option === currentQuestion.correctAnswer) {
      setCorrectCount(prev => prev + 1)
    } else {
      setWrongCount(prev => prev + 1)
    }

    // 🔥 BURADA CHECK ET
    const isLastQuestion = currentIndex + 1 >= quizQuestions.length

    if (isLastQuestion) {
      setTimeout(() => {
        setFinished(true)
      }, 600) // UX üçün qısa delay
    }
  }

  function nextQuestion() {

    setCurrentIndex(prev => prev + 1)
    setSelectedAnswer("")
    setIsAnswered(false)
  }

  // 🔥 QUIZ BITDİ
  if (finished) {
    return (
      <div className="min-h-screen flex items-center justify-center">

        <div className="text-center flex flex-col items-center">

          <h1 className="text-3xl font-bold mb-6">
            Quiz bitdi 🎉
          </h1>
          <div>
            <p>Allah Rəsulu(sallallahu aleyhi  və səlləm) belə buyurmuşdur: </p>
            <p className="font-semibold"> مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ</p>
            <p>"Allah kimin üçün xeyir dilərsə onu dində fəqih edər."</p>
          </div>

          <div className="mb-2 flex items-center gap-1">
            <FaCheck className="text-blue-500" />
            <p> Düz cavab: {correctCount}</p>
          </div>

          <div className="flex items-center gap-1 mb-6">
            <MdOutlineClose className="font-semibold text-xl text-red-500" />
            <p>Səhv cavab: {wrongCount}</p>
          </div>

          <button
            onClick={startQuiz}
            className="bg-green-600 cursor-pointer duration-300 hover:bg-green-500 text-white px-6 py-3 rounded-xl"
          >
            Yenidən başla
          </button>

        </div>

      </div>
    )
  }

  if (!currentQuestion) {
    return (
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <img className="h-[20%] w-[20%] object-cover" src="/Loading Downloading GIF.gif" alt="loading" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-5">

      <div className="w-full max-w-2xl">
        <Link href="/" className="flex items-center gap-2 my-9">
          <IoHomeSharp />
          <p>Ana səhifəyə qayıt</p>

        </Link>
        {/* TOP INFO */}
        <div className="flex justify-between mb-6 text-black">

          <p>
            Sual: {currentIndex + 1} / 10
          </p>

          <p>
            Düz: {correctCount} | Səhv: {wrongCount}
          </p>

        </div>

        {/* QUESTION */}
        <QuestionCard question={currentQuestion.question} />

        {/* ANSWERS */}
        <div className="space-y-4">

          {currentQuestion.options.map((option: string, i: number) => {

            let bg = "bg-gray-500 hover:bg-gray-600"

            if (isAnswered) {
              if (option === currentQuestion.correctAnswer) {
                bg = "bg-green-500"
              }
              else if (option === selectedAnswer) {
                bg = "bg-red-600"
              }
            }

            return (
              <AnswerButton
                key={i}
                text={option}
                onClick={() => handleAnswer(option)}
                className={bg}
              />
            )
          })}

        </div>

        {/* NEXT BUTTON */}
        {isAnswered && currentIndex < quizQuestions.length - 1 && (
          <button
            onClick={nextQuestion}
            className="mt-6 w-full flex items-center gap-2 justify-center cursor-pointer bg-sky-500 hover:bg-sky-600 duration-300 text-white py-3 rounded-xl"
          >
            <p>Növbəti sual</p>
            <GrFormNext className="text-xl" />

          </button>
        )}

      </div>

    </div>
  )
}