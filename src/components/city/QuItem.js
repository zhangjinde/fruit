import React, { Component } from 'react'

export default class QuItem extends Component{
  render() {
    let {item,active,choose} = this.props
    return (
      <li onClick={choose.bind(null,item.id)}>
        <span className={active?"name active":"name"}>{item.name}</span>
      </li>
    )
  }
}