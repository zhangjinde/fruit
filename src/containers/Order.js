import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'
import OrderItem from '../components/order/OrderItem'

import * as orderActions from '../actions/order'

class Order extends Component {
  componentDidMount(){
    this._changeType(1);
  }
  _changeType(t){
    let { actions, list1, list2 } = this.props
    actions.changeType(t)
    if(t==1 && !list1.length){
      actions.getList(1, user_id)
    }else if(t==2 && !list2.length){
      actions.getList(2, user_id)
    }
  }
  render() {
    let { history, type, list1, list2 } = this.props

    let list = type===1?list1:list2
    return (
      <div>
        <NavBack me={true} history={history} white={true}>
          <a className={type==1?"item l active":"item l"} onClick={this._changeType.bind(this,1)}>未收货订单</a>
          <a className={type==2?"item r active":"item r"} onClick={this._changeType.bind(this,2)}>已收货订单</a>
        </NavBack>
        <ul className="order-list">
        {
          list.map(item=>(
            <OrderItem item={item} key={item.id} type={type}/>
          ))
        }
        </ul>
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