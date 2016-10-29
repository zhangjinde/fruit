import React, { Component } from 'react'
import {Link} from 'react-router'

import STATE from '../../utils/orderState'

export default class BlockProcess extends Component{
  render() {
    let {history} =this.props
    let his = history ? history.split(',') : [];
    his = his.reverse();
    return (
      <div className="block proc">
        <ul>
        {
          his.map((h, idx)=>{
          console.log(idx)
            const l=h.split('=')
            return (
              <li className={idx==0?"active":""} key={idx}>
                <p className="txt">{STATE[l[0]]['d']}</p>
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