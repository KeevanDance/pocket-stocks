import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// components
import Search from '../components/Search'


class HomeContainer extends React.Component {
  state = {
    searchText: undefined
  }

  handleTextInput = (text) => {
    this.setState({
      searchText: text,
    })
    console.log(text)
  }

  render() {
    return (
      <View style={styles.container}>
        <Search
          searchText={this.state.searchText}
          handleTextInput={this.handleTextInput}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default HomeContainer