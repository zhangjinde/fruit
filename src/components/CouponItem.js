import React, { Component } from 'react'
import { Link } from 'react-router'

export default class CouponItem extends Component{
  choose(id,name, restrict, amount){
    let {history, choose} = this.props;
    choose(id,name, restrict, amount);
  }
  render() {
    let { item, choose, isList } = this.props;

    return (
      <li onClick={this.choose.bind(this, item.id, item.title, item.restrict, item.amount)}>
        <div className="img">
        {
          !isList?
            <a><img src={item.img} /></a>
          :
            <Link to={`/me/coupon/${item.id}?cityId=${item.cityId}`}><img src={item.img} /></Link>          
        }
        </div>
        <div className="txt">
          <p className="title">
            {item.title}
            {
              item.isNew?
              <span className="new">(new)</span>
              :
              ""
            }
            <span className="qianti">
              {item.qianti}
            </span>
          </p>
          <p className="dead">到期：{item.deadline}</p>
          <p className="guize">规则：{item.guize}</p>        
        </div>
      </li>
    )
  }
}