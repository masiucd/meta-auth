import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class CaraousellTwo extends Component {
  scrollRef = this.cre
  constructor(props: any) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }
  render() {
    return (
      <View>
        <Text>hello</Text>
      </View>
    )
  }
}
