import React, { Component } from 'react'
import {Link} from 'react-router'

export default class BlockProcess extends Component{
  render() {
    let {order} =this.props
    console.log(order)
    return (
      <div className="block proc">
        <ul>
        {
          order.state==3?
            <li className={order.state==3?"active":""}>
              <p className="txt">您已收货</p>
              <p className="time">2016年05月05日 22:18:02</p>
            </li>
          :
            ""
        }
        {
          order.state==2 || order.state==3 ?
            <li className={order.state==2?"active":""}>
              <p className="txt">我们已经开始配送您订购的商品，请耐心等待，预计送达时间将在1个小时之内</p>
              <p className="time">2016年05月05日 22:18:02</p>
            </li>
          :
            ""
        }
        {
          order.state==1 || order.state==2 || order.state==3 ?
            <li className={order.state==1?"active":""}>
              <p className="txt">我们收到了您的订单，已帮您配货，等待配送</p>
              <p className="time">2016年05月05日 22:18:02</p>
            </li>     
          :
            ""
        }
        </ul>
      </div>
    )
  }
}