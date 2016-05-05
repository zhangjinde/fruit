import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'

import * as orderActions from '../actions/order'

class Order extends Component {
  _changeType(t){
    let { actions } = this.props
    actions.changeType(t)
  }
  render() {
    let { history, type } = this.props
    return (
      <div>
        <NavBack me={true} history={history} white={true}>
          <a className={type==1?"item l active":"item l"} onClick={this._changeType.bind(this,1)}>未收货订单</a>
          <a className={type==2?"item r active":"item r"} onClick={this._changeType.bind(this,2)}>已收货订单</a>
        </NavBack>
      </div>
    )
  }
}

Order.propTypes = {
  list1: PropTypes.array.isRequired,
  list2: PropTypes.array.isRequired,
  type:  PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  const {
    type,
    list1,
    list2
  } = state.order;
  
  return {
    type,
    list1,
    list2
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(orderActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)