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
          <a className="tongzhi hidden">
            <p>降价时</p>
            <p>通知我</p>
          </a>
        </div>
        <p className="down">
        *为了低碳环保，本平台采用送货上门服务；包装为送货员背包和帆布袋的形式；实际收货时不另使用包装袋，请务必在收货时根据小票核对准确货物详情。
        </p>
      </div>
    )
  }
}