import { View, Text, Pressable } from 'react-native'
import { useState } from 'react'
import { QuizCardProps } from '@/types/QuizCardProps'

export function QuizCard({
  question,
  options,
  correctAnswer,
  verifiedAnswer,
}: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null)

  function handleSubmit() {
    if (selected === null) return
    const isCorrect = selected === correctAnswer
    verifiedAnswer(isCorrect)
  }

  return (
    <View className="p-4 bg-white rounded-lg shadow-sm">
      <Text className="text-xl font-bold text-gray-800 mb-4">{question}</Text>

      <View className="space-y-3">
        {options.map((answer, index) => (
          <Pressable
            key={index}
            onPress={() => setSelected(answer)}
            className={`p-4 rounded-lg border-2 ${
              selected === answer
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            <Text
              className={`text-lg ${
                selected === answer ? 'text-blue-700' : 'text-gray-700'
              }`}
            >
              {answer}
            </Text>
          </Pressable>
        ))}
      </View>

      <Pressable
        onPress={handleSubmit}
        disabled={selected === null}
        className={`mt-6 p-4 rounded-lg items-center ${
          selected === null ? 'bg-gray-300' : 'bg-blue-500'
        }`}
      >
        <Text className="text-white font-bold text-lg">Confirmar Resposta</Text>
      </Pressable>
    </View>
  )
}
