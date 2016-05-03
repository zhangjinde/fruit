import 'babel-core/register'
import React from 'react'
import { render } from 'react-dom'
import {hashHistory } from 'react-router'

import configureStore from './store/configureStore'
import App from './containers/App'

const store = configureStore()

render(
  <App store={store} history={hashHistory} />,
  document.getElementById('root')
)