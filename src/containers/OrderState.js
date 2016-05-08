import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'

import NavBack from '../components/NavBack'
import BlockTime from '../components/order/BlockTime'
import BlockProcess from '../components/order/BlockProcess'
import BlockGoods from '../components/order/BlockGoods'

class OrderState extends Component {
  componentWillMount(){
    let id=this.props.params.id
    let order=this.props.order
    let ord=order.list1.filter(item=>{
      return item.id==id
    })[0]
    ord=ord|| order.list2.filter(item=>{
      return item.id==id
    })[0]
    this.ord=ord
  }
  render() {
    return (
      <div className="ord-sta">
        <NavBack history={history} white={true}>
          <span>订单追踪</span>
        </NavBack>
        <div className="body">
          <BlockTime time={this.ord.arriveTime} state={this.ord.state}/>              
          <BlockGoods goods={this.ord.goods}/>        
          <BlockProcess order={this.ord}/>  
        </div>
        <div className="fix-bottom">
          <a onClick={this.props.history.go.bind(this,-1)}>好的我知道了</a>
        </div>
      </div>
    )
  }
}

OrderState.propTypes = {
  order: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const order = state.order;
  
  return {
    order,
  }
}
export default connect(
  mapStateToProps
)(OrderState)