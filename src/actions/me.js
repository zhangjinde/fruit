import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function getStart(){
  return {
    type:types.USER_GET_START
  }
}
function getSuccess(val){
  return {
    type:types.USER_GET_SUCCESS,
    val
  }
}
function getError(){
  return {
    type:types.USER_GET_ERROR
  }
}
export function getUser(id){
  return dispatch => {
    dispatch(getStart())

    return fetch(`${URL}/user/${id}`)
    .then(response => response.json())
    .then(json => {
      dispatch(getSuccess(json.user))
     })
    .catch(() => dispatch(getError()))
  }
}