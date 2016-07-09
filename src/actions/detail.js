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

function _cmtLike(id){
  return {
    type:types.FRUIT_DETAIL_CMT_LIKE,
    val: id
  }
}
export function cmtLike(id, cityId, areaId){
  return dispatch => {
    dispatch(_cmtLike(id))
    const body = {
      commentId: id,
      cityId,
      areaId
    }
    return fetch(`${URL}/comment/like/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    return ;
  }
}

function getCmtStart(){
  return {
    type:types.FRUIT_DETAIL_CMT_GET_START
  }
}
function getCmtSuccess(val){
  return {
    type:types.FRUIT_DETAIL_CMT_GET_SUCCESS,
    val
  }
}
function getCmtError(){
  return {
    type:types.FRUIT_DETAIL_CMT_GET_ERROR
  }
}
export function getCmt(id){
  return dispatch => {
    dispatch(getCmtStart())
    const url = `${URL}/comment/all/1/1/${id}`
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(getCmtSuccess(json.comments))
     })
    .catch(() => dispatch(getCmtError()))
  }
}