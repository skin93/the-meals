import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/header/CustomHeaderButton'
import BaseText from '../components/UI/BaseText'
import BaseListItem from '../components/UI/BaseListItem'

import { MEALS } from '../data/dummy-data'

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId')

  const selectedMeal = MEALS.find((meal) => meal.id === mealId)
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <BaseText>{selectedMeal.duration}m</BaseText>
        <BaseText>{selectedMeal.complexity.toUpperCase()}</BaseText>
        <BaseText>{selectedMeal.affordability.toUpperCase()}</BaseText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <BaseListItem key={ingredient}>{ingredient}</BaseListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <BaseListItem key={step}>{step}</BaseListItem>
      ))}
    </ScrollView>
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
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
  },
})
