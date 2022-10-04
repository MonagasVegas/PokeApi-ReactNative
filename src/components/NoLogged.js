import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function NoLogged () {
  const navigation = useNavigation()
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver esta pantalla tienes que iniciar sesion
      </Text>
      <Button
        title='Ir al login'
        onPress={() => navigation.navigate('Account')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 60,
    paddingHorizontal: 50
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 15,
    fontWeight: 'bold'
  }
})
