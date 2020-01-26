import { createStackNavigator } from 'react-navigation-stack'
import { createSwitchNavigator } from 'react-navigation'
import { SwitchNavText1, SwitchNavText2 } from '../screens'



const a = createStackNavigator({
  SwitchNavText1: {
    screen: SwitchNavText1,
    navigationOptions: {
      title: '选择导航1'
    }
  }
})

const b = createStackNavigator({
  SwitchNavText2: {
    screen: SwitchNavText2,
    navigationOptions: {
      title: '选择导航2'
    }
  }
})

const SwitchNavText = createSwitchNavigator({
  Nav1: SwitchNavText1,
  Nav2: SwitchNavText2
})

export default SwitchNavText