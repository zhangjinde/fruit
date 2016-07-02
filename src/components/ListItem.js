import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ListItem extends Component{
  add(hide,e){
    if(!e){
      e=hide
      hide=false
    }
    let {add,item} = this.props
    add(item,e.target,hide)
  }
  del(e){
    let {del,item} = this.props
    del(item)
  }
  render() {
    let { item, count } = this.props;
    return (
      <li className={item.big ? "big":"small"}>
        <p className="img"><Link to={"/fruit/"+item.id}><img src={item.img}/></Link></p>
        <div className="txt">
          <p className="tit">
            {item.name}
            {
              item.status == 1 ? 
                <span className="jin">库存紧张</span>
              :
                item.status == 0 ? 
                  <span className="jin">已售罄</span>
                :
                  ""
            }
          </p>
          <p>
            <span className="price">￥{item.price}</span>
            <span className="cnt">/{item.type}</span>
            <span className="del">超市￥{item.old}</span>
          </p>
        </div>
        {
          item.status != '0' ?
            count===0?
              <a className="buy" href="javascript:;" onClick={this.add.bind(this,false)}>买</a>
            :
              <p className="upd">
                <a href="javascript:;" className="del" onClick={this.del.bind(this)}>-</a>
                <a href="javascript:;" className="add" onClick={this.add.bind(this,true)}>+</a>
              </p>
          :
            <a className="buy not" href="javascript:;">
              <span>暂时</span>
              <span>缺货</span>
            </a>
        }
            
      </li>
    )
  }
}