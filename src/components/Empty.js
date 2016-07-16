import React, { Component } from 'react'

export default class Empty extends Component{
  render() {
    const {txt} = this.props;
    return (
      <p className='empty'>
        {txt || '列表为空'}
      </p>
    )
  }
}