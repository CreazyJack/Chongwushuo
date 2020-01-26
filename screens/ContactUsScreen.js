import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Keyboard, Alert } from 'react-native'
import { connect } from 'react-redux'
import { theme } from '../constants'
import { Ionicons } from "react-native-vector-icons"
import { Toast } from '../Components'


class ContactUsScreen extends PureComponent {
  constructor() {
    super()
    this.state = {
      // 提交
      msgWidth: 0,
      msgHeight: 0,
      msg: '正在提交',
      bdWidth: 0,
      // 输入内容
      textContent: ''
    }
  }
  render() {
    const { color } = this.props.theme
    return (
      <View style={styles.container}>

        {/* 头部 */}
        <View style={{ ...styles.header, backgroundColor: this.props.theme.color }}>
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
          <Text style={{ fontSize: theme.sizes.h3, color: theme.colors.white, marginBottom: 10 }}>联系我们</Text>
        </View>

        {/* 内容 */}
        <Text style={{ marginTop: 30, marginLeft: 10 }}> 请输入您的问题或建议: </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: color,
            borderRadius: 20,
            width: theme.width * 0.7,
            height: 100,
            marginTop: 20,
            marginLeft: 20,
            paddingHorizontal: 10,
            lineHeight: 20,
            fontSize: 12
          }}
          multiline={true}
          maxLength={100}
          placeholder='不超过100字'
          onChangeText={text => this.setState({ textContent: text })}
        />
        <TouchableOpacity
          style={{
            width: 150,
            height: 30,
            marginTop: 50,
            alignSelf: 'center',
            backgroundColor: color,
            borderRadius: 10,
          }}
          onPress={this.submit}
        >
          <Text style={{ lineHeight: 30, alignSelf: 'center', color: 'white' }}>确定</Text>
        </TouchableOpacity>
        <Toast
          style={{
            width: this.state.msgWidth,
            height: this.state.msgHeight,
            backgroundColor: 'white',
            bottom: 100,
            color: color,
            borderColor: color,
            borderWidth: this.state.bdWidth
          }}
          toastContent={this.state.msg}
        />
      </View>
    )
  }



  submit = () => {
    if (!this.state.textContent) {
      Alert.alert('内容不能为空')
      return
    }
    Keyboard.dismiss()
    this.setState({
      msgWidth: 100,
      msgHeight: 30,
      msg: '正在提交',
      bdWidth: 1
    }, () => setTimeout(() => {
      this.setState({
        msg: '提交成功'
      }, () => setTimeout(() => {
        this.setState({
          msgWidth: 0,
          msgHeight: 0,
          msg: '',
          bdWidth: 0,
          textContent: ''
        }, () => {
          this.props.navigation.navigate('HomeScreen')
        })
      }, 1000))
    }, 1000))
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
    backgroundColor: theme.colors.pinkGlamour
  }
})

const mapState = ({ theme }) => ({ theme })

export default connect(mapState)(ContactUsScreen)