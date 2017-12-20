import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// containers
import HomeContainer from '../containers/Home'


const Home = props => (
  <View style={styles.background}>
    <HomeContainer />
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