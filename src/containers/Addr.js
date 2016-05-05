import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'
import AddrBottom from '../components/AddrBottom'
import AddrItem from '../components/AddrItem'

import * as addrActions from '../actions/address'

class Addr extends Component {
  componentWillMount(){
    let {history,addrs} = this.props
    if(addrs.length===0){
      history.replace('/addr/add')
    }
  }
  componentWillUnmount(){
   this.props.actions.clear()
  }
  edit(){
    this.props.actions.edit()
  }
  go(){
    this.props.history.push('/addr/add')
  }
  del(id){
    this.props.actions.del(id)
  }
  render() { 
    let {history,editing,addrs,moren} = this.props
    return (
      <div className="addr">
        <NavBack history={history}>
          <span className="tit">收货地址</span>
          <a className="edit right" onClick={this.edit.bind(this)}>{editing?"完成":"管理"}</a>
        </NavBack>
        <ul className={editing?"addr-list":"addr-list editing"}>
        {
          addrs.map(add=>(
            <AddrItem item={add} key={add.id} moren={add.id===moren} del={this.del.bind(this)} history={history}/>
          ))
        }
        </ul>
        <AddrBottom desc="新增收货地址" action={this.go.bind(this)}/>
      </div>
    )
  }
}

Addr.propTypes = {
  addrs: PropTypes.array.isRequired,
  moren: PropTypes.number.isRequired,
  editing: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  const {
    addrs,
    moren,
    editing,
  } = state.address;
  
  return {
    addrs,
    moren,
    editing,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addrActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Addr)