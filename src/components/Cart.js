import React, { Component } from 'react'

export default class Cart extends Component{
  go(){
    let {history} = this.props
    history.push('/cart/buy')
  }
  render() {
    let { total } = this.props
    return (
      <div className="cart-bottom" onClick={this.go.bind(this)}>
        <a className="icon"><i className="fa fa-shopping-cart fa-2x"></i></a>
        <a className="total">￥{total.toFixed(2)}</a>
      </div>
    )
  }
}