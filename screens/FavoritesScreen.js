import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/header/CustomHeaderButton'

import MealList from '../components/meals/MealList'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2')

  return <MealList listData={favMeals} navigation={props.navigation} />
}

export default FavoritesScreen

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}
