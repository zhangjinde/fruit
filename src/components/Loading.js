import React, { Component } from 'react'

export default class Loading extends Component{
  render() {
    return (
      <p className='loading'>
        <i className="fa fa-spinner fa-5x animated infinite rotateIn"></i>
      </p>
    )
  }
}