import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/header/CustomHeaderButton'

import { MEALS } from '../data/dummy-data'

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId')

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
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

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId')
  const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => {
            console.log('Mark as favorite')
          }}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
