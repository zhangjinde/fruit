import React, { Component } from 'react'

const IMG_URL = 'http://madarou.ngrok.cc/static/upload/'

export default class CityItem extends Component{
  render() {
    let {item,active,choose} = this.props
    return (
      <li onClick={choose.bind(null,item.id)}>
        <img src={IMG_URL+item.img} />
        {item.name}
        <span className="icon"><i className="fa fa-angle-right"></i></span>
      </li>
    )
  }
}