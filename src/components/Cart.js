import React, { Component } from 'react'

export default class Cart extends Component{
  go(){
    let {history,count} = this.props
    if(count>0){
      history.push('/cart/buy')
    }
  }
  render() {
    let { total, count } = this.props
    return (
      <div className="cart-bottom">
        <div className="moving-cart">
          <i className="iconfont icon-cart"></i>
        </div>
        <div className="inner" onClick={this.go.bind(this)}>
          {
            count?
            <span className="num">{count}</span>
            :
            ""
          }
          <a className="icon"><i className="iconfont icon-gouwuche"></i></a>
          <a className="total">{total>0?"去结算 ￥":"￥"}{total.toFixed(2)}</a>        
        </div>
      </div>
    )
  }
}