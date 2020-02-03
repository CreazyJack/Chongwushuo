import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { theme } from '../constants'
import { loginFail } from '../redux/actions/user'

class SideContent extends PureComponent {
  constructor() {
    super()
  }
  render() {
    const userData = this.props.user.userData
    return (
      <View style={{ ...styles.container, backgroundColor: this.props.theme.color }}>
        {/* 用户信息 */}
        <View
          style={{
            marginBottom: 30,
            flexDirection: 'row'
          }}
        >
          <Image
            source={{ uri: userData.avatar }}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginLeft: 10,
              color: theme.colors.white
            }}
          >{userData.name + ','}你好!</Text>
        </View>
        {/* 功能列表 */}
        <FlatList
          data={sideListData}
          renderItem={({ item }) => <SideBox data={item} navigation={this.props.navigation} logOut={this.props.loginFail} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const sideListData = [
  {
    title: '换肤',
    route: 'ThemeScreen'
  },
  {
    title: '个人设置',
    route: 'SettingScreen'
  },
  {
    title: '使用反馈',
    route: 'ContactUsScreen'
  },
  {
    title: '退出登录',
    route: 'LoginScreen'
  },
]

const SideBox = ({ data, navigation, logOut }) => (
  <TouchableOpacity
    onPress={() => {
      if (data.route === 'LoginScreen') {
        logOut()
        navigation.navigate(data.route)
      }
      navigation.navigate(data.route)
    }}
    style={styles.sideBox}
  >
    <Text style={{ color: theme.colors.white }}>{data.title}</Text>
  </TouchableOpacity>
)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
  },
  sideBox: {
    paddingVertical: 10,
    marginLeft: 20,
  }
})

const mapState = ({ theme, user }) => ({ theme, user })
export default connect(mapState, { loginFail })(SideContent)