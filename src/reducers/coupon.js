import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
  list1:[{
    id:1,
    img:'/img/quan.png',
    deadline:'2016-05-11',
    title:'新用户2元欢迎礼券',
    qianti:'满10.00元',
    guize:'消费满10.00元 抵扣2.00元',
    isNew:true
  },{
    id:2,
    img:'/img/quan.png',
    deadline:'2016-06-11',
    title:'13元欢迎礼券',
    qianti:'满100.00元',
    guize:'消费满100.00元 抵扣13.00元',
    isNew:false
  }],
  list2:[],
  detail:{
    id:2,
    img:'/img/quan.png',
    img2:'/img/quan_de.png',
    time:'2016-04-01',
    discount:'2.00',
    deadline:'2016-06-11',
    title:'13元欢迎礼券',
    detail:'新用户欢迎礼券',
    qianti:'满100.00元',
    guize:'消费满100.00元 抵扣13.00元',
    isNew:false
  },
  type:1
}

export default function coupon(state = initialState, action){
  switch (action.type) {
    case types.COUPON_CHANGE_TYPE:
      return assign({},state,{
        type:action.val
      })
    default:
      return state
  } 
}