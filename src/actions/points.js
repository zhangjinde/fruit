import * as types from '../constants/ActionTypes'

export function changeType(val){
  return {
    type:types.POINT_CHANGE_TYPE,
    val
  }
}