import React, { Component } from 'react'
import { Link } from 'react-router'

import ListItem from '../components/ListItem'

import {move} from '../utils/animate'

export default class FruitList extends Component{
  add(item,elem,hide){
    //增加
    this.props.actions.add(item,1)
    if(hide)
      return ;
    let pos = this.props.cartPos
    let pos2=elem.getBoundingClientRect()  
    let cart = this.refs.cart
    let start = {
      left:pos2.left,
      top:pos2.top
    }
    let end = {
      left:pos.left,
      top:pos.top
    }
    move(cart, {
      start,
      end,
    }, function(){
      cart.style="opacity:0;"
    })
  }
  del(item){
    this.props.actions.add(item,-1)
  }
  render() {
    let {list,goods} = this.props;
    return (
      <ul className="list">
        {
          list.map(item=>{
            let tem = goods?goods.filter(g=>g.id===item.id):[];
            let cnt = tem.length?tem[0].count:0
            return(
              <ListItem item={item} key={item.id} add={this.add.bind(this)} del={this.del.bind(this)} count={cnt}/>
            )
          })
        }
        <li className="mv-cart" ref="cart">
          caca
        </li>
      </ul>
    )
  }
}