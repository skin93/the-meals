import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'

const MealDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Meal Details Screen</Text>
      <Button
        title='Go Back to Categories'
        onPress
        onPress={() => {
          props.navigation.popToTop()
        }}
      />
    </View>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
