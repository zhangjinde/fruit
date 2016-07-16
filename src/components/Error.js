import React, { Component } from 'react'

export default class Error extends Component{
  render() {
    const {txt} = this.props;  
    return (
      <p className='error'>
        {txt || "出错了！请稍候再试"}
      </p>
    )
  }
}