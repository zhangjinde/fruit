import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'
import OrderItem from '../components/order/OrderItem'

import Loading from '../components/Loading'
import Error from '../components/Error'
import Empty from '../components/Empty'

import * as orderActions from '../actions/order'

import scroll from '../utils/scroll'

class Order extends Component {
  componentDidMount(){
    const {type} = this.props
    this._changeType(+type);
    
    scroll(0)
  }
  componentWillUnmount(){
    this.props.actions.orderChangeState();
  }
  _changeType(t){
    let { actions, list1, list2, NowCity, outdate1, outdate2 } = this.props
    actions.changeType(t)
    if(t==1 && outdate1){
      actions.getList(1, user_id, NowCity)
    }else if(t==2 && outdate2){
      actions.getList(2, user_id, NowCity)
    }
  }
  refresh(){
    const {type, actions, NowCity} = this.props;
    if(type==1){
      actions.getList(1, user_id, NowCity)
    }else{
      actions.getList(2, user_id, NowCity)
    }
  }
  render() {
    let { history, type, list1, list2,loading, error } = this.props

    let list = type===1?list1:list2
    return (
      <div>
        <NavBack transparent="1" user="1" history={history} white={true}>
          <a className={type==1?"item l active":"item l"} onClick={this._changeType.bind(this,1)}>未收货订单</a>
          <a className={type==2?"item r active":"item r"} onClick={this._changeType.bind(this,2)}>已收货订单</a>
        </NavBack>
        <ul className="order-list">
        {
          loading?
            <Loading/>
          :
          error?
            <Error/>
          :
          list.length?
          list.map(item=>(
            <OrderItem item={item} key={item.id} type={type}/>
          ))
          :
            <Empty/>
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
    list2,
    loading,
    error,
    outdate1,
    outdate2,
  } = state.order;
  
  const {
    NowCity
  } = state.city
  
  return {
    type,
    list1,
    list2,
    loading,
    error,
    outdate1,
    outdate2,
    NowCity 
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