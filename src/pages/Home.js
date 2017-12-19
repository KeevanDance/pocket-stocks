import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Home = props => (
  <View style={styles.background}>
    <Text style={styles.white}>Hello, Home!</Text>
  </View>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  white: {
    color: 'white',
  }
})

export default Home