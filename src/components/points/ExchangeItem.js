import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ExchangeItem extends Component{
  exchange(){
    const {exchange, item} = this.props;
    exchange(item.point, item.id, item.cityId);
  }
  render() {
    let {item} = this.props
    return (
      <li className="exchange" item={item}>
        <div className="img">
          <Link to={`/me/coupon/${item.id}?cityId=${item.cityId}`}><img src={item.img}/></Link>
        </div>
        <div className="txt">
          <p className="title">{item.name}</p>
          <p className="jifen">{item.point}分</p>
          <p className="desc">{item.desc}</p>
          <a href="javascript:;" className="duihuan" onClick={this.exchange.bind(this)}>兑换</a>
        </div>
      </li>
    )
  }
}