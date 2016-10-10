import React, { Component } from 'react'

export default class CartBottom extends Component{
  back(){
    this.props.history.go(-1)
  }
  render() {
    let {submit, cart} = this.props
    return (
      <div className="fix-bottom">
        <a className="back" onClick={this.back.bind(this)}>
          需要支付：
          <span className="yang">￥</span>
          <span className="num">{(cart.total-cart.couponAmount).toFixed(2)}</span>
          <span className="yuan">元</span>   
        </a>
        <a className="btn-buy" onClick={submit}>
          提交订单
          <span className="icon"><i className="iconfont icon-jiantou"></i></span>
        </a>
      </div>
    )
  }
}