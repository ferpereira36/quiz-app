export type QuizCardProps = {
  question: string
  options: string[]
  correctAnswer: string
  verifiedAnswer: (isCorrect: boolean) => void
}
