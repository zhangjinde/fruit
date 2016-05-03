import React, { Component } from 'react'
import { Router , Route , IndexRoute } from 'react-router'

import Fruit from './containers/Fruit'
import Me from './containers/Me'
import CartList from './containers/CartList'
import CartBuy from './containers/CartBuy'

export default class AppRouter extends Component{
  render(){
    let { history } = this.props
    return (
      <Router history={history}>
        <Route path="/" component={Fruit}></Route>
        <Route path="/me">
          <IndexRoute component={Me} />
        </Route>    
        <Route path="/cart">
          <IndexRoute component={CartList} />
          <Route path="/cart/buy" component={CartBuy} />
        </Route>         
      </Router>
    )
  }
}