import actionType from './actionType'
import { mocks } from '../../constants'
import { getVideos } from '../../Components/requests'

const startGet = () => ({
  type: actionType.GET_VIDEOS_START,
  payLoad: {
    suc: '开始获取数据',
  }
})

const finishGet = () => ({
  type: actionType.GET_VIDEOS_SUCCESS,
  payLoad: {
    suc: '数据获取成功',
  }
})

export const getVideoList = () => {
  return dispatch => {
    dispatch(startGet())
    getVideos()
      .then(resp => {
        dispatch({
          type: actionType.GET_VIDEOS,
          payload: {
            videoListData: mocks.videoListData,
            videoData: resp.data
          }
        })
        dispatch(finishGet())
      })
  }
}


