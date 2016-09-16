import React, { Component } from 'react'

import CartItem from '../components/CartItem'

export default class CartBottom extends Component{
  add(item){
    this.props.add(item,1)
  }
  del(item){
    this.props.add(item,-1)
  }
  render() {
    let { cart, edit } = this.props
    return (
      <div className="block detail">
        <p className="tit">
          已购买商品
          <a href="javascript:;" onClick={edit}>{cart.editing? "完成":"编辑"}</a>
        </p>
        <ul className="list">
        {
          cart.goods.map(item =>
            (
              <CartItem item={item} key={item.id} edit={cart.editing} add={this.add.bind(this)}  del={this.del.bind(this)}/>
            )
          )
        }
        </ul>
        <div className="foot">
          <p className="left">总计共{cart.count}份商品</p>
          <div className="right">
            <p className="p">
              <span className="d bl">优惠券：</span>
              <span className="you bl">
              - ￥{(+cart.couponAmount).toFixed(2)}
              </span>            
            </p>
            <p className="p">
              <span className="d bl">总价：</span>
              <span className="num bl">
              ￥{(cart.total-cart.couponAmount).toFixed(2)}
              </span>            
            </p>
          </div>
        </div>
      </div>
    )
  }
}