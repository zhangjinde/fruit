import * as types from '../constants/ActionTypes'
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
/*
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
  ] */
  list: [],
  list2: [],
  list3: [],
  list4: [],
  catalog: [],
  loading:true,
  error:false,
  type: 1,
}

function genPro(list){
  return list.map(item=>{
    let it = {
      id:item.id,
      big: item.showWay === 's' ? 0:1,  
      img: `${IMG_URL}/${item.showWay === 's' ? item.coverSUrl : item.coverBUrl}`,
      headImg: IMG_URL+item.coverSUrl,
      name: item.productName,
      price: item.price,
      type: item.standard,
      old: item.marketPrice,
      status: item.status,
      areaId: item.areaId,
      cityId: item.cityId,
      description: item.description,
      catalog: item.catalog,
      restrict: item.restrict,
      label: item.label
    }
    return it;
  })
}

function fruit(
  state = initialState, action) {
  switch (action.type) { 
    case types.FRUIT_CHANGE_TYPE:
      return assign({},state,{
        type: action.val
      })
    case types.CITY_CHANGE_QU:
      state.list=[]
      return state;    
    case types.FRUIT_LIST_GET_START:
      return assign({},state,{
        loading:true,
        error:false
      })
    case types.FRUIT_LIST_GET_SUCCESS:
      return assign({},state,{
        loading:false,
        error:false,
        list: genPro(action.val.products),
        catalog: action.val.catalog,
        banners: action.val.banners
      })
    case types.FRUIT_LIST_GET_ERROR:
      return assign({},state,{
        loading:false,
        error:true
      })   
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