import React, { Component } from 'react'
import { Link } from 'react-router'

export default class CartItem extends Component{
  render() {
    let { item, edit } = this.props;
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
        {
          !edit ?
            <a className="buy">{item.count}</a>
          :
            <p>
              <span className="inc">+</span>
                <input className="num-inp" value={item.count}/>
              <span className="dec">-</span>         
            </p>          
        }
        
      </li>
    )
  }
}