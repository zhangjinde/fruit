import React, { Component } from 'react'
import {Link} from 'react-router'

export default class BlockTime extends Component{
  render() {
    let {time,state} =this.props
    return (
      <div className="block time">
        <p className='s'>收货时间：{time}</p>
        <p className='t'>
        {
          state===1?
          "等待配送人员配送"
          :
          state===2?
          "配送人员已送出请耐心等待"
          :
          state===3?
          "已收货"
          :
          "已取消订单"
        }
        </p>
      </div>
    )
  }
}