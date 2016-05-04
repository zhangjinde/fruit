import React, { Component } from 'react'

export default class ExchangeItem extends Component{
  render() {
    let {item} = this.props
    return (
      <li className="exchange" item={item}>
        <div className="img">
          <img src={item.img}/>
        </div>
        <div className="txt">
          <p className="title">{item.name}</p>
          <p className="jifen">{item.point}分</p>
          <p className="desc">{item.desc}</p>
          <a href="javascript:;" className="duihuan">兑换</a>
        </div>
      </li>
    )
  }
}