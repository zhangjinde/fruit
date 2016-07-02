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

function getStart(){
  return {
    type:types.FRUIT_DETAIL_GET_START
  }
}
function getSuccess(val){
  return {
    type:types.FRUIT_DETAIL_GET_SUCCESS,
    val
  }
}
function getError(){
  return {
    type:types.FRUIT_DETAIL_GET_ERROR
  }
}
export function getDetail(id){
  return dispatch => {
    dispatch(getStart())
    
    return fetch(`${URL}/product/${id}/1/1/`)
    .then(response => response.json())
    .then(json => {
      dispatch(getSuccess(json.product))
     })
    .catch(() => dispatch(getError()))
  }
}