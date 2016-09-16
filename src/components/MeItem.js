import React, { Component } from 'react'
import { Link } from 'react-router'

export default class MeItem extends Component{
  render() {
    let { icon, desc, to } = this.props;
    return (
      <li>
        <Link to={to}>
          <span className="left"><i className={"iconfont icon-"+icon}></i></span>
          {desc}
          <span className="right"><i className="iconfont icon-jiantou"></i></span>
        </Link>
      </li>
    )
  }
}