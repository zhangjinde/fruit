import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as cartActions from '../actions/cart'
import * as detailActions from '../actions/detail'
import * as cmtActions from '../actions/comment'

import NavBack from '../components/NavBack'
import DetialBottom from '../components/detial/DetialBottom'
import DetialBody from '../components/detial/DetialBody'
import Comment from '../components/detial/Comment'

class Detial extends Component {
  componentDidMount() {
    const {detailActions, params, item, location} = this.props
    if(item.id!=params.id){
      const q = location.query
      this.props.detailActions.getDetail(params.id, q.cityid, q.areaid)
    }
  }
  showCmt(){
    let cmt = this.refs.cmt
    cmt.className='modal show'
    const {detailActions, item} = this.props
    if(!item.comments.length){
      detailActions.getCmt(item.id, item.cityId, item.areaId);
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
      detailActions.like(item.id, item.cityId, item.areaId)
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
  sendCmt(){
    const {item, cmtActions, me} = this.props

    cmtActions.submit({
      name: me.name || '好人',
      id: me.id || user_id,
      head: me.head || '',
      content: this.refs.smtCmt.value,
      pid: item.id,
      cid: item.cityId,
      aid: item.areaId,
    })
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
        <p style={{paddingBottom: '100px'}}>
          <textarea ref="smtCmt"></textarea>
          <button onClick={this.sendCmt.bind(this)}>测试评论提交</button>
        </p>
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
    cmtActions: bindActionCreators(cmtActions, dispatch),
  }
}

function mapStateToProps(state) {
  let item = state.detail,
      cart = state.cart
  const {me} = state
  return {
    item,
    cart,
    me
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detial)