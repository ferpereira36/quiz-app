import { router } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function InitialScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 items-center justify-center p-4">
        <Text className="text-3xl font-bold text-blue-500 mb-8">Quiz Game</Text>
        <Text className="text-gray-600 text-center mb-12 text-lg">
          Teste seus conhecimentos e veja até onde você consegue chegar!
        </Text>

        <Pressable
          onPress={() => router.replace('/QuizScreen')}
          className="bg-blue-500 px-8 py-4 rounded-lg"
        >
          <Text className="text-white font-bold text-xl">Iniciar Jogo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
