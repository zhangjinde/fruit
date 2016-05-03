import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppRouter from '../router'

export default class App extends Component{
  render(){
    const {store,history} = this.props
    return (
      <Provider store={store}>
        <AppRouter history={history} />
      </Provider>
    )
  }
}