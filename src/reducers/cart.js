import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
  total:0,
  count:0,
  position:null,
  editing:false,
  goods:[{
    id:1,
    name:'a',
    img:'/img/putao.jpg',
    type:'一盒',
    price:12,
    count:11,
  }]
}

export default function cart(state = initialState, action){
  switch (action.type) {
    case types.CART_UPDPOS:
      return assign({},state,{
        position:action.val
      })
    case types.CART_EDIT:
      return assign({},state,{
        editing:!state.editing
      })
    default:
      return state
  } 
}