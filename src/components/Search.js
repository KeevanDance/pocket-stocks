import React from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'
import { human, material, robotoWeights, sanFranciscoWeights } from 'react-native-typography'


class Search extends React.Component {

  state = {
    focused: false,
  }

  handleInputFocus = () => {
    this.setState((prevState) => ({
      focused: !prevState.focused
    }))
  }

  handleTextInput = (text) => {
    this.props.handleTextInput(text)
  }

  render() {
    const focused = this.state.focused
    const searchText = this.props.searchText
    return (
      <View style={styles.container}>
        <View style={[styles.wrapper, focused ? styles.purple : styles.white]}>
          <EvilIcons
            style={styles.icon}
            name="search"
            size={28}
            color={focused ? '#9B51E0' : 'white'}
          />
          <TextInput
            style={[styles.searchText, Platform.OS === 'android' ? styles.androidText : styles.iosText]}
            placeholder={focused ? "" : "Company..." }
            placeholderTextColor="white"
            maxLength={12}
            value={searchText}
            selectionColor="white"
            underlineColorAndroid="transparent"
            onFocus={this.handleInputFocus}
            onEndEditing={this.handleInputFocus}
            onChangeText={(text) => this.handleTextInput(text)}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    margin: 20,
  },
  wrapper: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  white: {
    borderBottomWidth: 0.8,
    borderBottomColor: 'white',
  },
  purple: {
    borderBottomWidth: 1,
    borderBottomColor: '#9B51E0'
  },
  icon: {
    marginBottom: 5,
    flex: 0.1,
  },
  searchText: {
    flex: 0.8,
    textAlign: 'center',
    fontSize: 48,
  },
  iosText: {
    ...human.largeTitleWhiteObject,
    ...sanFranciscoWeights.thin,
  },
  androidText: {
    ...material.display4WhiteObject,
    ...robotoWeights.thin,
  }
})

export default Search