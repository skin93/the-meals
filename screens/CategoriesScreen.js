import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const renderGridItem = (itemData) => {
  return (
    <View style={styles.gridElement}>
      <Text>{itemData.item.title}</Text>
    </View>
  )
}

const CategoriesScreen = (props) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridElement: {
    flex: 1,
    margin: 15,
    height: 150,
  },
})
