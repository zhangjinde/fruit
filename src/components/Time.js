import React, { Component } from 'react'

import * as cfg from '../utils/config'

const time = cfg.default.Time

export default class Time extends Component{
  _chTime(e){
    let {chTime} = this.props
    let timeid = e.target.getAttribute('data-time')
    chTime(timeid)
  }
  render() {
    return (
      <div className="time" onClick={this._chTime.bind(this)}>
        <p className="title">
          <span className="left">{time.getDay(1)} 今天</span>
          <span className="right">{time.getDay(4)} 明天</span>
        </p>
        <p>
          <span className="left" data-time="1">{time.getText(1)}</span>
          <span className="right" data-time="4">{time.getText(4)}</span>
        </p>
        <p>
          <span className="left" data-time="2">{time.getText(2)}</span>
          <span className="right" data-time="5">{time.getText(5)}</span>        
        </p>
        <p>
          <span className="left" data-time="3">{time.getText(3)}</span>
          <span className="right" data-time="6">{time.getText(6)}</span>        
        </p>
      </div>
    )
  }
}