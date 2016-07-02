import React, { Component } from 'react'
import { Link } from 'react-router'

export default class  extends Component{
  render() {
    let { name, head, points } = this.props;
    return (
      <figure className="profile">
        <div className="img">
          <img src={head} />
        </div>
        <p className="name">{name}</p>
        <p className="points">积分：{points} 积分</p>
      </figure>
    )
  }
}