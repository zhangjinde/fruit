import React, { Component } from 'react'
import { Link } from 'react-router'
import labelConfi from '../utils/label'

export default class ListItem extends Component{
  add(hide,e){
    if(!e){
      e=hide
      hide=false
    }
    const {add,item,count} = this.props
    if(item.restrict && count>=item.restrict){
      alert('该商品每单限购'+count+'个')
      return;
    }
    add(item,e.target,hide)
  }
  del(e){
    let {del,item} = this.props
    del(item)
  }
  render() {
    let { item, count } = this.props;
    const label = labelConfi[item.label];
    return (
      <li className={item.big ? "big":"small"}>
        {
          label ? 
            <a className="label" style={{"background":label["bgColor"]}}>
              <p>{label['name1']}</p>
              <p>{label['name2']}</p>
            </a>
          :
          ""
        }
        <p className="img"><Link to={`/fruit/${item.id}?cityId=${item.cityId}&areaId=${item.areaId}`}><img src={item.img}/></Link></p>
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
          <p className="desc">{item.description}</p>
          {
          count?
          <p>
            <span className="price">
             <span className="cnt">x</span>
            {count}</span>
            <span className="cnt">小计 ￥{(item.price*count).toFixed(2)}</span>
          </p>
          :
          <p>
            <span className="price">
              <span className="y">￥</span>
              {item.price}
            </span>
            <span className="cnt">/{item.type}</span>
            <span className="del">超市￥{item.old}</span>
          </p>
          }
          {
            item.status != '0' ?
              count===0?
                <a className="buy ok" href="javascript:;" onClick={this.add.bind(this,false)}>买</a>
              :
                <p>
                  <a href="javascript:;" className="buy ok m" onClick={this.del.bind(this)}>
                    <i className="iconfont icon-minus"></i>
                  </a>
                  <a href="javascript:;" className="buy ok" onClick={this.add.bind(this,true)}>
                    <i className="iconfont icon-ricon-add"></i>
                  </a>
                </p>
            :
              <a className="buy not" href="javascript:;">
                <span>暂时</span>
                <span>缺货</span>
              </a>
          }          
        </div>
      </li>
    )
  }
}