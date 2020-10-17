import React, { useEffect, useCallback } from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/header/CustomHeaderButton'
import BaseText from '../components/UI/BaseText'
import BaseListItem from '../components/UI/BaseListItem'

import { toggleFavorite } from '../store/actions/meals'

const MealDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals)

  const mealId = props.navigation.getParam('mealId')

  const currentMealsIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  )

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId)

  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId))
  }, [dispatch, mealId])

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealsIsFavorite })
  }, [currentMealsIsFavorite])

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
  // const mealId = navigationData.navigation.getParam('mealId')

  const mealTitle = navigationData.navigation.getParam('mealTitle')

  const toggleFavorite = navigationData.navigation.getParam('toggleFav')

  const isFavorite = navigationData.navigation.getParam('isFav')

  // const selectedMeal = MEALS.find((meal) => meal.id === mealId)

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
          onPress={toggleFavorite}
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
