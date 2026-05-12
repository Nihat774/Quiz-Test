"use client"

import { useRouter } from "next/navigation"
import { FaRegSmile, FaRegMeh, FaRegFrown } from "react-icons/fa"

export default function Home() {
  const router = useRouter()

  function startQuiz(level: string) {
    router.push(`/quiz?level=${level}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-5">

      <div className="text-center">

        <h1 className="text-4xl font-bold mb-10">
          Fiqh Quiz
        </h1>

        <p className="text-gray-400 mb-10">
          Çətinlik səviyyəsini seç
        </p>

        <div className="space-y-4">

          <button
            onClick={() => startQuiz("easy")}
            className="flex items-center gap-3 text-white cursor-pointer bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-xl w-64 justify-center"
          >
            <FaRegSmile />
            Asan
          </button>

          <button
            onClick={() => startQuiz("medium")}
            className="flex text-white items-center cursor-pointer gap-3 bg-yellow-600 hover:bg-yellow-700 transition px-6 py-3 rounded-xl w-64 justify-center"
          >
            <FaRegMeh />
            Orta
          </button>

          <button
            onClick={() => startQuiz("hard")}
            className="flex items-center text-white cursor-pointer gap-3 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-xl w-64 justify-center"
          >
            <FaRegFrown />
            Çətin
          </button>

        </div>

      </div>

    </div>
  )
}