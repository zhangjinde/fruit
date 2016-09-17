import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Head from '../components/Head'
import MeItem from '../components/MeItem'
import NavBack from '../components/NavBack'

import * as actions from '../actions/me'

class Me extends Component {
  componentDidMount() {
    const {actions,id} = this.props
    if(!id){
      actions.getUser(window.user_id)
    }
  }
  render() { 
    let { name, head, points, history } = this.props  
    return (
      <div className="myinfo">
        <NavBack history={history}></NavBack>
        <Head name={name} head={head} points={points}/>
        <ul>
          <MeItem desc="我的订单" to="/me/order" icon="order"/>
          <MeItem desc="我的优惠券" to="/me/coupon" icon="coupon"/>
          <MeItem desc="我的积分中心" to="/me/points" icon="jifen2"/>        
        </ul>
        <div className="fix-bottom">
          <a className="item">111</a>
          <a className="item">222</a>
          <a className="item">333</a>
        </div>
      </div>
    )
  }
}

Me.propTypes = {
  points: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

function mapStateToProps(state) {
  const {
    points,
    name,
    head,
    id,
  } = state.me;
  
  return {
    points,
    name,
    head,
    id,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Me)