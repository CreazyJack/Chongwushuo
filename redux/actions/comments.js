import actionType from './actionType'
import { mocks } from '../../constants'
import { getComments } from '../../Components/requests'

const startGet = () => ({
  type: actionType.GET_COMMENTS_START,
  payLoad: {
    suc: '开始获取数据',
  }
})

const finishGet = () => ({
  type: actionType.GET_COMMENTS_SUCCESS,
  payLoad: {
    suc: '数据获取成功',
  }
})

export const commentHeadCop = () => ({
  type: actionType.COMMENT,
})


// export const getCommentsList = () => {
//   return dispatch => {
//     dispatch(startGet())
//     getComments()
//       .then(resp => {
//         // console.log(resp.data.list)
//         dispatch({
//           type: actionType.GET_COMMENTS,
//           payload: {
//             commentData: resp.data.list
//           }
//         })
//         dispatch(finishGet())
//       })
//   }
// }
var commentList = mocks.commentListData.data.list
export const getCommentsList = () => {
  return dispatch => {
    dispatch(startGet())
    dispatch({
      type: actionType.GET_COMMENTS,
      payload: {
        commentData: commentList
      }
    })
    dispatch(finishGet())
  }
}

export const likeClick = (index) => {
  return dispatch => {
    dispatch(startGet())
    if (commentList[index].like === false) {
      commentList[index].like = true
      commentList[index].likeAmount = commentList[index].likeAmount + 1
    } else {
      commentList[index].like = false
      commentList[index].likeAmount = commentList[index].likeAmount - 1
    }
    dispatch({
      type: actionType.LIKE,
      payload: {
        commentData: commentList
      }
    })
    dispatch(finishGet())
  }
}
