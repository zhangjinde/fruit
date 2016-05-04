import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavBack extends Component{
  back(){
    let { history } = this.props
    history.go(-1)
  }
  render() {
    let { white, children } = this.props
    return (
      <div className={white ? "nav-back white" : "nav-back"}>
        <i className="fa fa-angle-left fa-2x" onClick={this.back.bind(this)}></i>
        {children}
        {
          this.props.me ? 
          <a href="javascript:;" className="user right"><i className="fa fa-user"></i></a>
          :
          ''
        }
      </div>
    )
  }
}