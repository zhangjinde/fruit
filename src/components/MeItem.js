import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MeItem extends Component{
  render() {
    let { icon, desc, to } = this.props;
    return (
      <li>
        <Link to={to}>
          <i className={"icon "+icon}></i>
          {desc}
          <i className="icon go"></i>
        </Link>
      </li>
    )
  }
}