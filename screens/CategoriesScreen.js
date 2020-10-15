import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button
        title='Go to Meals'
        onPress={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
          })
        }}
      />
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})