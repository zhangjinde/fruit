import React, { Component } from 'react'
import { Link } from 'react-router'

import ListItem from '../components/ListItem'

import {move} from '../utils/animate'

export default class FruitList extends Component{
  add(id,elem){
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
  render() {
    let list = this.props.list;
    return (
      <ul className="list">
        {
          list.map(item=>(
            <ListItem item={item} key={item.id} add={this.add.bind(this)}/>
          ))
        }
        <li className="mv-cart" ref="cart">
          caca
        </li>
      </ul>
    )
  }
}