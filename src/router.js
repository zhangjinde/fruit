import React, { Component } from 'react'
import { Router , Route , IndexRoute } from 'react-router'

import Fruit from './containers/Fruit'
import Me from './containers/Me'
import CartList from './containers/CartList'
import CartBuy from './containers/CartBuy'
import CartFinish from './containers/CartFinish'
import Order from './containers/Order'
import OrderState from './containers/OrderState'
import Coupon from './containers/Coupon'
import CouponDetail from './containers/CouponDetail'
import Points from './containers/Points'
import City from './containers/City'
import Addr from './containers/Addr'
import AddrAdd from './containers/AddrAdd'
import Detial from './containers/Detial'

export default class AppRouter extends Component{
  render(){
    let { history } = this.props
    return (
      <Router history={history}>
        <Route path="/" component={Fruit}></Route>
        <Route path="/me">
          <IndexRoute component={Me} />
          <Route path="/me/order" component={Order} />
          <Route path="/me/order/:id" component={OrderState} />
          <Route path="/me/coupon" component={Coupon} />
          <Route path="/me/coupon/:id" component={CouponDetail} />
          <Route path="/me/points" component={Points} />
        </Route>    
        <Route path="/cart">
          <IndexRoute component={CartList} />
          <Route path="/cart/buy" component={CartBuy} />
          <Route path="/cart/finish" component={CartFinish} />          
        </Route>  
        <Route path="/city">
          <IndexRoute component={City} />
        </Route>  
        <Route path="/addr">
          <IndexRoute component={Addr} />
          <Route path="/addr/add" component={AddrAdd} />
        </Route>
        <Route path='/fruit'>
          <Route path="/fruit/:id" component={Detial} />
        </Route>
      </Router>
    )
  }
}