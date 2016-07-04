import React, { Component } from 'react'
import {Link} from 'react-router'

export default class BlockGoods extends Component{
  show(){
    let {list,icon} = this.refs 
    if(list.className==""){
      list.className="hide"
      icon.className="fa fa-chevron-circle-up right"
    }else{
      list.className=""
      icon.className="fa fa-chevron-circle-down right"
    }
  }
  render() {
    let {goods} = this.props
    return (
      <div className="block goods">
        <p className="tit">
          您订购的商品
          <a onClick={this.show.bind(this)}><i ref="icon" className="fa fa-chevron-circle-down right"></i></a>
        </p>
        <ul ref="list">
        {
          goods.map(g=>(
            <li key={g.id}>
              <div className="img">
                <Link to={`/fruit/${g.id}?cityId=${g.cityId}&areaId=${g.areaId}`}><img src={IMG_URL+g.image}/></Link>
              </div>
              <div className="name">{g.name}</div>
              <div className="sum">
                <p className="cnt">×{g.number}</p>
                <p className="price">￥{(g.number*g.price).toFixed(2)}</p>
              </div>
            </li>  
          ))
        }      
        </ul>
      </div>
    )
  }
}