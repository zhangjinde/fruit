import React, { Component } from 'react'
import { Router , Route , IndexRoute } from 'react-router'

import Fruit from './containers/Fruit'
import Me from './containers/Me'
import CartList from './containers/CartList'
import CartBuy from './containers/CartBuy'
import Order from './containers/Order'
import Coupon from './containers/Coupon'
import Points from './containers/Points'
import City from './containers/City'

export default class AppRouter extends Component{
  render(){
    let { history } = this.props
    return (
      <Router history={history}>
        <Route path="/" component={Fruit}></Route>
        <Route path="/me">
          <IndexRoute component={Me} />
          <Route path="/me/order" component={Order} />
          <Route path="/me/coupon" component={Coupon} />
          <Route path="/me/points" component={Points} />
        </Route>    
        <Route path="/cart">
          <IndexRoute component={CartList} />
          <Route path="/cart/buy" component={CartBuy} />
        </Route>  
        <Route path="/city">
          <IndexRoute component={City} />
        </Route>  
      </Router>
    )
  }
}