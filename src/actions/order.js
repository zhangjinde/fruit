import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function changeType(val){
  return {
    type:types.ORDER_CHANGE_TYPE,
    val
  }
}

function getStart(){
  return {
    type:types.ORDER_LIST_GET_START
  }
}
function getSuccess(val,type){
  return {
    type:types.ORDER_LIST_GET_SUCCESS,
    val: {
      val,
      type
    }
  }
}
function getError(){
  return {
    type:types.ORDER_LIST_GET_ERROR
  }
}
export function getList(type,id){
  return dispatch => {
    dispatch(getStart())
    const url = type==1 ? URL+'/orderOn/all/1/'+id: URL+'/orderOff/all/1/'+id
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(getSuccess(json.orders, type))
     })
    .catch(() => dispatch(getError()))
  }
}