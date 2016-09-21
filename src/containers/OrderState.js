import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'

import NavBack from '../components/NavBack'
import BlockTime from '../components/order/BlockTime'
import BlockProcess from '../components/order/BlockProcess'
import BlockGoods from '../components/order/BlockGoods'
import BlockTotal from '../components/order/BlockTotal'

import * as orderActions from '../actions/order'
import * as cmtActions from '../actions/comment'

import weipay from '../utils/pay'
import fetch from 'isomorphic-fetch'

class OrderState extends Component {
  constructor(){
    super();
    this.state = {
      disable: false
    }
  }
  componentDidMount(){
    const {params, actions, location, NowCity} = this.props;
    if(location.query.type){
      actions.getDetail(location.query.type, params.id, NowCity)
    }
  }
  pay(){
    const {order, actions, history, params} = this.props
    const {number, receiveTime, receiverName, phoneNumber} = order.detail
    
    if(this.state.disable)return;
    
    this.setState({
      disable: true
    })

    fetch(`${URL}/orderOn/pay3?number=${number}`)
    .then(response => response.json())
    .then(option=>{
      setTimeout(()=>{
        weipay(option, ()=>{
          actions.orderChangeState(order.detail.id || params.id, 4)
          actions.orderFinish({
            orderNo: number,
            arriveTime: receiveTime,
            name: receiverName,
            tel: phoneNumber,
          })
          history.replace('/cart/finish')
        }, ()=>{
          this.setState({
            disable: false
          })
        });
      },0)
    }).catch(()=>{
      alert('尝试支付失败，请重试')
      this.setState({
        disable: false
      })
    })
  }
  confirm(){
    const {order, actions} = this.props
    const {id, cityId, areaId} = order.detail
    
    this.setState({
      disable: true
    })    
    actions.shouhuo(id, cityId, ()=>{
      alert('订单已完成')  
      actions.orderChangeState(id, 5)
      history.go(-1)
    },()=>{
      alert('出错了，请重试')
      this.setState({
        disable: false
      })      
    })
  }  
  submit(){
    const {order, actions} = this.props
    actions.orderChangeState(order.detail.id, 3)
  }
  tui(type){
    const {order, actions} = this.props
    const {id, cityId, areaId} = order.detail
    
    this.setState({
      disable: true
    })    
    actions.tuihuo(id, cityId, type, ()=>{
      if(type==1){
        alert('退款申请中')
      }else{
        alert('已取消订单')
      }
      actions.orderChangeState(id, 6)
      history.go(-1)
    },()=>{
      alert('出错了，请重试')
      this.setState({
        disable: false
      })    
    })
  }
  render() {
    const ord = this.props.order.detail
    const {topay,cmt,confirm,cancel,tui} = this.props.location.query
    const {me, cmtActions} = this.props
    const {disable} = this.state
    return (
      <div className="ord-sta">
        <NavBack history={history} white={true} transparent="1">
          <span>{topay? "支付":confirm?"确认收货":cmt?"评论":tui?"退货管理":cancel?"取消订单":"订单追踪"}</span>
        </NavBack>
        <div className="body">
          {
            topay || cmt || confirm || tui || cancel?
            ""
            :
            <BlockTime time={ord.arriveTime} state={ord.state}/> 
          }           
          <BlockGoods submit={this.submit.bind(this)}  goods={ord.goods || []} cmtActions={cmtActions} me={me} showcmt={cmt}/>
          {
            topay || cmt || confirm || tui || cancel?
            ""
            :
            <BlockProcess history={ord.history}/>  
          }
          {
            topay || confirm?
            <BlockTotal ord={ord}/> 
            :
            ""
          }
        </div>
        <div className="fix-bottom">
          {
            topay?
            <a onClick={this.pay.bind(this)} className={disable?"disable":""}>{disable?"支付中":"立即支付"}</a>
            :
            confirm?
            <a onClick={this.confirm.bind(this)}>确认收货</a>
            :
            tui?
            <a onClick={this.tui.bind(this, 1)}>申请退货</a>
            :
            cancel?
            <a onClick={this.tui.bind(this, 2)}>取消订单</a>
            :
            <a onClick={this.props.history.go.bind(this,-1)}>返回订单列表</a>
          }
        </div>      
      </div>
    )
  }
}

OrderState.propTypes = {
  order: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  const {order, me} = state;
  const {
    NowCity
  } = state.city

  return {
    order,
    NowCity,
    me
  }
}
function mapDispatchToProps(dispatch) {
  return {
    cmtActions: bindActionCreators(cmtActions, dispatch),
    actions: bindActionCreators(orderActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderState)