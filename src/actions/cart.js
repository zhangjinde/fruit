import * as types from '../constants/ActionTypes'

export function updPos(val){
  return {
    type:types.CART_UPDPOS,
    val
  }
}