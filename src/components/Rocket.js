import React, { Component } from 'react'

export default class Rocket extends Component{
  componentDidMount(){
  }
  fei(){
    document.body.scrollTop=0;
  }
  render() { 
    return (
      <div className='rocket' onClick={this.fei}>
        <i className="iconfont icon-jiantou-copy-copy-copy"/>
      </div>
    )
  }
}