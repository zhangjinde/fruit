import React, { Component } from 'react'
import {Link} from 'react-router'

export default class BlockTime extends Component{
  render() {
    let {time,state} =this.props
    return (
      <div className="block time">
        <p className='s'>收货时间：{time}</p>
      </div>
    )
  }
}