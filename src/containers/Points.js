import React, { Component, PropTypes } from 'react'
import ReactDom from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'
import ExchangeItem from '../components/points/ExchangeItem'
import UseItem from '../components/points/UseItem'

import * as pointsActions from '../actions/points'

class Points extends Component {
  _changeType(t){
    let { actions } = this.props
    actions.changeType(t)
  }
  render() {
    let { history, type, now, use, exchange, record } = this.props
    return (
      <div className="points">
        <NavBack me={true} history={history} white={true}>
         <span className="canuse">可用积分：{now}</span>
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
              exchange.length?
                exchange.map(item=>{
                  return (
                    <ExchangeItem item={item} key={item.id}/>
                  )
                })
              :
                <p className="empty">空</p>              
            :
            type==3?
              use.length?
                use.map(item=>{
                  return (
                    <UseItem item={item} key={item.id}/>
                  )
                })
              :
                <p className="empty">空</p>
            :
              record.length?
                record.map(item=>{
                  return (
                    <UseItem item={item} key={item.id}/>
                  )
                })
              :
                <p className="empty">空</p>
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
    record
  } = state.points;
  
  return {
    type,
    now,
    use,
    exchange,
    record
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