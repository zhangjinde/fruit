import * as types from '../constants/ActionTypes'

export function like(val){
  return {
    type:types.DETAIL_LIKE,
    val
  }
}

export function unlike(val){
  return {
    type:types.DETAIL_UNLIKE,
    val
  }
}