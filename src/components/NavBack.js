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
      <p className={white ? "nav-back white" : "nav-back"}>
        <i className="icon back" onClick={this.back.bind(this)}>返回</i>
        {children}
        {
          this.props.me ? 
          <Link to="/me"><i className="icon user right">ME</i></Link>
          :
          ''
        }
      </p>
    )
  }
}