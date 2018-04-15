import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { browserHistory, Router } from 'react-router'

import routes from './routes/routes'
import store from './store'

import { APP_CONTAINER_SELECTOR } from '../shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
),
rootEl,
)
