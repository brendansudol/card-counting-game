import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import 'ace-css/css/ace.min.css'

import { newGame } from './actions'
import reducer from './reducers'
import App from './containers/App'


const middleware = [createLogger()]
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

store.dispatch(newGame())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
