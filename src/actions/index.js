import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function getStart(){
  return {
    type:types.FRUIT_LIST_GET_START
  }
}
function getSuccess(val){
  return {
    type:types.FRUIT_LIST_GET_SUCCESS,
    val
  }
}
function getError(){
  return {
    type:types.FRUIT_LIST_GET_ERROR
  }
}
export function getList(){
  return dispatch => {
    dispatch(getStart())
    
    return fetch(URL+'/product/all/1/1')
    .then(response => response.json())
    .then(json => {
      dispatch(getSuccess(json.products))
     })
    .catch(() => dispatch(getError()))
  }
}