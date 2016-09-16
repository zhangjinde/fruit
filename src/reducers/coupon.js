import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
/*
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
  }],*/
  list1:[],
  list2:[],
  detail:{},
  type:1,
  loading:false,
  error:false
}

function genList(list){
  return list.map(l=>{
    return {
      id: l.id,
      img: IMG_URL+l.coverSUrl,
      deadline:l.to,
      title: l.name,
      qianti: `满${l.restrict}元`,
      guize:`消费满${l.restrict}元 抵扣${l.amount}元`,
      cityId: l.cityId,
      restrict: l.restrict,
      amount: l.amount
    }
  })
}

export default function coupon(state = initialState, action){
  const {val} = action
  switch (action.type) {
    case types.CITY_CHANGE_QU:
      state.list1=[];
      state.list2=[];
      return state;  
    case types.COUPON_GET_SUCCESS:
      return assign({},state,{
        list1: val.type==1 ? genList(val.val): state.list1,
        list2: val.type==2 ? genList(val.val): state.list2,
        loading: false,
        error: false
      })
    case types.COUPON_GET_START:
      return assign({},state,{
        loading:true,
        error:false
      }) 
    case types.COUPON_GET_ERROR:
      return assign({},state,{
        loading:false,
        error:true
      }) 
    case types.COUPON_CHANGE_TYPE:
      return assign({},state,{
        type:action.val
      })
    case types.COUPON_DETAIL_GET_SUCCESS:
      return assign({},state,{
        detail: {
          id:val.id,
          img: IMG_URL+ val.coverSUrl,
          img2: IMG_URL+ val.coverBUrl,
          time: val.from,
          discount: val.amount+'元',
          deadline: val.to,
          title: val.name,
          detail: val.comment,
          qianti:`满${val.restrict}元`,
          guize:`消费满${val.restrict}元 抵扣${val.amount}元`,
        }
      })
    default:
      return state
  } 
}