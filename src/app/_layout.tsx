import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import 'react-native-reanimated'
import '../../global.css'

import { Platform, View, Text, Alert } from 'react-native'
import React from 'react'

export {
  // Capturando erros na inicialização do expo router
  ErrorBoundary,
} from 'expo-router'

export const unstableSettings = {
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    //
  })

  if (error) {
    Alert.alert('Lamentamos, mas no momento estamos com instabilidade.')
  }

  if (!loaded && !error) {
    SplashScreen.hideAsync()
    return (
      <View className="justify-center items-center bg-black w-full h-full">
        <Text className="text-white">Carregando...</Text>
      </View>
    )
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          statusBarStyle: Platform.OS === 'android' ? 'light' : undefined,
          statusBarColor:
            Platform.OS === 'android' ? `bg-purple-600` : undefined,
        }}
      />
      <Stack.Screen
        name="QuizScreen"
        options={{
          headerShown: false,
          statusBarStyle: Platform.OS === 'android' ? 'light' : undefined,
          statusBarColor:
            Platform.OS === 'android' ? `bg-purple-600` : undefined,
        }}
      />
      <Stack.Screen
        name="GameOver"
        options={{
          headerShown: false,
          statusBarStyle: Platform.OS === 'android' ? 'light' : undefined,
          statusBarColor:
            Platform.OS === 'android' ? `bg-purple-600` : undefined,
        }}
      />
    </Stack>
  )
}
