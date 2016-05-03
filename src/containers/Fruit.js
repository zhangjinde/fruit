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
    let { list, total, history, cartPos } = this.props
    
    return (
      <div>
        <Nav type="1" />
        <FruitList list={list} cartPos={cartPos}/>
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
    position
  } = state.cart;
  
  return {
    list,
    total,
    cartPos:position
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fruit)