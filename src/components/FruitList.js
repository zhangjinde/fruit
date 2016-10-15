import React, { Component } from 'react'
import { Link } from 'react-router'

import ListItem from '../components/ListItem'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Empty from '../components/Empty'

import {move} from '../utils/animate'

export default class FruitList extends Component{
  add(item,elem,hide){
    this.props.add(item,elem,hide,this.refs.cart)
  }
  del(item){
    this.props.actions.add(item,-1)
  }
  render() {
    let {list, goods, loading, error, banner} = this.props;

    return (
      <ul className="list">
        {
          banner&&banner.status=='上线中'?
            <li className="last">
              <Link to={banner.productUrl}><img src={IMG_URL+banner.imgUrl}/></Link>
            </li>
          :
            ""
        }
        {
        loading?
          <Loading/>
        :
        error?
          <Error/>
        :
        list.length?
          list.map(item=>{
            let tem = goods?goods.filter(g=>g.id===item.id):[];
            let cnt = tem.length?tem[0].count:0
            return(
              <ListItem item={item} key={item.id} add={this.add.bind(this)} del={this.del.bind(this)} count={cnt}/>
            )
          })
        :
          <Empty txt="还没有商品哦"/>
        }
        <li className="last">
          <img src="/img/last.png"/>
        </li>
        <li className="mv-cart" ref="cart">
          <i className="fa fa-cart-arrow-down"></i>
        </li>
      </ul>
    )
  }
}