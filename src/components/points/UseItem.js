import React, { Component } from 'react'
import ExchangeItem from './ExchangeItem'

export default class UseItem extends Component{
  render() {
    let {item} = this.props
    return (
      <li className="rec">
        <div className="txt">
          <p className="desc">{item.desc}</p>
          <p className="time">{item.time}</p>
        </div>
        <div className="num">{item.type===1?'+':'-'}{item.point}</div>
      </li>
    )
  }
}