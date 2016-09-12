import React, { Component } from 'react'
import {Link} from 'react-router'

import STATE from '../../utils/orderState'

export default class OrderItem extends Component{
  render() {
    let {item, type} =this.props
    return (
      <li>
        <div className="detail">
          <p className="ding">
            <Link to={'/me/order/'+item.id+'?type='+type}>
              订单编号：{item.orderNo}
            </Link>
          </p>
          <p>下单时间：{item.createTime}</p>
          <p>
            收货时间：{item.arriveTime} 送达（{item.arriveAddr}）
            （{item.state}）
          </p>
          {
            item.state==4 ? 
              <Link to={'/me/order/'+item.id+'?type='+type} className="zhui">订单追踪</Link>
            :
              <a className="zhui zhifu">{STATE[item.state]}</a>
          }
        </div>
        <ul className="goods">
        {
          item.goods.map((good,idx)=>(
            <li key={idx}>
              <a className="name">{(idx+1)+'.'+good.name}</a>
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
        {
          item.state==13?
          <p className="op"><Link to={`/me/order/${item.id}?type=${type}&cmt=1`} className="btn">查看评价</Link></p>
          :
          item.state==5?
          <p className="op"><Link to={`/me/order/${item.id}?type=${type}&confirm=1`} className="btn">确认收货</Link></p>
          :
          [5,6,13].indexOf(+item.state)>-1?
          <p className="op"><Link to={`/me/order/${item.id}?type=${type}&tui=1`} className="btn">申请退货</Link><Link to={`/me/order/${item.id}?type=${type}&cmt=1`} className="btn">立即评价</Link></p>
          :
          item.state==1?
          <p className="op"><Link to={`/me/order/${item.id}?type=${type}&topay=1`} className="btn">立即支付</Link></p>
          :
          [1,2,3,4].indexOf(+item.state)>-1?
          <p className="op"><Link to={`/me/order/${item.id}?type=${type}&cancel=1`} className="btn">取消订单</Link></p>
          :
          ""
        }
        
      </li>
    )
  }
}