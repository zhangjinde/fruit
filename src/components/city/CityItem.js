import React, { Component } from 'react'

export default class CityItem extends Component{
  render() {
    let {item,active,choose} = this.props
    return (
      <li onClick={choose.bind(null,item.id)}>
        <img src={IMG_URL+item.img} />
        {item.name}
        <span className="icon"><i className="iconfont icon-jiantou"></i></span>
      </li>
    )
  }
}