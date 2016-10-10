import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
  total:0,
  count:0,
  position:null,
  editing:false,
  couponId:0,
  couponName: "",
  couponRestrict:0,
  couponAmount:0,
  goods:[]
}

function _add(state,item,cnt){
  let goods = [], exsit = false
  state.goods.map(g=>{
    if(g.id===item.id){
      exsit=true
      console.log(g.count,item.restrict)
      if(item.restrict && g.count>=item.restrict && cnt==1){
        alert('该商品每单限购'+g.count+'个')
      }else{
        g.count+=cnt
        state.count+=cnt
        state.total+=cnt*g.price
      }
    }
    g.count>0 && ( goods.push(assign({},g)) )
  })
  if(!exsit){
    goods.push(assign({},item,{count:cnt}))
    state.total+=cnt*item.price
    state.count+=cnt
  }
  if(state.couponId && state.total < state.couponRestrict){
    assign(state, {
      couponId: 0,
      couponName: "",
      couponRestrict:0,
      couponAmount:0
    })
  }
  return assign({},state,{
    goods,
  })  
}

export default function cart(state = assign({},initialState), action){
  switch (action.type) {
    case types.CART_CHANGE_COUPON:
      return assign({},state,{
        couponId:action.val.id,
        couponName: action.val.name,
        couponRestrict: action.val.restrict,
        couponAmount: action.val.amount
      })
    case types.CART_CLEAR_COUPON:
      return assign({},state,{
        couponId: 0,
        couponName: "",
        couponRestrict:0,
        couponAmount:0
      })
    case types.CART_UPDPOS:
      return assign({},state,{
        position:action.val
      })
    case types.CART_EDIT:
      return assign({},state,{
        editing:!state.editing
      })
    case types.CART_ADD:
      let {item,val} = action.val
      return _add(state,item,val)
    case types.CITY_CHANGE_QU:
    case types.CART_CLEAR:
      return assign({},initialState,{
        position:state.position
      })
    default:
      return state
  } 
}