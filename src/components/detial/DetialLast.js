import React, { Component } from 'react'

export default class DetialLast extends Component{
  render() {
    let {item} = this.props
    return (
      <div className="block last">
        <div className="up">
          <p className="price last">
            <span className="now">￥<span className="num">{item.price}</span></span>
            <span className="old">市场价￥{item.old}元</span>
          </p>
          <p className="youhui">
            <a>优惠{item.discount}元</a>
          </p>
          <a className="tongzhi">
            <p>降价时</p>
            <p>通知我</p>
          </a>
        </div>
        <p className="down">
        *为了保持。地方撒了个法定时间啊来看看；的撒开发； 发的说说空间啊；房间快点撒； 
        范德萨范德萨
        范德萨范德萨fdsf撒九分裤；dsa
        </p>
      </div>
    )
  }
}