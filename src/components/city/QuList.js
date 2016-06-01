import React, { Component } from 'react'
import QuItem from './QuItem'

export default class QuList extends Component{
  choose(id){
    let {actions} = this.props
    actions.changeQu(id)
  }
  render() {
    let {qus,now} = this.props
    return (
      <ul className="qu">
      {
        qus && qus.length ? 
          qus.map(item=>{
            return (
              <QuItem item={item} key={item.id} active={item.id===now} choose={this.choose.bind(this)}/>
            )
          })
        :
          <li className="other">该城市没有区域可以选择</li>
      }
      </ul>
    )
  }
}