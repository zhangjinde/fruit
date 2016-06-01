import React, { Component } from 'react'
import CityItem from './CityItem'

export default class CityList extends Component{
  choose(id){
    let {actions} = this.props
    actions.changeCity(id)
  }
  render() {
    let {cities} = this.props
    return (
      <ul className="city">
      {
        cities.map(item=>{
          return (
            <CityItem item={item} key={item.id} choose={this.choose.bind(this)}/>
          )
        })
      }
      {
        cities.length ? 
          <li className="other">其他城市敬请期待</li>
        :
          <li className="other">暂时没有城市</li>
      }
      </ul>
    )
  }
}