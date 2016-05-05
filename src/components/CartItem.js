import React, { Component } from 'react'
import { Link } from 'react-router'

export default class CartItem extends Component{
  add(){
    let {item,add} = this.props
    add(item)
  }
  del(){
    let {item,del} = this.props
    del(item)
  }  
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
            <a className="buy num">{item.count}</a>
          :
            <p className="updnum">
              <a className="op" onClick={this.del.bind(this)}>-</a>
                <a className="num">{item.count}</a>
              <a className="op" onClick={this.add.bind(this)}>+</a>
            </p>          
        }
        
      </li>
    )
  }
}