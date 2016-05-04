import * as types from '../constants/ActionTypes'

export function changeType(){
  return {
    type:types.CITY_CHANGE_TYPE
  }
}

export function changeQu(val){
  return {
    type:types.CITY_CHANGE_QU,
    val
  }
}

export function changeCity(val){
  return {
    type:types.CITY_CHANGE_CITY,
    val
  }
}