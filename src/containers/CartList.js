import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class CartList extends Component {
  go(){
    let { history } = this.props
    history.push('/cart/buy')
  }
  render() { 
    let { name, head, points } = this.props  
    return (
      <div onClick={this.go.bind(this)}>
      购买
      </div>
    )
  }
}

CartList.propTypes = {
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
)(CartList)