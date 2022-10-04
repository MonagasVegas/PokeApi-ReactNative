import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreen from '../screens/Favorite'
import Pokemon from '../screens/Pokemon'

const Stack = createStackNavigator()

export default function FavoriteNavigation () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Favorite'
        component={FavoriteScreen}
        options={{ title: 'Favoritos' }}
      />
      <Stack.Screen
        name='Pokemon'
        component={Pokemon}
        options={{ title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  )
}
