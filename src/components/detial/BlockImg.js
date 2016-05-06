import React, { Component } from 'react'

export default class BlockImg extends Component{
  render() {
    let {img} = this.props
    return (
      <div className="block">
        <img src={img} />
      </div>
    )
  }
}