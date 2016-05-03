import React, { Component } from 'react'

export default class CartBottom extends Component{
  render() {
    return (
      <div className="fix-bottom">
        <a className="back">
          <i></i>
          返回购物          
        </a>
        <a className="btn-buy">
          <i></i>
          提交订单
        </a>
      </div>
    )
  }
}