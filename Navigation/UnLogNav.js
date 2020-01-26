// import { createAppContainer } from 'react-navigation'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createStackNavigator } from 'react-navigation-stack'
// import { createDrawerNavigator } from 'react-navigation-drawer'
// import { HandleVideoScreen, HomeScreen, PlayVideoScreen, SettingScreen, ThemeScreen, ContactUsScreen, LoginScreen } from '../screens'
// import React from 'react'
// import { Ionicons, AntDesign, Feather } from "react-native-vector-icons"
// import { theme } from '../constants'
// import { Text, StyleSheet, View, TouchableHighlight, TouchableOpacity } from 'react-native'
// import react from 'react'
// import { SideContent } from '../Components'
// // 创建三个底部导航
// // 首页
// const home = createStackNavigator(
//   {
//     HomeScreen: {
//       screen: HomeScreen,
//       navigationOptions: ({ navigation }) => (
//         {
//           title: '宠物说',
//           headerStyle: {
//             backgroundColor: theme.colors.pinkGlamour,
//             height: 40,
//           },
//           headerTitleStyle: {
//             fontSize: theme.sizes.h3,
//           },
//           headerTintColor: theme.colors.cityLights,
//           headerLeft: ({ onPress, title, tintColor, }) => {
//             return (
//               <TouchableHighlight
//                 style={{ borderRadius: 50, left: 4, width: 27, height: 27, justifyContent: 'center', alignItems: 'center' }}
//                 onPress={() => navigation.toggleDrawer()}
//                 activeOpacity={0.95}
//                 underlayColor='rgb(180,83,82)'
//               >
//                 <Feather name='menu' size={25} color={tintColor} />
//               </TouchableHighlight>
//             )
//           }
//         }
//       )
//     },
//   },
//   {
//     headerLayoutPreset: 'center'
//   }
// )
// const PlayVideo = createStackNavigator(
//   {
//     PlayVideoScreen: {
//       screen: PlayVideoScreen,
//       navigationOptions: ({ navigation }) => ({
//         title: navigation.getParam('title'),
//         headerStyle: {
//           backgroundColor: theme.colors.pinkGlamour,
//           height: 40,
//         },
//         headerTitleStyle: {
//           fontSize: theme.sizes.h3,
//           color: theme.colors.cityLights,
//         },
//         headerTintColor: theme.colors.cityLights,
//         headerLeft: ({ onPress, title, tintColor, }) => {
//           return (
//             <TouchableHighlight
//               style={{ borderRadius: 50, left: 4, width: 27, height: 27, justifyContent: 'center', alignItems: 'center' }}
//               onPress={() => navigation.navigate('HomeScreen')}
//               activeOpacity={0.95}
//               underlayColor='rgb(180,83,82)'
//             >
//               <Ionicons name='ios-arrow-back' size={25} color={tintColor} />
//             </TouchableHighlight>
//           )
//         }
//         // headerBackImage: ({ tintColor }) => <Ionicons name='ios-arrow-back' size={25} color={tintColor} />,
//       }),
//     },
//   },
//   {
//     headerLayoutPreset: 'center'
//   }
// )

// // 我的视频（视频处理）
// const _HandleVideoScreen = createStackNavigator(
//   {
//     HandleVideoScreen: {
//       screen: HandleVideoScreen,
//       navigationOptions: ({ navigation }) => (
//         {
//           title: '我的视频',
//           headerStyle: {
//             backgroundColor: theme.colors.pinkGlamour,
//             height: 40,
//           },
//           headerTitleStyle: {
//             fontSize: theme.sizes.h3,
//             // color: 'white'
//           },
//           // 不在👆设置字体颜色，是因为只有 TintColor 才能传递出去👇
//           headerTintColor: theme.colors.cityLights,
//           headerLeft: ({ onPress, title, tintColor, }) => {
//             return (
//               <TouchableHighlight
//                 style={{ borderRadius: 50, left: 4, width: 27, height: 27, justifyContent: 'center', alignItems: 'center' }}
//                 onPress={() => navigation.toggleDrawer()}
//                 activeOpacity={0.95}
//                 underlayColor='rgb(180,83,82)'
//               >
//                 <Feather name='menu' size={25} color={tintColor} />
//               </TouchableHighlight>
//             )
//           }
//         }
//       )
//     }
//   },
//   {
//     headerLayoutPreset: 'center'
//   }
// )

// const Home = createDrawerNavigator(
//   // RouteConfigs
//   {
//     HomeScreen: home,
//   },
//   // TabNavigatorConfig
//   {
//     drawerType: 'front',
//     contentComponent: ({ navigation }) => (
//       <SideContent navigation={navigation} />
//     )
//   }
// )

// const HandleVideo = createDrawerNavigator(
//   {
//     HomeScreen: _HandleVideoScreen,
//   },
//   {
//     drawerType: 'slide',
//     contentComponent: ({ navigation }) => <SideContent navigation={navigation} />
//   }
// )

// // 底部导航栏
// const BottomTabNavigator = createBottomTabNavigator(
//   // RouteConfigs
//   {
//     HandleVideoScreen: {
//       screen: HandleVideo,
//       navigationOptions: {
//         title: '视频处理',
//         tabBarIcon: ({ focused, tintColor }) => <Feather name="video" size={22} color={tintColor} />
//       },
//     },
//     HomeScreen: {
//       screen: Home,
//       navigationOptions: {
//         title: '宠物说',
//         tabBarIcon: ({ focused, tintColor }) => <Ionicons name="ios-home" size={22} color={tintColor} />
//       }
//     },


//     // Settings: {
//     //   screen: DrawerNav,
//     //   navigationOptions: {
//     //     title: '设置',
//     //     tabBarIcon: ({ focused, tintColor }) => <AntDesign name="setting" size={22} color={tintColor} />
//     //   }
//     // }
//   },
//   // TabNavigatorConfig
//   {
//     initialRouteName: 'HomeScreen',
//     tabBarOptions: {
//       activeTintColor: theme.colors.pinkGlamour,
//       // inactiveTintColor: theme.colors.pinkGlamour,
//       showLabel: false,
//       style: {
//         // borderTopWidth: 0,
//         // backgroundColor: theme.colors.firstDate,
//         borderTopLeftRadius: 0,
//         borderTopRightRadius: 0,
//         paddingHorizontal: 30
//       },
//     }
//   }
// )

// const UnLogNav = createStackNavigator(
//   {
//     BottomTabNavigator: {
//       screen: BottomTabNavigator,
//       navigationOptions: {
//         header: null
//       }
//     },
//     PlayVideo: {
//       screen: PlayVideo,
//       navigationOptions: {
//         header: null
//       }
//     },
//     LoginScreen: {
//       screen: LoginScreen,
//       navigationOptions: () => ({
//         title: '登录/注册',
//         headerStyle: {
//           backgroundColor: theme.colors.pinkGlamour,
//           height: 40,
//         },
//         headerTitleStyle: {
//           fontSize: theme.sizes.h3,
//         },
//         headerTintColor: theme.colors.cityLights,
//       })
//     },
//     SettingScreen: {
//       screen: SettingScreen,
//       navigationOptions: {
//         header: null
//       }
//     },
//     ThemeScreen: {
//       screen: ThemeScreen,
//       navigationOptions: {
//         header: null
//       }
//     },
//     ContactUsScreen: {
//       screen: ContactUsScreen,
//       navigationOptions: {
//         header: null
//       }
//     },
//   },
//   {
//     initialRouteName: 'BottomTabNavigator',
//   },
// )

// export default createAppContainer(UnLogNav)