import {assign} from '../utils/Object'

import { combineReducers } from 'redux'
import me from './me'
import cart from './cart'
import order from './order'
import coupon from './coupon'
import points from './points'
import city from './city'
import address from './address'
import detail from './detail'
//import * from '../constants/ActionTypes'

var initialState = {
  list:[
    {
      id:1,
      img:'/img/putao.jpg',
      name:'国产油纸蓝莓',
      price:'27.8',
      type:'一盒一',
      old:'23.00',
      remain:1,
      big:1,
    },
    {
      id:2,
      img:'/img/putao.jpg',
      name:'放大师傅',
      price:'99.8',
      type:'一盒一',
      old:'123.00',
      remain:0,
      all:20,
      big:0,
    },
    {
      id:3,
      img:'/img/putao.jpg',
      name:'放大师傅',
      price:'99.8',
      type:'一盒一',
      old:'123.00',
      big:1
    },    
  ]
}
function fruit(
  state = initialState, action) {
  switch (action.type) { 
    default:
      return state
  }
}

const rootReducer = combineReducers({
  fruit,
  me,
  cart,
  order,
  coupon,
  points,
  city,
  address,
  detail
})

export default rootReducer