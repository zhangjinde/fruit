import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ListItem extends Component{
  add(e){
    let {add,item} = this.props
    add(item.id,e.target)
  }
  render() {
    let { item } = this.props;
    return (
      <li className={item.big ? "big":"small"}>
        <p className="img"><img src={item.img}/></p>
        <div className="txt">
          <p className="tit">
            {item.name}
            {
              item.remain==1 ? 
                <span className="jin">库存紧张</span>
              :
              item.remain==0 ?
                <span className="que">1/{item.all}</span>
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
          item.remain != 0 ?
            <a className="buy" href="javascript:;" onClick={this.add.bind(this)}>买</a>
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