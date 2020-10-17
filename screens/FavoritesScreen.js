import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/header/CustomHeaderButton'
import { useSelector } from 'react-redux'

import MealList from '../components/meals/MealList'

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals)

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
