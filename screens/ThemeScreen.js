import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import {
  gray,
  fadedPoster,
  secondary,
  pinkGlamour
} from '../redux/actions/theme'
import { theme } from '../constants'
import { Ionicons, AntDesign, Feather } from "react-native-vector-icons"

class ThemeScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        {/* 头部 */}
        <View style={{ ...styles.header, backgroundColor: this.props.theme.color }} >
          <TouchableOpacity
            style={{ position: 'absolute', left: 10, bottom: 10, width: 30, }}
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          >
            <Ionicons
              name='ios-arrow-back'
              size={25}
              color={theme.colors.white}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: theme.sizes.h3, color: theme.colors.white, marginBottom: 10 }}>点击换肤</Text>
        </View>
        {/* 内容 */}
        <TouchableOpacity
          style={{ ...styles.container, backgroundColor: theme.colors.gray }}
          // onPress={this.props.gray}
          onPress={() => {
            this.props.navigation.setParams({ color: '#fd79a8' })
            console.log(this.props.navigation.getParam('color'))
          }}
        >
          <Text style={{ color: theme.colors.white }}> gray </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.container, backgroundColor: theme.colors.primary }}
          onPress={this.props.fadedPoster}
        >
          <Text style={{ color: theme.colors.white }}> fadedPoster </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.container, backgroundColor: theme.colors.secondary }}
          onPress={this.props.secondary}
        >
          <Text style={{ color: theme.colors.white }}> secondary </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.container, backgroundColor: theme.colors.pinkGlamour }}
          onPress={this.props.pinkGlamour}
        >
          <Text style={{ color: theme.colors.white }}> 默认 </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.width
  },
  header: {
    width: theme.width,
    height: 65,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: theme.colors.pinkGlamour
  }
})

const mapState = ({ theme }) => ({ theme })
export default connect(mapState, {
  gray,
  fadedPoster,
  secondary,
  pinkGlamour
})(ThemeScreen)