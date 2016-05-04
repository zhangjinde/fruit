import * as types from '../constants/ActionTypes'

export function changeType(val){
  return {
    type:types.COUPON_CHANGE_TYPE,
    val
  }
}