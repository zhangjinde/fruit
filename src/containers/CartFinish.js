import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import NavBack from '../components/NavBack'
import * as cfg from '../utils/config'

const timeOp = cfg.default.Time

class CartFinish extends Component {
  componentWillMount(){
    let { finish, history } = this.props
    
    if(!finish.orderNo){
      history.replace('/')
    }
  }
  render() {
    let { finish, history } = this.props
    return (
      <div className="finish">
        <div className="tit">
          <div className="icon">
            <i className="fa fa-check-circle"></i>
          </div>
          <div className="desc">
            <p className="b">亲，你已成功下单</p>
            <p className="s">订单号：{finish.orderNo}</p>
          </div>
        </div>
        <p className="img">
          <img src="/img/songhuo.png"/>
        </p>
        <p className="img-txt">送货员正全力奔向你啦~</p>
        <p className="detail">
          我们将在
          <span className="color">{finish.arriveTime}</span>
          将产品送达
          <span className="color">{finish.address}{finish.name}</span>的手中，请保持电话
          <span className="color">{finish.tel}</span>畅通！
        </p>
        <p className="bei">
          我们会尽快将产品送到你手中，有任何疑问，欢迎拨打我们的热线电话！
        </p>
        <div className="fix-bottom">
          <Link to="/" className="zhi">我知道了</Link>
          <Link to="/me/order" className="cha">查看我的订单</Link>
        </div>
      </div>
    )
  }
}

CartFinish.propTypes = {
  finish: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {finish} = state.order;
  return {
    finish
  }
}

export default connect(
  mapStateToProps
)(CartFinish)