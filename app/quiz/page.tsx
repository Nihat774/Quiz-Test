import QuizPage from "@/components/QuizPage"
import { Suspense } from "react"

export default function QuizPageWrapper() {
  return (
    <Suspense fallback={<div>Yüklənir...</div>}>
      <QuizPage />
    </Suspense>
  )
}
