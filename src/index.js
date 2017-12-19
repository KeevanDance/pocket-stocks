import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

// navigation
import Navigation from './router'


export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Navigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})