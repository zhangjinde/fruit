import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import scroll from '../utils/scroll'

import NavBack from '../components/NavBack'
import CouponItem from '../components/CouponItem'

import Loading from '../components/Loading'
import Error from '../components/Error'
import Empty from '../components/Empty'

import * as couponActions from '../actions/coupon'
import * as cartActions from '../actions/cart'

class Coupon extends Component {
  componentDidMount(){
    this._changeType(1)
    scroll(0)
  }
  _changeType(t){
    let { actions, list1, list2, NowCity } = this.props
    actions.changeType(t)
    if((t==1 && !list1.length) || (t==2 && !list2.length)){
      actions.getCoupon(user_id, t, NowCity||0);
    }
  }
  choose(id, name, restrict, amount){
    const {location, cartActions, type, cartTotal} = this.props;
    if(location.query.choose && type==1){
      if(cartTotal >= restrict){
        cartActions.chooseCoupon(id, name, restrict, amount);
        history.go(-1)      
      }else{
        alert('消费不满额度')
      }
    }
   
  }
  refresh(){
    const {type, actions, NowCity} = this.props;
    actions.getCoupon(user_id, type, NowCity||0);
  }
  render() {
    let { history, type, list1, list2, location, loading, error } = this.props

    return (
      <div className="coupon">
        <NavBack transparent="1" user="1" history={history} white={true}>
          <a className={type==1?"item l active":"item l"} onClick={this._changeType.bind(this,1)}>未使用优惠券</a>
          <a className={type==2?"item r active":"item r"} onClick={this._changeType.bind(this,2)}>已过期优惠券</a>
        </NavBack>
        <ul className="items">
        {
          loading ?
          <Loading/>
          :
          error ?
          <Error/>
          :
          type===1?
          list1.length?
            list1.map(item=>{
              return (
              <CouponItem item={item} isList={!location.query.choose} key={item.id} choose={this.choose.bind(this)} history={history}/>
              )
            })
            :
            <Empty/>
          :
          list2.length?          
            list2.map(item=>{
              return (
              <CouponItem item={item} isList={!location.query.choose} key={item.id} choose={this.choose.bind(this)}/>
              )
            })
            :
            <Empty/>
        }
        </ul>
      </div>
    )
  }
}

Coupon.propTypes = {
  list1: PropTypes.array.isRequired,
  list2: PropTypes.array.isRequired,
  type:  PropTypes.number.isRequired,
  
}

function mapStateToProps(state) {
  const {
    type,
    list1,
    list2,
    loading,
    error
  } = state.coupon;
  const {total} = state.cart
  const {
    NowCity
  } = state.city
  
  return {
    type,
    list1,
    list2,
    loading,
    error,
    NowCity,
    cartTotal:total
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(couponActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Coupon)