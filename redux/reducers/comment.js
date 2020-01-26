import actionType from '../actions/actionType'
import { theme } from '../../constants' 

initState = {
  isLoading: false,
  suc: '数据传递未成功',
  commentData: [],
  headCop: false
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_COMMENTS_START:
      return {
        ...state,
        isLoading: true,
        suc: '开始获取数据',
      }
    case actionType.GET_COMMENTS:
      return {
        ...state,
        suc: '数据传递中',
        commentData: action.payload.commentData,
      }
    case actionType.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suc: '数据获取成功',
      }
    case actionType.COMMENT:
      return {
        ...state,
        headCop: true,
      }
    case actionType.LIKE:
      return {
        ...state,
        suc: '数据传递中',
        commentData: action.payload.commentData,
      }
    default:
      return state;
  }
}