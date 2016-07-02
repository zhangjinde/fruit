import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

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

function getStart(){
  return {
    type:types.CITY_GET_START
  }
}
function getSuccess(val){
  return {
    type:types.CITY_GET_SUCCESS,
    val
  }
}
function getError(){
  return {
    type:types.CITY_GET_ERROR
  }
}
export function getList(){
  return dispatch => {
    dispatch(getStart())
    
    return fetch(URL+'/city/all')
    .then(response => response.json())
    .then(json => {
      dispatch(getSuccess(json.cities))
     })
    .catch(() => dispatch(getError()))
  }
}

export function changeCity(val){
  return {
    type:types.CITY_CHANGE_CITY,
    val
  }
}