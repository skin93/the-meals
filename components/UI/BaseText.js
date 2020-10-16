import React from 'react'
import { StyleSheet, Text } from 'react-native'

const BaseText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>
}

export default BaseText

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
})
