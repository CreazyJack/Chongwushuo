import React, { PureComponent } from 'react'
import UnLogin from './Navigation/AppNav'
import { DeviceEventEmitter } from 'react-native'
export default class Main extends PureComponent {
  state = {
    color: '#ff7675'
  }
  render() {
    return (
      < UnLogin color={this.state.color} />
    )
  }
  componentDidMount() {
    DeviceEventEmitter.addListener('theme_change', params => {
      this.setState({
        color: params
      })
    })
  }
}
