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
import Loading from '../components/Loading'

import * as orderActions from '../actions/order'
import * as cmtActions from '../actions/comment'

import weipay from '../utils/pay'
import fetch from 'isomorphic-fetch'

class OrderState extends Component {
  constructor(){
    super();
    this.state = {
      show: false,
      loading:true
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
    this.setState({
      show: true
    })
    console.log(order)
    fetch(`${URL}/orderOn/pay3?number=${order.detail.number}`)
    .then(response => response.json())
    .then(option=>{
      this.setState({
        loading: false
      })    
      setTimeout(()=>{
        weipay(option);
      },0)
    })
   // actions.orderChangeState(order.detail.id || params.id, 4)
    //history.go(-1)
  }
  confirm(){
    const {order, actions} = this.props
    const {id, cityId, areaId} = order.detail
    actions.shouhuo(id, cityId, ()=>{
      alert('订单已完成')
      actions.orderChangeState(id, 5)
      history.go(-1)
    },()=>{
      alert('出错了，请重试')
    })
  }  
  submit(){
    const {order, actions} = this.props
    actions.orderChangeState(order.detail.id, 3)
  }
  tui(){
    const {order, actions} = this.props
    const {id, cityId, areaId} = order.detail
    actions.tuihuo(id, cityId, ()=>{
      alert('订单已完成')
      actions.orderChangeState(id, 6)
      history.go(-1)
    },()=>{
      alert('出错了，请重试')
    })
  }
  close(){
    this.setState({
      show: false,
      loading: true
    })
  }
  render() {
    const ord = this.props.order.detail
    const {topay,cmt,confirm} = this.props.location.query
    const {me, cmtActions} = this.props
    const isr = this.props.location.query.return
    const {show, loading} = this.state
    return (
      <div className="ord-sta">
        <div className={show ? "modal show padded" : 'modal'}>
          <p className="close"><i className="fa fa-close" onClick={this.close.bind(this)}></i></p>
          <div className="wrap" ref="wrap">
          {
            loading?
              <Loading />
            :
              <div className="wxapi_container">
                <div className="lbox_close wxapi_form">
                  <button className="btn btn_primary" id="chooseWXPay">支付订单</button>
                </div>
              </div> 
          }

          </div>
        </div>
        <NavBack history={history} white={true}>
          <span>{topay? "支付":confirm?"确认收货":cmt?"评论":isr?"退货管理":"订单追踪"}</span>
        </NavBack>
        <div className="body">
          {
            topay || cmt || confirm || isr?
            ""
            :
            <BlockTime time={ord.arriveTime} state={ord.state}/> 
          }           
          <BlockGoods submit={this.submit.bind(this)}  goods={ord.goods || []} cmtActions={cmtActions} me={me} showcmt={cmt}/>
          {
            topay || cmt || confirm || isr?
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
            <a onClick={this.pay.bind(this)}>立即支付</a>
            :
            confirm?
            <a onClick={this.confirm.bind(this)}>确认收货</a>
            :
            isr?
            <a onClick={this.tui.bind(this)}>申请退货</a>
            :
            <a onClick={this.props.history.go.bind(this,-1)}>好的我知道了</a>
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