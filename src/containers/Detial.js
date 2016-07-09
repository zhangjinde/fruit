import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as cartActions from '../actions/cart'
import * as detailActions from '../actions/detail'

import NavBack from '../components/NavBack'
import DetialBottom from '../components/detial/DetialBottom'
import DetialBody from '../components/detial/DetialBody'
import Comment from '../components/detial/Comment'

class Detial extends Component {
  componentDidMount() {
    const {detailActions, params, item} = this.props
    if(item.id!=params.id)
      this.props.detailActions.getDetail(params.id)
  }
  showCmt(){
    let cmt = this.refs.cmt
    cmt.className='modal show'
    const {detailActions, item} = this.props
    if(!item.comments.length){
      detailActions.getCmt(item.id);
    }
  }
  hideCmt(e){
    let cmt = this.refs.cmt
    if(e.target.className.indexOf('comment')){
      cmt.className='modal'    
    }
  }
  like(){
    let {detailActions,item} = this.props
    if(!item.like){
      detailActions.like(item.id)
    }else{
      detailActions.unlike(item.id)
    }
  }
  add(cnt){
    let { actions, item } = this.props
    actions.add(item,cnt)
  }
  cmtLike(id, cityId, areaId){
    const {detailActions} = this.props
    detailActions.cmtLike(id, cityId, areaId)
  }
  render() { 
    let {history,item,cart} = this.props
    let good = cart.goods.filter(g=>{
      return g.id===item.id
    })
    return (
      <div className="detial">
        <NavBack  history={history}/>
        <DetialBody showCmt={this.showCmt.bind(this)} item={item} like={this.like.bind(this)}/>
        <DetialBottom num={good.length?good[0]['count']:0} history={this.props.history} add={this.add.bind(this)} status={item.status}/>
        <div className="modal" ref="cmt">
          <Comment comments={item.comments} hideCmt={this.hideCmt.bind(this)} like={this.cmtLike.bind(this)}
            loading={item.cmtLoading} error={item.cmtError}
          />
        </div>
      </div>
    )
  }
}

Detial.propTypes = {
  item: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cartActions, dispatch),
    detailActions: bindActionCreators(detailActions, dispatch),
  }
}

function mapStateToProps(state) {
  let item = state.detail,
      cart = state.cart
  return {
    item,
    cart,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detial)