import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ActivityIndicator } from 'react-native'
import { QuizCard } from '@/components/QuizCard'
import { Question } from '@/types/Question'
import { LifeIndicator } from '@/components/LifeIndicator'
import { router } from 'expo-router'
import { getQuestionsBR } from '@/services/api/quizServiceBR'
import { ScoreIndicator } from '@/components/ScoreIndicator'

export default function QuizScreen() {
  const [score, setScore] = useState(0)
  const [life, setLife] = useState(3)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    const fetchQuestions = async () => {
      const quizQuestions = await getQuestionsBR(30, 9, 'easy')
      setQuestions(quizQuestions)
    }
    fetchQuestions()
  }, [])

  const handleResposta = useCallback(
    (isCorrect: boolean) => {
      if (!isCorrect) {
        const newLife = life - 1
        if (newLife === 0) {
          router.navigate('/GameOver')
        } else {
          setLife(newLife)
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
        }
      } else {
        setScore(score + 1)
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      }
    },
    [life, score],
  )

  if (questions.length === 0) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator size={32} />
        <Text>Carregando perguntas...</Text>
      </View>
    )
  }

  const moreQuestions = async () => {
    setLoading(true)
    const quizQuestions = await getQuestionsBR()
    setLoading(false)
    setQuestions(quizQuestions)
  }

  if (isLoading) {
    return (
      <View className="items-center justify-center flex-1 bg-sky-200">
        <ActivityIndicator size={32} />
        <Text>Preparando mais perguntas...</Text>
        <Text className="mt-12">Você está indo bem!</Text>
      </View>
    )
  }

  // Obtem mais perguntas se acabar
  if (currentQuestionIndex >= questions.length) {
    moreQuestions()
  }

  const currentQuestion = questions[currentQuestionIndex]

  if (!currentQuestion) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator size={32} />
        <Text>Preparando mais perguntas...</Text>
        <Text className="mt-12">Você está indo bem!</Text>
      </View>
    )
  }

  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ].sort()

  return (
    <SafeAreaView>
      <View className="p-4 flex-row w-full justify-between">
        <LifeIndicator life={life} />
        <ScoreIndicator score={score} />
      </View>
      <QuizCard
        question={currentQuestion.question}
        options={answers}
        correctAnswer={currentQuestion.correct_answer}
        verifiedAnswer={handleResposta}
      />
    </SafeAreaView>
  )
}
