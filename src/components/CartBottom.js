import React, { Component } from 'react'

export default class CartBottom extends Component{
  back(){
    this.props.history.go(-1)
  }
  render() {
    let {submit} = this.props
    return (
      <div className="fix-bottom">
        <a className="back" onClick={this.back.bind(this)}>
          <span className="icon"><i className="fa fa-angle-left fa-2x"></i></span>
          返回购物          
        </a>
        <a className="btn-buy" onClick={submit}>
          提交订单
          <span className="icon"><i className="fa fa-angle-right fa-2x"></i></span>
        </a>
      </div>
    )
  }
}