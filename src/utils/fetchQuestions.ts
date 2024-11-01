import { getQuestionsBR } from '@/services/api/quizServiceBR'

export const fetchQuestions = async (category: number, difficulty: string) => {
  return await getQuestionsBR(10, category, difficulty)
}
