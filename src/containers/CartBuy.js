import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as actions from '../actions/cart'
import * as addrActions from '../actions/address'
import * as orderActions from '../actions/order'
import * as cartActions from '../actions/cart'

import CartBottom from '../components/CartBottom'
import CartDetail from '../components/CartDetail'
import CartBlock from '../components/CartBlock'
import Time from '../components/Time'
import Loading from '../components/Loading'

import * as cfg from '../utils/config'

const timeOp = cfg.default.Time

class CartBuy extends Component {
  componentWillMount(){
    if( this.props.cart.count===0){
      this.props.history.replace('/')
    }
  }
  componentDidMount(){
    const {addrActions, addrs, NowCity, Nowqu} = this.props

    if(!addrs || !addrs.length)
      addrActions.getList(NowCity,Nowqu,user_id);
  }
  edit(){
    let { actions } = this.props
    actions.edit()
  }
  add(item,cnt){
    let { actions, cart } = this.props
    actions.add(item,cnt)
  }
  submit(){
    let { actions, orderActions, cart, history, time, now, addrs, NowCity, Nowqu } = this.props
    if(cart.count===0){
      alert('请先购买东西')
      return false;
    }
    if(!time){
      alert('请选择收货时间')
      return false;
    }
    let addr = addrs.filter(add=>add.id===now)[0];
    if(!now || !addr){
      alert('请选择收货地址')
      return false;
    }
    cart.time = time<0 ? '立即配送' : timeOp.getDay(time, true)+" "+timeOp.getText(time, true);   
    cart.addr = addr;
    cart.cityId = NowCity
    cart.areaId = Nowqu
    
    this.refs.wait.className="modal show"
    
    actions.submit(cart, (id, val)=>{
      this.refs.wait.className="modal"
      alert('提交成功')
      orderActions.orderFinish({
        orderNo: id,
        arriveTime: time,
        name: addr.name,
        tel: addr.tel,
      })
      actions.clear();
      history.replace('/cart/finish')
    }, ()=>{
      this.refs.wait.className="modal"
      alert('提交失败，请重试')
    })
  }
  showTime(){
    this.refs.modal.className="modal show"
  }
  chTime(t){
    this.refs.modal.className="modal"
    this.props.addrActions.chooseTime(t)
  }
  chooseCoup(e){
    const {history, cartActions} = this.props;
    if(e.target.id){
      cartActions.clearCoupon();
    }else{
      history.push('/me/coupon?choose=1')
    }
  }
  render() { 
    let { name, head, points, cart, history, time, addrs, now, moren } = this.props
    let dizhi = addrs.filter(add=>add.id===now)[0]

    if(!dizhi)
      dizhi = addrs.filter(add=>add.id===moren)[0]
    return (
      <div className='cart-buy'>
        <CartDetail cart={cart} edit={this.edit.bind(this)} add={this.add.bind(this)}/>
        <CartBlock til1="送货" til2="方式">
          <a>
            送货上门
            <span className="icon"><i className="fa fa-check-circle"></i></span>
          </a>
        </CartBlock>
        <CartBlock til1="收货" til2="信息">
          <Link to="/addr" className="two">
            {
              dizhi?
              <div className="dizhi">
                <p>
                  <span className="name">{dizhi.name}</span>
                  <span className="tel">{dizhi.tel}</span>
                </p>
                <p>
                  {dizhi.addr}
                </p>
              </div>
              :
              <div>请选择收货地址</div>
            }
            <span className="icon"><i className="fa fa-angle-right"></i></span>
          </Link>        
        </CartBlock>
        <CartBlock til1="付款" til2="方式">
          <a>
            <img src="/img/weixin.jpg" />
            微信安全支付
             <span className="icon"><i className="fa fa-check-circle"></i></span>
          </a>
        </CartBlock>
        <CartBlock til1="优惠" til2="券">
        {
          cart.couponId?
          <div className="dizhi">
            <div className='choose' onClick={this.chooseCoup.bind(this)}>
              使用优惠券：
              <span className='you'>{cart.couponName}</span>
              <span className="icon">
                <i id="clear" className="fa fa-close"></i>
              </span>
            </div>
          </div>
          :
          <div className="dizhi choose"><Link to="/me/coupon?choose=1">请选择优惠券</Link></div>
        }
        </CartBlock>        
        <CartBlock til1="收货" til2="时间">
          <a onClick={this.showTime.bind(this)}>
            {!time? '请选择收货时间': time<0 ? '立即配送' : timeOp.getDay(time)+" "+timeOp.getText(time)}
            <span className="icon right"><i className="fa fa-angle-right"></i></span>
          </a>
        </CartBlock>
        <CartBottom history={history} submit={this.submit.bind(this)}/>
        <div className="modal" ref="modal">
          <Time chTime={this.chTime.bind(this)}/>
        </div>
        <div className="modal" ref="wait">
          <div className='center'>
             <Loading/>
             <p className='txt'>提交中...</p>
          </div>
        </div>   
      </div>
    )
  }
}

CartBuy.propTypes = {
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
  
  const {
    NowCity,
    Nowqu
  } = state.city
  
  const {
    now,
    moren,
    addrs,
    time,
  } = state.address
  const cart = state.cart
  
  return {
    points,
    name,
    head,
    cart,
    now,
    moren,
    addrs,
    time,
    NowCity,
    Nowqu
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
    addrActions: bindActionCreators(addrActions, dispatch),
    orderActions: bindActionCreators(orderActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartBuy)