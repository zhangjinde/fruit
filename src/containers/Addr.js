import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'
import AddrBottom from '../components/AddrBottom'
import AddrItem from '../components/AddrItem'

import * as addrActions from '../actions/address'

import scroll from '../utils/scroll'

class Addr extends Component {
  componentWillMount(){
    let {history,addrs} = this.props
    if(addrs.length===0){
      history.replace('/addr/add')
    }
  }
  componentDidMount(){
    scroll(0)
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
    if(confirm('是否确定删除？')){
      this.props.actions.del(id)
    }
  }
  choose(id){
    let {actions,history} = this.props
    actions.chooseAddr(id)
    history.go(-1)
  }
  render() { 
    let {history,editing,addrs,moren} = this.props
    return (
      <div className="addr">
        <NavBack history={history} white="1" transparent="1">
          <span className="tit">收货地址</span>
          <a className="edit right" onClick={this.edit.bind(this)}>{editing?"完成":"管理"}</a>
        </NavBack>
        <ul className={editing?"addr-list":"addr-list editing"}>
        {
          addrs.map(add=>(
            <AddrItem item={add} key={add.id} moren={add.id===moren} del={this.del.bind(this)} history={history} choose={this.choose.bind(this)} editing={editing}/>
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