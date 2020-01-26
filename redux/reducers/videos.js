import actionType from '../actions/actionType'

initState = {
  isLoading: false,
  suc: '数据传递未成功',
  videoListData: [],
  videoData: []
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_VIDEOS_START:
      return {
        ...state,
        isLoading: true,
        suc: '开始获取数据',
      }
    case actionType.GET_VIDEOS:
      return {
        ...state,
        suc: '数据传递中',
        videoListData: action.payload.videoListData,
        videoData: action.payload.videoData
      }
    case actionType.GET_VIDEOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        suc: '数据获取成功',
      }

    default:
      return state;
  }
}