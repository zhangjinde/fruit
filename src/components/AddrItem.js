import React, { Component } from 'react'

export default class AddrItem extends Component{
  del(){
    let {del,item} = this.props
    del(item.id)
  }
  go(){
    let {history,item} = this.props
    history.push('/addr/add?id='+item.id)
  }
  choose(){
    let {choose,item,editing} = this.props
    if(!editing){
      choose(item.id)
    }
  }
  render() {
    let {item,moren} = this.props
    return (
      <li onClick={this.choose.bind(this)}>
        <p className="name">
          <span className="sp">收货人：</span>
          {item.name}
        </p>
        <p className="tel">
          <span className="sp">联系电话：</span>
          {item.tel}
        </p>
        <p className="addr">
          {
            moren?
            <span className="moren">（默认）</span>
            :
            ""
          }
          详细地址：
          {item.addr}
        </p>
        <a className="op edit" onClick={this.go.bind(this)}>编辑</a>
        <a className="op del" onClick={this.del.bind(this)}>删除</a>
      </li>
    )
  }
}