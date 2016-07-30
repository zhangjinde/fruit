import React, { Component } from 'react'
import {Link} from 'react-router'

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
            item.state==2 ? 
              <Link to={'/me/order/'+item.id+'?type='+type} className="zhui">订单追踪</Link>
            :
            item.state==3?
            <a className="zhui zhifu">已完成</a>
            :
            item.state==4?
            <a className="zhui zhifu">待确认</a>
            :
            item.state==5?
            <a className="zhui zhifu">待评价</a>
            :
            item.state==6?
            <a className="zhui zhifu">退货中</a>
            :
            item.state==7?
            <a className="zhui zhifu">已退货</a>
            :
            <a className="zhui zhifu">待支付</a>
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
          item.state==3?
          <p className="op"><Link to={`/me/order/${item.id}?type=${type}&cmt=1`} className="btn">查看评价</Link></p>
          :
          item.state==4?
          <p className="op"><Link to={`/me/order/${item.id}?type=${type}&confirm=1`} className="btn">确认收货</Link></p>
          :
          item.state==5?
          <p className="op"><Link to={`/me/order/${item.id}?type=${type}&return=1`} className="btn">申请退货</Link><Link to={`/me/order/${item.id}?type=${type}&cmt=1`} className="btn">立即评价</Link></p>
          :
          item.state==6?
          ""
          :
          <p className="op"><Link to={`/me/order/${item.id}?type=${type}&topay=1`} className="btn">立即支付</Link></p>
        }
        
      </li>
    )
  }
}