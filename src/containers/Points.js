import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'
import ExchangeItem from '../components/points/ExchangeItem'
import UseItem from '../components/points/UseItem'

import Loading from '../components/Loading'
import Error from '../components/Error'
import Empty from '../components/Empty'

import scroll from '../utils/scroll'

import * as pointsActions from '../actions/points'

class Points extends Component {
  componentDidMount() {
    const {type} = this.props
    this.getList(type);
    
    scroll(0)
  }
  getList(type){
    const {errorExch, errorRec, errorUse} = this.props
    const { actions, exchange, use, record, NowCity } = this.props
    const cid = NowCity>0 ? NowCity: cityid

    if(type == 1 && (!exchange.length || errorExch) ) {
      actions.getExc(cid);
    }else if(type == 2 && (!record.length || errorRec) ){
      actions.getRec(cid);
    }else if(type == 3 && (!use.length || errorUse) ){
      actions.getUse(cid);
    }
  }
  _changeType(t){
    let { actions } = this.props
    actions.changeType(t)
    this.getList(t);
  }
  exchange(point,id,cityId){
    const {points, actions} = this.props;
    if(points<point){
      alert('积分不够')
    }else{
      if(confirm('确定兑换码？')){
        actions.exchange({
          cityId:cityId,
          couponId:id,
          userId:user_id,
          point
        },()=>{
          alert('兑换成功')
        },()=>{
          alert('兑换失败')
        });
      }
    }
  }
  refresh(){
    const {type, actions, NowCity} = this.props;
    const cid = NowCity>0 ? NowCity: cityid
    if(type==1){
      actions.getExc(cid);
    }
  }  
  render() {
    let { history, type, points, use, exchange, record } = this.props
    const {loadingExch, errorExch, loadingRec, errorRec, loadingUse, errorUse} = this.props

    return (
      <div className="points">
        <NavBack transparent="1" user="1" history={history} white={true}>
         <span className="canuse">可用积分：{points}</span>
        </NavBack>
        <div className="content">
          <ul className="title">
            <li className={type==1?"active":""} onClick={this._changeType.bind(this,1)}>积分兑换</li>
            <li className={type==2?"active":""} onClick={this._changeType.bind(this,2)}>积分记录</li>
            <li className={type==3?"active":""} onClick={this._changeType.bind(this,3)}>兑换历史</li>
          </ul>
          <ul className="items">
          {
            type==1?
              loadingExch?
                <Loading/>
              :
              errorExch?
                <Error/>
              :            
              exchange.length?
                exchange.map(item=>{
                  return (
                    <ExchangeItem item={item} key={item.id} type={type} exchange={this.exchange.bind(this)}/>
                  )
                })
              :
                <Empty/>
            :
            ""
          }
          {
            type==3?
              loadingUse?
                <Loading/>
              :
              errorUse?
                <Error/>
              :            
              use.length?
                use.map(item=>{
                  return (
                    <UseItem item={item} key={item.id} type={type}/>
                  )
                })
              :
                <Empty/>
            :
            ""
          }
          {
            type == 2?
              loadingRec?
                <Loading/>
              :
              errorRec?
                <Error/>
              :                
              record.length?
                record.map(item=>{
                  return (
                    <UseItem item={item} key={item.id}/>
                  )
                })
              :
                <Empty/>
            :
            ""
          }
          </ul>
        </div>
      </div>
    )
  }
}

Points.propTypes = {
  use: PropTypes.array.isRequired,
  exchange: PropTypes.array.isRequired,
  record: PropTypes.array.isRequired,
  type:  PropTypes.number.isRequired,
  now:  PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  const {
    type,
    now,
    use,
    exchange,
    record,
    loadingExch, errorExch, loadingRec, errorRec, loadingUse, errorUse
  } = state.points;
  
  const {
    NowCity
  } = state.city
  
  const {
    points
  } = state.me
  return {
    type,
    now,
    use,
    exchange,
    record,
    NowCity,
    loadingExch, errorExch, loadingRec, errorRec, loadingUse, errorUse,
    points
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pointsActions, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Points)