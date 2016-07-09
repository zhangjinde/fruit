import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'

import NavBack from '../components/NavBack'
import BlockTime from '../components/order/BlockTime'
import BlockProcess from '../components/order/BlockProcess'
import BlockGoods from '../components/order/BlockGoods'

import * as orderActions from '../actions/order'

class OrderState extends Component {
  componentDidMount(){
    const {params, actions, location, NowCity} = this.props;
    let searchs = location.search.substr(1).split('=');
    if(searchs[0]==='type')
      actions.getDetail(searchs[1], params.id, NowCity)
  }
  render() {
    const ord = this.props.order.detail

    return (
      <div className="ord-sta">
        <NavBack history={history} white={true}>
          <span>订单追踪</span>
        </NavBack>
        <div className="body">
          <BlockTime time={ord.arriveTime} state={ord.state}/>              
          <BlockGoods goods={ord.goods || []}/>        
          <BlockProcess history={ord.history}/>  
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
  const {
    NowCity
  } = state.city
  
  return {
    order,
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
)(OrderState)