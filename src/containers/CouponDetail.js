import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'

import * as couponActions from '../actions/coupon'

import scroll from '../utils/scroll'

class CouponDetail extends Component {
  componentDidMount(){
    const {actions, params, detail,location} = this.props;
    if(detail.id != params.id)
      actions.getCouponDetail(params.id, location.query.cityId)
      
    scroll(0)
  }
  render() {
    let { history, detail } = this.props
    return (
      <div className="coupon-det">
        <NavBack history={history} white={true} transparent="1">
          <span>代金券详情</span>
        </NavBack>
        <div className="img block">
          <img src={detail.img2} />
        </div>
        <div className="block">
          <ul>
            <li>
              <span className="tit left">
                优惠金额：
              </span>
              <span className="desc left">
                {detail.discount}
              </span>
              <p className="clear"></p>
            </li>
            <li>
              <span className="tit left">
                有效期：
              </span>
              <span className="desc left">
                {detail.time}到{detail.deadline}
              </span>
              <p className="clear"></p>
            </li>
            <li>
              <span className="tit left">
                使用限制：
              </span>
              <span className="desc left">
                {detail.qianti}
              </span>
              <p className="clear"></p>
            </li>
            <li>
              <span className="tit left">
                获取日期：
              </span>
              <span className="desc left">
                {detail.time}
              </span>
              <p className="clear"></p>
            </li>
            <li>
              <span className="tit left">
                优惠券说明：
              </span>
              <span className="desc left">
                {detail.detail}
              </span>
              <p className="clear"></p>
            </li>          
          </ul>        
        </div>
      </div>
    )
  }
}

CouponDetail.propTypes = {
  detail: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {
    detail,
  } = state.coupon;
  
  return {
    detail,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(couponActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CouponDetail)