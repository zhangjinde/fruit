import React, { Component } from 'react'

export default class Loading extends Component{
  render() {
    return (
      <p className='loading all-center'>
        <img src="/img/load2.png" className="all-center" style={{width:'100px',height:'100px'}}/>
        <img src="/img/load1.png" className="all-center moving" style={{width:'120px',height:'120px',zIndex:9}}/>
      </p>
    )
  }
}