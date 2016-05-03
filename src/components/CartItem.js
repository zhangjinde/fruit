import React, { Component } from 'react'
import { Link } from 'react-router'

export default class CartItem extends Component{
  render() {
    let { item } = this.props;
    return (
      <li className="small">
        <p className="img"><img src={item.img}/></p>
        <div className="txt">
          <p className="tit">
            {item.name}
          </p>
          <p>
            <span className="price">￥{item.price}</span>
            <span className="cnt">/{item.type}</span>
          </p>
        </div>
        <a className="buy">{item.count}</a>
      </li>
    )
  }
}