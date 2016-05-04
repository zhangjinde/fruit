import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Head from '../components/Head'
import MeItem from '../components/MeItem'
import NavBack from '../components/NavBack'

class Me extends Component {
  render() { 
    let { name, head, points, history } = this.props  
    return (
      <div className="myinfo">
        <NavBack history={history}></NavBack>
        <Head name={name} head={head} points={points}/>
        <ul>
          <MeItem desc="我的订单" to="/me/order"/>
          <MeItem desc="我的优惠券" to="/me/coupon"/>
          <MeItem desc="我的积分中心" to="/me/points"/>        
        </ul>
      </div>
    )
  }
}

Me.propTypes = {
  points: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  const {
    points,
    name,
    head,
  } = state.me;
  
  return {
    points,
    name,
    head,
  }
}

export default connect(
  mapStateToProps
)(Me)