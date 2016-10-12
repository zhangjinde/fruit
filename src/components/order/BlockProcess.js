import React, { Component } from 'react'
import {Link} from 'react-router'

export default class BlockProcess extends Component{
  render() {
    let {history} =this.props
    const his = history ? history.split(',') : [];
    return (
      <div className="block proc">
        <ul>
        {
          his.map((h, idx)=>{
            const l=h.split('=')
            return (
              <li className={idx==his.length-1?"active":""}>
                <p className="txt">{l[0]}</p>
                <p className="time">{l[1]}</p>
              </li>
            )
          })
        }
        </ul>
      </div>
    )
  }
}