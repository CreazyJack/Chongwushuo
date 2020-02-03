import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Keyboard, Alert, Image } from 'react-native'
import { connect } from 'react-redux'
import { theme } from '../constants'
import { Ionicons } from "react-native-vector-icons"
import { Toast } from '../Components'
import { changeAvatar } from '../redux/actions/user'
import * as ImagePicker from 'expo-image-picker'
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}
const { colors, width, height, sizes } = theme


class SettingScreen extends PureComponent {
  constructor() {
    super()
    this.state = {
      avatar: '',
      username: '',
      sex: '',
      phoneNum: null,
      messageWidth: 0,
      messageHeight: 0,
      borderWidth: 0,
      suc: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* 导航 */}
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
          <Text style={{ fontSize: sizes.h3, color: colors.white, marginBottom: 10 }}>个人设置</Text>
        </View>

        {/* 头像及头像图片展示 */}
        <View style={{ width: width, height: width * 9 / 16, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: this.state.avatar }}
            style={{ width: width, height: width * 9 / 16 }}
          />
          <TouchableOpacity
            style={{ width: 100, height: 100, justifyContent: 'center', alignItems: 'center', position: 'absolute' }}
            onPress={this._changeAvatar}
          >
            <Image
              source={{ uri: this.state.avatar }}
              style={{ width: 50, height: 50, borderRadius: 50, marginBottom: 5 }}
            />
            <Text style={{ fontSize: 12, color: 'white' }}>戳这里换头像</Text>
          </TouchableOpacity>
        </View>

        {/* 设置选项 */}
        <View style={{ width: width, paddingHorizontal: 70, marginTop: 30 }}>

          {/* 昵称 */}
          <View style={{ flexDirection: 'row', width: width, marginTop: 20 }}>
            <Text style={{ alignSelf: 'center', fontSize: 14 }}>昵称</Text>
            <TextInput
              style={styles.name}
              maxLength={8}
              onChangeText={value => this.setState({ username: value })}
            />
          </View>
          {/* 性别 */}
          <View style={{ flexDirection: 'row', width: width, marginTop: 20 }}>
            <Text style={{ alignSelf: 'center', fontSize: 14 }}>性别</Text>
            <RadioGroup
              onSelect={(index, value) => this.setState({ sex: value })}
              style={{ flexDirection: 'row', marginLeft: 20 }}
              color={this.props.theme.color}
            >
              <RadioButton value={'男'}>
                <Text>男</Text>
              </RadioButton>
              <RadioButton value={'女'}>
                <Text>女</Text>
              </RadioButton>
            </RadioGroup>
          </View>
          {/* 手机 */}
          <View style={{ flexDirection: 'row', width: width, marginTop: 20 }}>
            <Text style={{ alignSelf: 'center', fontSize: 14 }}>手机</Text>
            <TextInput
              style={styles.name}
              defaultValue={this.state.phoneNum}
              maxLength={11}
              keyboardType='phone-pad'
              onChangeText={value => this.setState({ phoneNum: value })}
            />
          </View>
        </View>
        {/* 保存按钮 */}
        <TouchableOpacity
          style={{ ...styles.submit, backgroundColor: this.props.theme.color, }}
          onPress={this._submit}
        >
          <Text style={{ alignSelf: 'center', fontSize: 14, lineHeight: 30, color: colors.white }}>保存</Text>
        </TouchableOpacity>
        <Toast
          style={{
            width: this.state.messageWidth,
            height: this.state.messageHeight,
            backgroundColor: colors.white,
            bottom: 50,
            color: this.props.theme.color,
            borderColor: this.props.theme.color,
            borderWidth: this.state.borderWidth
          }}
          toastContent={this.state.suc}
        />
      </View >
    )
  }

  _changeAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
    })
    console.log(result)
    if (!result.cancelled) {
      this.setState({ avatar: result.uri })
    }
  }
  _submit = () => {
    const { username, sex, avatar, phoneNum } = this.state
    console.log(username,sex,avatar,phoneNum)
    if (username && sex && phoneNum) {
      const userData = {
        name: this.state.username,
        sex: this.state.sex,
        avatar: this.state.avatar,
        phoneNum: this.state.phoneNum
      }
      Keyboard.dismiss()
      this.props.changeAvatar(userData)
      this.setState({
        messageWidth: 100,
        messageHeight: 40,
        suc: '正在保存',
        borderWidth: 1
      }, () => setTimeout(() => {
        this.setState({
          messageWidth: 100,
          messageHeight: 40,
          suc: '保存成功',
          borderWidth: 1
        }, () => setTimeout(() => {
          this.setState({
            messageWidth: 0,
            messageHeight: 0,
            suc: '',
            borderWidth: 0
          })
        }, 1000))
      }, 1000))
      return
    }
    Alert.alert('内容不能为空！')
  }

  UNSAFE_componentWillMount() {
    this.setState({
      avatar: this.props.user.userData.avatar,
      username: this.props.user.userData.name
    })
  }
  componentDidMount() {

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
  name: {
    width: 150,
    // lineHeight: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.gray,
    marginLeft: 30,
    paddingLeft: 10,
    fontSize: 14,
  },
  submit: {
    width: width * 0.5,
    marginTop: 60,
    alignSelf: 'center',
    borderRadius: 10,
    height: 30
  }
})

const mapState = ({ user, theme }) => ({ user, theme })
export default connect(mapState, { changeAvatar })(SettingScreen)