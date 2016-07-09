import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as cartActions from '../actions/cart'
import * as fruitActions from '../actions/'

import Nav from '../components/Nav'
import Cart from '../components/Cart'
import FruitList from '../components/FruitList'

import {move} from '../utils/animate'

class Fruit extends Component {
  componentDidMount(){
    const {list, fruitActions, loading, error, NowCity, Nowqu} = this.props
    if(error || !list.length){
      fruitActions.getList(NowCity, Nowqu)
    }
  }
  add(item,elem,hide,cart){
    this.props.actions.add(item,1)
    
    if(hide)
      return ;
    let bottomCart = ReactDom.findDOMNode(this.refs.cart)
    let start = elem.getBoundingClientRect(),
        end   = bottomCart.getBoundingClientRect()

    move(cart, {
      start,
      end,
    },function before(){
      cart.style.display='block'
      bottomCart.className="cart-bottom move"
    },function cb(){
      cart.style.display='none'
      bottomCart.className="cart-bottom"
    })      
  }
  render() { 
    let { list, total, count, history, cartPos, loading, error,
      cities, qus, NowCity, Nowqu, goods, actions } = this.props
    let city = cities && cities.filter(c=>c.id===NowCity)[0];
    let qu = qus && qus[NowCity] && qus[NowCity].filter(c=>c.id===Nowqu);
      city = (city && city.name) || cityname;    
      qu = (qu && qu[0] && qu[0].name) || areaname;
    return (
      <div>
        <Nav type="1" history={history} city={city} qu={qu}/>
        <FruitList list={list} add={this.add.bind(this)} 
          cartPos={cartPos} goods={goods} actions={actions}
          loading={loading} error={error}
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
    list,
    loading,
    error
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
    list,
    total,
    count,
    cartPos:position,
    goods,
    cities,
    qus,
    NowCity,
    Nowqu,
    loading,
    error
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fruit)