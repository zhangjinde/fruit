import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component{
  changeCity(){
    this.props.history.push('/city')
  }
  changeType(t){
    const {changeType, type} = this.props
    
    if(t!=type){
      changeType(t)
    }
  }
  render() {
    let {type,city,qu, catalog} = this.props;
    return (
      <nav className="blue">
        <a onClick={this.changeCity.bind(this)} className="city">
          <p><span>{city}</span></p>
          <p><span>{qu.length>4?qu.substr(0,4):qu}</span></p>
        </a>
        <div className="items">
          <Link to="" className={type==1 ? "item active":"item"} onClick={this.changeType.bind(this,1)}>{catalog[0] || '分类'}</Link>
          <Link to="" className={type==2 ? "item active":"item"} onClick={this.changeType.bind(this,2)}>{catalog[1]}</Link>
          <Link to="" className={type==3 ? "item active":"item"} onClick={this.changeType.bind(this,3)}>{catalog[2]}</Link>
          <Link to="" className={type==4 ? "item active":"item"} onClick={this.changeType.bind(this,4)}>{catalog[3]}</Link>
        </div>
        <Link to="/me" className="me">
          <i className="iconfont icon-40one"></i>
        </Link>
      </nav>
    )
  }
}