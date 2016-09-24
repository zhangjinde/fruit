import React, { Component } from 'react'

export default class CartBlock extends Component{
  render() {
    let {til1, til2, type, num} = this.props
    return (
      <div className="block item">
        <div className="l">
          <p>{til1}</p>
          <p>{til2}</p>
        </div>
        <div className="r">
        {this.props.children}
        </div>
        {
          num?
          <div>-￥{num}</div>
          :
          ""
        }
        <a className={type==1?"icon":"icon w"}>
        {
          type==1?
          <i className="iconfont icon-yes"></i>
          :
          type==2?
          <i className="iconfont icon-jiantou"></i>
          :
          ""
        }
        </a>
      </div>
    )
  }
}