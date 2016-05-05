import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as cartActions from '../actions/cart'

import Nav from '../components/Nav'
import Cart from '../components/Cart'
import FruitList from '../components/FruitList'

class Fruit extends Component {
  componentDidMount() {
    let { props, refs } = this
    props.actions.updPos(ReactDom.findDOMNode(refs.cart).getBoundingClientRect())
  }

  render() { 
    let { list, total, history, cartPos, cities, qus, NowCity, Nowqu, goods, actions } = this.props
    let city = cities.filter(c=>c.id===NowCity)[0].name
    let qu = qus[NowCity].filter(c=>c.id===Nowqu)[0].name
    return (
      <div>
        <Nav type="1" history={history} city={city} qu={qu}/>
        <FruitList list={list} cartPos={cartPos} goods={goods} actions={actions}/>
        <Cart total={total} history={history} ref='cart'/>
      </div>
    )
  }
}

Fruit.propTypes = {
  list: PropTypes.array.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch)
  }
}

function mapStateToProps(state) {
  const {
    list
  } = state.fruit;
  
  const {
    total,
    position,
    goods,
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
    cartPos:position,
    goods,
    cities,
    qus,
    NowCity,
    Nowqu    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fruit)