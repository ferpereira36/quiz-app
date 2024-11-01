import axios from 'axios'
import { API_TOKEN } from '@env'

export const getQuestionsBR = async (
  amount: number = 10,
  category?: number,
  difficulty?: string,
) => {
  try {
    const categoryParam = category ? `&category=${category}` : ''
    const difficultyParam = difficulty ? `&difficulty=${difficulty}` : ''
    const tokenParam = `&token=${API_TOKEN}`
    const response = await axios.get(
      `https://tryvia.ptr.red/api.php?amount=${amount}${categoryParam}&type=multiple${difficultyParam}${tokenParam}`,
    )
    return response.data.results
  } catch (error) {
    console.error('Erro ao buscar perguntas:', error)
    return []
  }
}
