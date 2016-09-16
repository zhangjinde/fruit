import React, { Component } from 'react'

export default class BlockCmt extends Component{
  render() {
    return (
      <div className="block cmt clearfix">
        <p>
          <a onClick={this.props.showCmt}>
            <i className="iconfont icon-cshy-comment-copy"></i>
            查看评价
          </a>
        </p>
        <p>
          <a href="tel:17002102408">
            <i className="iconfont icon-dianhua"></i>
            电话咨询
          </a>
        </p>
      </div>
    )
  }
}