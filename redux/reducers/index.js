import { combineReducers } from 'redux'
import videos from './videos'
import theme from './theme'
import comment from './comment'
import user from './user'


export default combineReducers({
  videos,
  theme,
  comment,
  user,
})