import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class Toast extends PureComponent {
  render() {
    return (
      <View
        style={{
          ...this.props.style,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          alignSelf: 'center'
        }}
      >
        <Text
          style={{
            color: this.props.style.color,
            position: 'absolute',
            fontSize: 12,
            lineHeight: this.props.style.height,
            height: this.props.style.height
          }}
        > {this.props.toastContent} </Text>
      </View>
    )
  }
}
