import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import NavBack from '../components/NavBack'

class CartFinish extends Component {
  render() {
    let { order, history } = this.props
    let ordId=order.now
    let ord=order.list1.filter(o=>{
      return o.id===ordId
    })[0]
    ord = ord || order.list2.filter(o=>{
      return o.id===ordId
    })[0]
    return (
      <div className="finish">
        <NavBack history={history} />
        <div className="tit">
          <div className="icon">
            <i className="fa fa-check-circle"></i>
          </div>
          <div className="desc">
            <p>亲，您已成功下单</p>
            <p>订单号：{ord.orderNo}</p>
          </div>
        </div>
        <p className="img">
          <img src="/img/songhuo.png"/>
        </p>
        <p className="img-txt">送货员正全力奔向你啦~</p>
        <p className="detail">
          我们将在
          <span className="color">{ord.arriveTime}</span>
          将产品送达
          <span className="color">{ord.name}</span>的手中，请保持电话
          <span className="color">{ord.tel}</span>畅通
        </p>
        <p className="bei">我们会尽快将。。。。。</p>
        <div className="fix-bottom">
          <Link to="/" className="zhi">我知道了</Link>
          <Link to="/me/order" className="cha">查看我的订单</Link>
        </div>
      </div>
    )
  }
}

CartFinish.propTypes = {
  order: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const order = state.order;
  
  return {
    order
  }
}

export default connect(
  mapStateToProps
)(CartFinish)