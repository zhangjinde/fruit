import React, { Component } from 'react'
import {Link} from 'react-router'

export default class OrderItem extends Component{
  render() {
    let {item} =this.props
    return (
      <li>
        <div className="detail">
          <p className="ding">
            <Link to={'/me/order/'+item.id}>
              订单编号：{item.orderNo}
            </Link>
          </p>
          <p>下单时间：{item.createTime}</p>
          <p>
            收货时间：{item.arriveTime} 送达（{item.arriveAddr}）
            （{item.state}）
          </p>
          {
            !item.state || item.state==3?
            ""
            :
            <Link to={"/me/order/"+item.id} className="zhui">订单追踪</Link>
          }
        </div>
        <ul className="goods">
        {
          item.goods.map((good,idx)=>(
            <li key={idx}>
              <Link to={"/fruit/"+good.id} className="name">{(idx+1)+'.'+good.name}</Link>
              <span className="num">×{good.count}</span>
              <span className="price">￥{(good.price*good.count).toFixed(2)}</span>
            </li>
          ))
        }
          <li className="zong">
            <span className="yun">运费:{item.yunfei}元</span>
            <span className="sum">
              总计：<span className="shu">{item.total}元</span>
            </span>
          </li>
        </ul>
      </li>
    )
  }
}