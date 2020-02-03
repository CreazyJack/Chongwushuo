import actionType from './actionType'
import { loginRequest } from '../../Components/requests'
import { AsyncStorage } from 'react-native'


const logStart = () => {
  return {
    type: actionType.LOGIN_START
  }
}
const logSuccess = () => {
  return {
    type: actionType.LOGIN_SUCCESS,
  }
}

export const login = () => {
  return dispatch => {
    dispatch(logStart())
    setTimeout(() => {
      loginRequest()
        .then(resp => {
          dispatch({
            type: actionType.LOGIN,
            payload: {
              userData: resp.data.data,
            }
          })
          setTimeout(() => {
            dispatch(logSuccess())
          }, 1000);
        })
    }, 1000);
  }
}



export const loginFail = () => {
  console.log('logout!')
  return {
    type: actionType.LOGIN_Fail
  }
}

export const changeAvatar = (userData) => {
  return {
    type: actionType.CHANGE_AVATAR,
    payload: {
      userData
    }
  }
}