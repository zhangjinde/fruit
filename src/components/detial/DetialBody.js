import React, { Component } from 'react'

import BlockDesc from './BlockDesc'
import BlockImg from './BlockImg'
import BlockCmt from './BlockCmt'
import DetialLast from './DetialLast'

export default class DetialBody extends Component{
  render() {
    let {showCmt,item,like} = this.props
     return (
      <div className="body">
        <BlockDesc item={item} like={like}/>
        <BlockCmt showCmt={showCmt}/>
        {
          item.imgs.map((img,idx)=>(
            <BlockImg img={img} key={idx}/>
          ))
        }
        <DetialLast item={item}/>
      </div>
    )
  }
}