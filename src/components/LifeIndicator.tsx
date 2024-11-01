import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

type Props = {
  life: number
}

export function LifeIndicator({ life }: Props) {
  return (
    <View className="flex-row space-x-2">
      {[...Array(3)].map((_, index) => (
        <Ionicons
          key={index}
          name="heart"
          size={24}
          color={index < life ? '#ef4444' : '#d1d5db'}
        />
      ))}
    </View>
  )
}
