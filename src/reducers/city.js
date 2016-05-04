import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
  cities:[{
    id:1,
    name:'中山',
    img:'/img/city.jpg',
    desc:'当地网点支持两小时内到货'
  },{
    id:2,
    name:'珠海',
    img:'/img/city.jpg',
    desc:'当地网点支持三小时内到货'    
  },{
    id:3,
    name:'发大水',
    img:'/img/city.jpg',
    desc:'当地网点支持四小时内到货'    
  },{
    id:4,
    name:'开发拉倒',
    img:'/img/city.jpg',
    desc:'当地网点支持六小时内到货'
  }],
  qus:{
    '1':[{id:1,name:'新香洲'},{id:13,name:'吉大'},{id:12,name:'拱北'},{id:11,name:'南平'},{id:8,name:'潜山'},{id:9,name:'烽火'}],
    '2':[{id:14,name:'fad'}],
    '3':[{id:114,name:'tt'}],
    '4':[{id:144,name:'dasf'}],
  },
  NowCity:1,
  Nowqu:12,
  type:1,
}

export default function cart(state = initialState, action){
  switch (action.type) {
    case types.CITY_CHANGE_TYPE:
      return assign({},state,{
        type:3-state.type
      })
    case types.CITY_CHANGE_QU:
      return assign({},state,{
        Nowqu:action.val
      })
    case types.CITY_CHANGE_CITY:
      return assign({},state,{
        NowCity:action.val,
        type:3-state.type
      })    
    default:
      return state
  } 
}