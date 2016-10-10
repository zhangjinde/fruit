import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function changeType(t){
  return {
    type: types.FRUIT_CHANGE_TYPE,
    val: t  
  }
}

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
export function getList(cid,qid){
  return dispatch => {
    dispatch(getStart())
    cid<0 && (cid=cityid)
    qid<0 && (qid=areaid)

    return fetch(`${URL}/product/all/${cid}/${qid}`)
    .then(response => response.json())
    .then(json => {
      dispatch(getSuccess(json))
     })
    .catch(() => dispatch(getError()))
  }
}