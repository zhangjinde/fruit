import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as actions from '../actions/cart'

import CartBottom from '../components/CartBottom'
import CartDetail from '../components/CartDetail'
import CartBlock from '../components/CartBlock'

class CartBuy extends Component {
  edit(){
    let { actions } = this.props
    actions.edit()
  }
  add(item,cnt){
    let { actions } = this.props
    actions.add(item,cnt)
  }
  submit(){
    let { actions, cart, history } = this.props
    if(cart.count===0){
      alert('请先购买东西')
      return false;
    }
    //TEST
    alert('提交成功')
    actions.clear()
    history.replace('/')
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
        <CartBlock til1="收货" til2="时间">
          <a>
            {time===''? '请选择收货时间':time}
            <span className="icon right"><i className="fa fa-angle-right"></i></span>
          </a>
        </CartBlock>
        <CartBottom history={history} submit={this.submit.bind(this)}/>
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
    now,
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
    addrs,
    time,    
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartBuy)