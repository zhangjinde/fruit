import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as cartActions from '../actions/cart'
import * as fruitActions from '../actions/'

import Nav from '../components/Nav'
import Cart from '../components/Cart'
import Rocket from '../components/Rocket'
import FruitList from '../components/FruitList'

import {move} from '../utils/animate'
import scroll from '../utils/scroll'

class Fruit extends Component {
  componentDidMount(){
    const {list, fruitActions, loading, error, NowCity, Nowqu} = this.props
    if(error || !list.length){
      fruitActions.getList(NowCity, Nowqu)
    }
    const addFuc = ()=>{
      const rocket = ReactDOM.findDOMNode(this.refs.rocket);
      document.addEventListener('scroll', (e)=>{
        const h = document.body.scrollTop;
        if(h>300){
          rocket.className = 'rocket'
        }else{
          rocket.className = 'rocket hide'
        }
      },false)
    }
    setTimeout(()=>{
      addFuc();
    },500)
    scroll(0)
  }
  componentWillUnmount(){
    document.body.onscroll=null;
  }
  add(item,elem,hide,cart){
    this.props.actions.add(item,1)
    
    if(hide)
      return ;
    cart.style.display='block'
    
    const bottomCart = ReactDom.findDOMNode(this.refs.cart)
    const receiveCart = ReactDom.findDOMNode(this.refs.cart).querySelector('.moving-cart')
    const s = elem.getBoundingClientRect(),
        e = bottomCart.getBoundingClientRect(),
        c = cart.getBoundingClientRect();
        
    const start = {
      left: s.left,
      top: s.top,
    }
    const end = {
      top: e.top-c.height,
      left: e.width/2-c.width
    }
    
    move(cart, {
      start,
      end,
    },function before(){
      receiveCart.style.opacity = '1'
      receiveCart.style['z-index'] = '1'
      bottomCart.className="cart-bottom moving"
    },function cb(){
      cart.style.display='none'
      setTimeout(()=>{
        receiveCart.style.opacity = '0'
        receiveCart.style['z-index'] = '-1'
      },500)
      bottomCart.className="cart-bottom"
    })      
  }
  changeType(t){
    const {fruitActions} = this.props
    fruitActions.changeType(t);
    scroll(0)
  }
  render() { 
    let { list, list2, list3, list4, total, count, history, cartPos, loading, error, type,
      cities, qus, NowCity, Nowqu, goods, actions, catalog, banners } = this.props
    let city = cities && cities.filter(c=>c.id===NowCity)[0];
    let qu = qus && qus[NowCity] && qus[NowCity].filter(c=>c.id===Nowqu);
      city = (city && city.name) || cityname;    
      qu = (qu && qu[0] && qu[0].name) || areaname;

    const nowType = catalog[type-1]
    
    list = list.filter(l=>{
      return l.catalog == nowType
    })
    
    const banner = (banners || []).filter(l=>{
      return l.catalogName == nowType
    })[0]

    return (
      <div>
        <Rocket ref='rocket'/>
        <Nav catalog={catalog} type={type} history={history} city={city} qu={qu} changeType={this.changeType.bind(this)}/>
        <FruitList list={list} add={this.add.bind(this)} 
          cartPos={cartPos} goods={goods} actions={actions}
          loading={loading} error={error}
          banner={banner}
        />
        <Cart total={total} history={history} ref='cart' count={count}/>
      </div>
    )
  }
}

Fruit.propTypes = {
  list: PropTypes.array.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch),
    fruitActions: bindActionCreators(fruitActions, dispatch),
  }
}

function mapStateToProps(state) {
  const {
    list, list2, list3, list4,
    loading,
    error,
    type,
    catalog,
    banners
  } = state.fruit;

  const {
    total,
    position,
    goods,
    count,
  } = state.cart;
  
  const {
    cities,
    qus,
    NowCity,
    Nowqu
  } = state.city
  
  return {
    list, list2, list3, list4,
    catalog,
    total,
    count,
    cartPos:position,
    goods,
    cities,
    qus,
    NowCity,
    Nowqu,
    loading,
    error,
    type,
    banners
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fruit)