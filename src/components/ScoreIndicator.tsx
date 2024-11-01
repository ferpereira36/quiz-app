import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type Props = {
  score: number
}

export function ScoreIndicator({ score }: Props) {
  return (
    <View className="flex-row">
      <Ionicons name="trophy" size={24} color={'orange'} />
      <Text className="text-xl ml-2">{score}</Text>
    </View>
  )
}
