import React from 'react'
import { useSelector } from 'react-redux'

import MealList from '../components/meals/MealList'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId')

  const availableMeals = useSelector((state) => state.meals.filteredMeals)

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  )

  return <MealList listData={displayedMeals} navigation={props.navigation} />
}

export default CategoryMealsScreen

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId)

  return {
    headerTitle: selectedCategory.title,
  }
}
