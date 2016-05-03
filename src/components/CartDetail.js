import React, { Component } from 'react'

import CartItem from '../components/CartItem'

export default class CartBottom extends Component{
  render() {
    let { cart } = this.props
    return (
      <div className="block detail">
        <p className="tit">
          已购买商品
          <a href="javascript:;">编辑</a>
        </p>
        <ul className="list">
        {
          cart.goods.map(function(item){
            return (
              <CartItem item={item} key={item.id}/>
            )
          })
        }
        </ul>
        <div className="foot">
          总计共{cart.count}份商品
          <p className="right">
            总价：
            <span className="num">
            ￥{cart.total}
            </span>
          </p>
        </div>
      </div>
    )
  }
}