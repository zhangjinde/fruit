import * as types from '../constants/ActionTypes'

export function changeType(val){
  return {
    type:types.ORDER_CHANGE_TYPE,
    val
  }
}