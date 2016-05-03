import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component{
  changeCity(){
    console.log(1)
  }
  render() {
    let {type} = this.props;
    return (
      <nav className="blue">
        <div onClick={this.changeCity.bind(this)} className="item city">
          <p>珠海</p>
          <p>啊啊</p>
        </div>
        <Link to="" className={type==1 ? "item active":"item"}>水果</Link>
        <Link to="" className={type==2 ? "item active":"item"}>食材</Link>
        <Link to="" className={type==3 ? "item active":"item"}>零食</Link>
        <Link to="" className={type==4 ? "item active":"item"}>省钱</Link>
        <Link to="/me" className="item me">我</Link>
      </nav>
    )
  }
}