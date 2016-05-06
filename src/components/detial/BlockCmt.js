import React, { Component } from 'react'

export default class BlockCmt extends Component{
  render() {
    return (
      <div className="block cmt">
        <p><img src=""/></p>
        <p onClick={this.props.showCmt}>查看评价</p>
      </div>
    )
  }
}