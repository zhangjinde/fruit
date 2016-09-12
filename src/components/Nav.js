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
    let {type,city,qu} = this.props;
    return (
      <nav className="blue">
        <a onClick={this.changeCity.bind(this)} className="item city">
          <p>{city}</p>
          <p>{qu}</p>
        </a>
        <Link to="" className={type==1 ? "item active":"item"} onClick={this.changeType.bind(this,1)}>水果</Link>
        <Link to="" className={type==2 ? "item active":"item"} onClick={this.changeType.bind(this,2)}>食材</Link>
        <Link to="" className={type==3 ? "item active":"item"} onClick={this.changeType.bind(this,3)}>零食</Link>
        <Link to="" className={type==4 ? "item active":"item"} onClick={this.changeType.bind(this,4)}>省钱</Link>
        <Link to="/me" className="item me">
          <i className="fa fa-user"></i>
        </Link>
      </nav>
    )
  }
}