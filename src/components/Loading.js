import React, { Component } from 'react'

export default class Loading extends Component{
  render() {
    return (
      <p className='loading all-center'>
        <img src="/img/load.gif" className="all-center"/>
      </p>
    )
  }
}