import React, { Component } from 'react'

import scroll from '../utils/scroll'

export default class Rocket extends Component{
  componentDidMount(){
  }
  fei(){
    scroll(0)
  }
  render() { 
    return (
      <a className='rocket hide' onClick={this.fei}>
        <i className="iconfont icon-jiantou-copy-copy-copy"/>
      </a>
    )
  }
}