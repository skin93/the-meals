import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import MealList from '../components/meals/MealList'
import BaseText from '../components/UI/BaseText'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId')

  const availableMeals = useSelector((state) => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  )

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.content}>
        <BaseText>No meals found. Maybe check your filters?</BaseText>
      </View>
    )
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

  return {
    headerTitle: selectedCategory.title,
  }
}
