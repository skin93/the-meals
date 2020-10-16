import React from 'react'
import { StyleSheet, Text, View, Switch, Platform } from 'react-native'

import Colors from '../../constants/Colors'

const BaseFilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  )
}

export default BaseFilterSwitch

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
})
