import React from 'react'
import { StyleSheet, View } from 'react-native'
import BaseText from './BaseText'

const BaseListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <BaseText>{props.children}</BaseText>
    </View>
  )
}

export default BaseListItem

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
})
