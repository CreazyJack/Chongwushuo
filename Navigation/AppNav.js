import React, { Component } from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { SettingScreen, ThemeScreen, ContactUsScreen, LoginScreen, HomeScreen, HandleVideoScreen, PlayVideoScreen } from '../screens'
import { Ionicons, Feather } from "react-native-vector-icons"
import { SideContent } from '../Components'
import { createAppContainer } from 'react-navigation'
import { connect } from 'react-redux'

class AppNav extends Component {
  render() {
    const Home = createStackNavigator(
      {
        HomeScreen: {
          screen: HomeScreen,
          navigationOptions: {
            header: null
          }
        }
      },
    )

    const HandleVideo = createStackNavigator(
      {
        HandleVideo: {
          screen: HandleVideoScreen,
          navigationOptions: {
            header: null
          }
        },
      }
    )

    const BottomTab = createBottomTabNavigator(
      // RouteConfigs
      {
        home: {
          screen: Home,
          navigationOptions: {
            title: '首页',
            tabBarIcon: ({ focused, tintColor }) => <Ionicons name="ios-home" size={22} color={tintColor} />
          }
        },
        handleVideo: {
          screen: HandleVideo,
          navigationOptions: {
            title: '视频处理',
            tabBarIcon: ({ focused, tintColor }) => <Feather name="video" size={22} color={tintColor} />
          },
        },
      },
      // TabNavigatorConfig
      {
        initialRouteName: 'home',
        tabBarOptions: {
          activeTintColor: this.props.theme.color,
          showLabel: false,
          style: {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            paddingHorizontal: 30
          },
        }
      }
    )

    const HomeDrawer = createDrawerNavigator(
      // RouteConfigs
      {
        HomeScreen: BottomTab,
      },
      // TabNavigatorConfig
      {
        drawerType: 'front',
        contentComponent: ({ navigation }) => (
          <SideContent navigation={navigation} />
        )
      }
    )

    const appNav = createStackNavigator(
      {
        HomeScreen: {
          screen: HomeDrawer,
          navigationOptions: {
            header: null
          }
        },
        LoginScreen: {
          screen: LoginScreen,
          navigationOptions: {
            header: null
          }
        },
        SettingScreen: {
          screen: SettingScreen,
          navigationOptions: {
            header: null
          }
        },
        ThemeScreen: {
          screen: ThemeScreen,
          navigationOptions: {
            header: null
          }
        },
        ContactUsScreen: {
          screen: ContactUsScreen,
          navigationOptions: {
            header: null
          }
        },
        PlayVideoScreen: {
          screen: PlayVideoScreen,
          navigationOptions: {
            header: null
          }
        },
      },
      {
        initialRouteName: 'LoginScreen'
      },
    )

    const AppNav = createAppContainer(appNav)
    return <AppNav />
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.theme.color !== this.props.theme.color){
  //     return false
  //   }
  // }
}

const mapState = ({ theme }) => ({ theme })
export default connect(mapState)(AppNav)