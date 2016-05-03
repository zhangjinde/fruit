import React, { Component } from 'react'
import { Link } from 'react-router'

import ListItem from '../components/ListItem'

export default class FruitList extends Component{
  add(id,elem){
    let pos = this.props.cartPos
    let pos2=elem.getBoundingClientRect()
    console.log(id,pos,pos2)
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
      </ul>
    )
  }
}