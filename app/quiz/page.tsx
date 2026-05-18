import Loading from "@/components/Loading"
import QuizPage from "@/components/QuizPage"
import { Suspense } from "react"

export default function QuizPageWrapper() {
  return (
    <Suspense fallback={<Loading />}>
      <QuizPage />
    </Suspense>
  )
}
