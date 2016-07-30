import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavBack extends Component{
  back(){
    let { history } = this.props
    history.go(-1)
  }
  render() {
    let { white, children, refresh } = this.props
    return (
      <div className={white ? "nav-back white" : "nav-back"}>
        <a onClick={this.back.bind(this)}><i className="fa fa-angle-left fa-2x"></i></a>
        {children}
        {
          refresh ? 
          <a href="javascript:;" onClick={refresh} className="user right"><i className="fa fa-refresh"></i></a>
          :
          ''
        }
      </div>
    )
  }
}