import React, { Component } from 'react'
import { Text, StyleSheet, View, Animated, TouchableOpacity, TouchableHighlight } from 'react-native'
import { AntDesign, Feather } from "react-native-vector-icons"
import { theme } from '../constants'
import { connect } from 'react-redux'


const { colors, width, height, sizes } = theme

class HandleVideoScreen extends Component {
  constructor() {
    super()
    this.state = {
      fontSize: new Animated.Value(15),
      likeColor: new Animated.Value('red'),
      animating: false,
    }
  }
  render() {
    return (
      <View style={styles.container}>

        {/* 导航 */}
        <View style={{ ...styles.header, backgroundColor: this.props.theme.color }}>
          <TouchableOpacity
            style={{
              borderRadius: 50,
              left: 4,
              width: 27,
              height: 27,
              justifyContent: 'center',
              position: 'absolute',
              bottom: 8
            }}
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Feather name='menu' size={25} color={colors.white} />
          </TouchableOpacity>
          <Text style={{ fontSize: sizes.h3, color: colors.white, marginBottom: 10 }}>录制视频</Text>
        </View>

        {/* 内容 */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: theme.width,
    height: 65,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})


const mapState = ({ theme }) => ({ theme })
export default connect(mapState)(HandleVideoScreen)