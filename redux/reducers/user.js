import actionType from '../actions/actionType'
import { theme } from '../../constants'


initState = {
  suc: '正在登录',
  userData: {},
  messageHeight: 0,
  messageWidth: 0,
  borderWidth: 0,
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.LOGIN_START:
      return {
        ...state,
        suc: '正在登录...',
        messageHeight: 40,
        messageWidth: 100,
        borderWidth: 1,
      }
    case actionType.LOGIN:
      return {
        ...state,
        suc: '登录成功',
        userData: action.payload.userData,
        messageHeight: 40,
        messageWidth: 100,
      }
    case actionType.LOGIN_SUCCESS:
      return {
        ...state,
        suc: '登陆成功',
        messageHeight: 0,
        messageWidth: 0,
        borderWidth: 0,
      }
    case actionType.CHANGE_AVATAR:
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload.userData
        }
      }
    default:
      return state;
  }
}