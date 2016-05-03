import React, { Component } from 'react'

export default class CartBlock extends Component{
  render() {
    let {til1,til2} = this.props
    return (
      <div className="block item">
        <div className="l">
          <p>{til1}</p>
          <p>{til2}</p>
        </div>
        <div className="r">
        {this.props.children}
        </div>
      </div>
    )
  }
}