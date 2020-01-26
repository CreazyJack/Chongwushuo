import actionType from '../actions/actionType'
import { theme } from '../../constants'


const initState = {
  color: theme.colors.pinkGlamour
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.THEME_DEFAULT:
      return {
        ...state,
        color: theme.colors.pinkGlamour
      }
    case actionType.THEME_FADED_POSTER:
      return {
        ...state,
        color: theme.colors.primary
      }
    case actionType.THEME_SECONDARY:
      return {
        ...state,
        color: theme.colors.secondary
      }
    case actionType.THEME_GRAY:
      return {
        ...state,
        color: theme.colors.gray
      }
    default:
      return state
  }
}