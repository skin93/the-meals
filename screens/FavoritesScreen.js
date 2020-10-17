import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/header/CustomHeaderButton'
import { useSelector } from 'react-redux'

import MealList from '../components/meals/MealList'
import { StyleSheet, View } from 'react-native'
import BaseText from '../components/UI/BaseText'

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals)

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <BaseText>No favorite meals found. Start adding some</BaseText>
      </View>
    )
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
