import { router } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function GameOver() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center p-4">
        <Text className="text-2xl font-bold text-red-500 mb-4">Game Over!</Text>
        <Text
          onPress={() => router.replace('/')}
          className="text-blue-500 text-lg font-semibold"
        >
          Voltar ao Menu Inicial
        </Text>
      </View>
    </SafeAreaView>
  )
}
