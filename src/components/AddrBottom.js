import React, { Component } from 'react'

export default class AddrBottom extends Component{
  render() {
    let { action, desc } = this.props
    return (
      <div className="fix-bottom" onClick={action}>
        <a className="addr-btn">{desc}</a> 
      </div>
    )
  }
}