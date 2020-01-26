import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import Main from './Main'
import { PersistGate } from 'redux-persist/integration/react'


const { store, persistor } = configureStore();
export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <Main />
        </PersistGate>
      </Provider>
    )
  }
}