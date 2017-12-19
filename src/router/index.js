import React from 'react'
import { Platform, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'

import Home from '../pages/Home'

const Navigation = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Pocket Stocks',
      headerTitleStyle: { color: 'white' },
      headerStyle: { backgroundColor: 'black', marginTop: (Platform.OS === 'android') ? Contants.statusBarHeight : 0 },
    }
  }
})

export default Navigation