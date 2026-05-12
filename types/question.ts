export type Difficulty = "easy" | "medium" | "hard"

export type QuestionType = {
  id: number
  question: string
  options: string[]
  correctAnswer: string
  difficulty: Difficulty
}