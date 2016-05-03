import React, { Component } from 'react'
import { Link } from 'react-router'

export default class FruitList extends Component{
  render() {
    let { icon, desc } = this.props;
    return (
      <li>
        <i className={"icon "+icon}></i>
        {desc}
        <i className="icon go"></i>
      </li>
    )
  }
}