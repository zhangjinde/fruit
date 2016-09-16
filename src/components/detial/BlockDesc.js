import React, { Component } from 'react'

export default class BlockDesc extends Component{
  render() {
    let {item} = this.props
    return (
      <div className="block desc">
        <img src={item.img} />
        <p className="price">
          <span className="now">￥<span className="num">{item.price}</span></span>
          <span className="old">超市￥{item.old}元</span>
        </p>
        <p className="name">
          {item.name}
          <a className="icon" onClick={this.props.like}>
            <i className={item.like?"iconfont icon-like":"iconfont icon-like1"}></i>
          </a>
        </p>
        <div className="other clearfix">
          <div>
            <p className="tit">规格</p>
            <p className="des">{item.guige}</p>
          </div>
          <div>
            <p className="tit">产地</p>
            <p className="des">{item.chandi}</p>
          </div>
          <div>
            <p className="tit">销量</p>
            <p className="des">{item.sales}份</p>
          </div>
          <div>
            <p className="tit">点赞</p>
            <p className="des">{item.likes}次</p>
          </div>          
        </div>
      </div>
    )
  }
}