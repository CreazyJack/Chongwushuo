import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { AsyncStorage } from 'react-native'
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'milk', // 对于数据 key 的定义
  storage: AsyncStorage,  // 选择的存储引擎
  blacklist: ['user', 'comment', 'theme', 'video',],
  // whitelist: ['user', 'comment', 'theme', 'video',]
}

// 对 reducers 的封装处理
const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  // 处理后的 reducers 需要作为参数传递在 createStore 中
  const store = createStore(persistedReducer, applyMiddleware(thunk))
  // 持久化 store
  let persistor = persistStore(store)
  return { store, persistor }
}



// export default createStore(
//   reducers,
//   applyMiddleware(thunk)
// )