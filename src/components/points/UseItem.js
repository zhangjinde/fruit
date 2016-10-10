import React, { Component } from 'react'
import ExchangeItem from './ExchangeItem'

export default class UseItem extends Component{
  render() {
    let {item, type} = this.props
    const p = type==3 ? '-'+item.point : item.point>0 ? '+'+item.point : item.point
    return (
      <li className="rec">
        <div className="txt">
          <p className="desc">{item.name}</p>
          <p className="time">{item.getDate || item.from}</p>
        </div>
        <div className="num">{p}</div>
      </li>
    )
  }
}