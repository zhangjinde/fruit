import React, { Component } from 'react'
import {Link} from 'react-router'

import STATE from '../../utils/orderState'

export default class OrderItem extends Component{
  render() {
    let {item, type} =this.props
    return (
      <li className={['7'].indexOf(item.state)>-1?"cancel":""}>
        <div className="detail">
          <p className="ding">
            <Link to={'/me/order/'+item.id+'?type='+type}>
              订单编号：<span className="num">{item.orderNo}</span>
            </Link>
          </p>
          <p>下单时间：{item.createTime}</p>
          <p>
            收货时间：{item.arriveTime} 送达（{item.arriveAddr}）
          </p>
          {
            <a className="zhui zhifu">{STATE[item.state]['s']}</a>
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
            <span className="yun">优惠券: - {+item.couponPrice}元</span>
            <span className="sum">
              总计：<span className="shu">{item.total}元</span>
            </span>
          </li>
        </ul>
        <p className="op">
        {
          [6].indexOf(+item.state)>-1?
          <Link to={`/me/order/${item.id}?type=${type}&tui=1`} className="btn left cancel">申请退货</Link>
          :
          [1].indexOf(+item.state)>-1?
          <Link to={`/me/order/${item.id}?type=${type}&cancel=1`} className="btn left cancel">取消订单</Link>
          :
          item.state==5?
          <Link to={`/me/order/${item.id}?type=${type}&confirm=1`} className="btn left cancel">确认收货</Link>          
          :
          ""
        }
        {
          [3,4,5].indexOf(+item.state)>-1?
          <Link to={`/me/order/${item.id}?type=${type}`} className="btn right">查看订单</Link>
          :
          [6,13].indexOf(+item.state)>-1?
          <Link to={`/me/order/${item.id}?type=${type}&cmt=1`} className="btn right">{ item.commented == 0 ? '立即评价': '查看评价'}</Link>
          :
          item.state==1?
          <Link to={`/me/order/${item.id}?type=${type}&topay=1`} className="btn right">立即支付</Link>
          :       
          ""
        }
        </p>
      </li>
    )
  }
}