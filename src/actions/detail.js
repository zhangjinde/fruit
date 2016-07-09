import * as types from '../constants/ActionTypes'

export function _like(val){
  return {
    type:types.DETAIL_LIKE,
    val
  }
}
export function like(id, cid, qid){
  const url = `${URL}/product/like/`
  const body = {
    productId: id,
    cityId: cid>0?cid: cityid,
    areaId: qid>0?qid: areaid,
  }
  return dispatch => {
    dispatch(_like(id))
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
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
export function getDetail(id,cid,qid){
  return dispatch => {
    dispatch(getStart())
    
    return fetch(`${URL}/product/${id}/${cid}/${qid}/`)
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
export function getCmt(id,cid,qid){
  return dispatch => {
    dispatch(getCmtStart())
    const url = `${URL}/comment/all/${cid}/${qid}/${id}`
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(getCmtSuccess(json.comments))
     })
    .catch(() => dispatch(getCmtError()))
  }
}