import React, { Component } from 'react'

export default class BlockCmt extends Component{
  render() {
    const {phone} = this.props;
    return (
      <div className="block cmt clearfix">
        <div>
          <a onClick={this.props.showCmt} className="bor">
            <p className="icon"><i className="iconfont icon-cshy-comment-copy"></i></p>
            <p>查看评价</p>
          </a>
        </div>
        <div>
          <a href={"tel:"+phone}>
            <p className="icon"><i className="iconfont icon-dianhua"></i></p>
            <p>电话咨询</p>
          </a>
        </div>
      </div>
    )
  }
}