import React, { Component } from 'react'

import * as cfg from '../utils/config'

const time = cfg.default.Time

export default class Time extends Component{
  _chTime(e){
    let {chTime} = this.props
    let timeid = e.target.getAttribute('data-time')
    if(!timeid || !time.isValid(timeid))return;
    chTime(timeid)
  }
  render() {
    return (
      <div className="time" onClick={this._chTime.bind(this)}>
        <p className="title">
          <span className="left">{time.getDay(1)} 今天</span>
          <span className="right">{time.getDay(6)} 明天</span>
        </p>
        <p>
          <span className={ time.isValid(1) ? "left":"left no"} data-time="1">{time.getText(1)}</span>
          <span className="right" data-time="6">{time.getText(6)}</span>
        </p>
        <p>
          <span className={ time.isValid(2) ? "left":"left no"} data-time="2">{time.getText(2)}</span>
          <span className="right" data-time="7">{time.getText(7)}</span>        
        </p>
        <p>
          <span className={ time.isValid(3) ? "left":"left no"} data-time="3">{time.getText(3)}</span>
          <span className="right" data-time="8">{time.getText(8)}</span>        
        </p>
        <p>
          <span className={ time.isValid(4) ? "left":"left no"} data-time="4">{time.getText(4)}</span>
          <span className="right" data-time="9">{time.getText(9)}</span>        
        </p>
        <p>
          <span className={ time.isValid(5) ? "left":"left no"} data-time="5">{time.getText(5)}</span>
          <span className="right" data-time="10">{time.getText(10)}</span>        
        </p>        
        <p data-time="-1" className={ time.isValid(-1) ? "":"no"}>
          立即配送
        </p>
      </div>
    )
  }
}