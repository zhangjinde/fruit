import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavBack extends Component{
  back(){
    let { history, home } = this.props
    if(home){
      history.push('/')
    }else{
      history.go(-1)
    }
  }
  render() {
    let { white, children, refresh, user, transparent, trans1 } = this.props
    return (
      <div className={white ? "nav-back white" : "nav-back"}>
        <a onClick={this.back.bind(this)} className={trans1?"back trans1":transparent?"back trans":"back"}>
          <i className="iconfont icon-jiantou-copy"></i>
        </a>
        {children}
        {
          refresh ? 
          <a href="javascript:;" onClick={refresh} className="user right">
            <i className="iconfont icon-refresh"></i>
          </a>
          :
          ''
        }
        {
          user?
          <Link to="/me" className="user right large">
            <i className="iconfont icon-40one"></i>
          </Link>
          :
          ""
        }
      </div>
    )
  }
}