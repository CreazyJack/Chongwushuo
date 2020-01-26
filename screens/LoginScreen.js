import React, { PureComponent } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { theme } from '../constants'
import CountDown from 'react-native-zycountdown'
import { login } from '../redux/actions/user'
import { Toast } from '../Components'


const { colors, width, height } = theme
class LoginScreen extends PureComponent {
  constructor() {
    super()
    this.state = {
      phoneNum: null,
      verificationCode: null,
    }
  }
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>使用手机号登录</Text>
          </View>
          <View style={styles.logBox}>
            <View style={styles.firstList}>
              <TextInput
                style={styles.firstListText}
                placeholder='您的手机号'
                onChangeText={value => this.setState({ phoneNum: value })}
                defaultValue={this.state.phoneNum}
                maxLength={11}
                keyboardType='phone-pad'
              />
            </View>
            <View style={styles.secondList}>
              <TextInput
                style={styles.secondListText}
                placeholder='请输入验证码'
                onChangeText={value => this.setState({ verificationCode: value })}
                defaultValue={this.state.verificationCode}
                maxLength={4}
                keyboardType='phone-pad'
              />
              <CountDown
                style={styles.countDown}
                onClick={() => true}
                title='发送验证码'
                frontText='请等待'
              />
            </View>
            <TouchableOpacity
              style={{
                marginTop: 20,
                justifyContent: "center",
                alignItems: 'center',
                backgroundColor: theme.colors.primary,
                width: theme.width * 0.5,
                height: 40,
                borderRadius: 20
              }}
              onPress={this.loginButton}
            >
              <Text
                style={{
                  color: theme.colors.white
                }}
              >登录</Text>
            </TouchableOpacity>
          </View>
          <Toast
            style={{
              width: this.props.user.messageWidth,
              height: this.props.user.messageHeight,
              backgroundColor: colors.white,
              bottom: 100,
              color: colors.primary,
              borderColor: colors.primary,
              borderWidth: 1
            }}
            toastContent={this.props.user.suc}
          />
        </View>
    )
  }

  //   loginButton = () => {
  //     console.log('ok')
  //   }
  // }
  loginButton = () => {
    if (this.state.phoneNum === null || this.state.verificationCode === null) {
      Alert.alert('手机号或验证码不能为空！')
      return
    }
    Keyboard.dismiss()
    this.props.login(setTimeout(() => {
      this.props.navigation.navigate('HomeScreen')
      this.setState({
        phoneNum: null,
        verificationCode: null
      })
    }, 2000))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: theme.colors.primary,
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  headerText: {
    color: theme.colors.white,
    fontSize: theme.sizes.h3,
    marginBottom: 10
  },
  logBox: {
    flex: 1,
    width: theme.width,
    height: 200,
    paddingTop: 80,
    alignItems: 'center'
  },
  firstList: {
    height: 40,
    width: theme.width * 0.7,
    alignSelf: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 20,
    borderColor: theme.colors.primary
  },
  firstListText: {
    height: 40,
    // width: theme.width * 0.5 - 50,
    color: theme.colors.primary
  },
  secondList: {
    height: 40,
    width: theme.width * 0.7,
    alignSelf: 'center',
    borderWidth: 1,
    paddingLeft: 10,
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 20,
    borderColor: theme.colors.primary
  },
  secondListText: {
    height: 40,
    // width: theme.width * 0.5 - 50,
    color: theme.colors.primary,
    flex: 1
  },
  countDown: {
    height: 38,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    right: -2,
    bottom: 0,
    backgroundColor: theme.colors.primary
  },
})

const mapState = ({ user }) => ({ user })

export default connect(mapState, { login })(LoginScreen)