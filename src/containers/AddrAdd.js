import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'
import CartBlock from '../components/CartBlock'
import AddrBottom from '../components/AddrBottom'

import * as addrActions from '../actions/address'
import scroll from '../utils/scroll'

class AddrAdd extends Component {
  componentWillMount(){
    let {location,addrs,history} = this.props
    let id = location.query.id
    this.state={
      name:"",
      tel:"",
      addr:''
    }    
    if(!id){
      return 
    }
    let addr = addrs.filter(add=>id==add.id)[0]
    if(!addr){
      history.replace('/')
      return 
    }
    this.update=addr.id
    this.state={
      name: addr.name,
      tel: addr.tel,
      addr: addr.addr,
    }
  }
  componentDidMount(){
    scroll(0)
  }  
  setDefault(){
    this.props.actions.setDefault()
  }
  change(type,e){
    let v=e.target.value
    let refs = ['name','tel','addr']
    this.setState({[refs[type]]: v});
  }
  save(){
    let {actions,moren,setDef,location,history,NowCity,Nowqu} = this.props
    let {name,tel,addr} = this.refs
    
    let value = {
      name:name.value,
      tel:tel.value,
      addr:addr.value,
      moren: location.query.id == moren||setDef,
      userId: user_id
    }

    if(this.update){
      actions.update(this.update,value, function(){
        history.go(-1)
      })
    }else{
      value.cityId = NowCity>0 ? NowCity: cityid
      value.areaId = Nowqu>0 ? Nowqu: areaid

      actions.addSave(value, function(id){
        actions.chooseAddr(id)
        history.go(-1)
      })
    }
  }
  render() { 
    let {history,qus,cities,NowCity,Nowqu,setDef,location,moren} = this.props
    if(!setDef && location.query.id == moren )
      setDef = true
    let city = cities && cities.filter(c=>c.id===NowCity)[0];
    city = city ? city.name: cityname;
    let qu = qus && qus[NowCity] && qus[NowCity].filter(c=>c.id===Nowqu)[0];
    qu = qu ? qu.name: areaname;
    return (
      <div className="addr">
        <NavBack history={history} white="1" transparent="1">
          <span className="tit">
            {
              this.update?
              "更改收货地址"
              :
              "新增收货地址"
            }
          </span>
        </NavBack>
        <ul className="add-list">
          <CartBlock til1="收货" til2="姓名">
            <input placeholder="请输入收货姓名" ref="name" value={this.state.name} onChange={this.change.bind(this,0)}/>
          </CartBlock>
          <CartBlock til1="手机" til2="号码">
            <input placeholder="请输入手机号码" ref="tel" value={this.state.tel} onChange={this.change.bind(this,1)}/>
          </CartBlock>
          <CartBlock til1="收货" til2="地址">
            <span className="dizhi">{city}</span>
            <span className="dizhi">{qu}</span>
          </CartBlock>
          <CartBlock til1="具体" til2="地址">
            <input placeholder="请输入楼栋门牌号" ref="addr" value={this.state.addr} onChange={this.change.bind(this,2)}/>
          </CartBlock>
          <CartBlock til1="设为" til2="默认">
            <span className="icon" onClick={this.setDefault.bind(this)}>
              <i className={setDef ? "iconfont icon-yes":"iconfont icon-yuanquan"}></i>
            </span>
          </CartBlock>
        </ul>
        <AddrBottom desc="保存" action={this.save.bind(this)}/>
      </div>
    )
  }
}

AddrAdd.propTypes = {
  addrs: PropTypes.array.isRequired,
  moren: PropTypes.number.isRequired,
  setDef: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  const {
    addrs,
    moren,
    setDef,
  } = state.address;
  const {
    NowCity,
    Nowqu,
    cities,
    qus,
  } = state.city
  
  return {
    addrs,
    moren,
    setDef,
    cities,
    qus,
    Nowqu,
    NowCity
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
)(AddrAdd)