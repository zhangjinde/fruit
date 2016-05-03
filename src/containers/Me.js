import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Head from '../components/Head'
import MeItem from '../components/MeItem'

class Me extends Component {
  back(){
    let { history } = this.props
    history.go(-1)
  }
  render() { 
    let { name, head, points } = this.props  
    return (
      <div className="myinfo">
        <p className="nav-back">
          <i className="icon back" onClick={this.back.bind(this)}>返回</i>
        </p>      
        <Head name={name} head={head} points={points}/>
        <ul>
          <MeItem desc="我的订单"/>
          <MeItem desc="我的优惠券"/>
          <MeItem desc="我的积分中心"/>        
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