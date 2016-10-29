import React, { Component } from 'react'

import BlockDesc from './BlockDesc'
import BlockImg from './BlockImg'
import BlockCmt from './BlockCmt'
import DetialLast from './DetialLast'

export default class DetialBody extends Component{
  render() {
    let {showCmt,item,like, phone} = this.props
     return (
      <div className="body">
        <BlockDesc item={item} like={like}/>
        <BlockCmt showCmt={showCmt} phone={phone}/>
        {
          item.subdetailUrl ? 
            <BlockImg img={IMG_URL+item.subdetailUrl}/>
            :
            ''      
        }
        <BlockImg img={IMG_URL+item.detailUrl}/>        
        <DetialLast item={item}/>          
      </div>
    )
  }
}