import React, { Component } from 'react'
import {Link} from 'react-router'

export default class BlockTotal extends Component{
  render() {
    let {ord} = this.props
    ord.goods = ord.goods || []
    return (
      <div className="block goods total">
        <div className="left">
          <br/>
          共{ord.goods.length}份商品
        </div>
        <div className="right">
          <div className="left">包装袋</div>
          <div className="right">￥{}元</div>
          <div className="left">运费</div>
          <div className="right">￥{}元</div>
          <div className="left">总价</div>
          <div className="right">￥{}元</div> 
          <p className="clear"></p>
        </div>
        <p className="clear"></p>
      </div>
    )
  }
}