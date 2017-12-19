import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'


export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})