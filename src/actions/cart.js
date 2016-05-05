import * as types from '../constants/ActionTypes'

export function updPos(val){
  return {
    type:types.CART_UPDPOS,
    val
  }
}
export function edit(){
  return {
    type:types.CART_EDIT
  }
}

export function add(item,val){
  return {
    type:types.CART_ADD,
    val:{
      item,
      val
    }
  }
}

export function clear(){
  return {
    type:types.CART_CLEAR
  }
}
