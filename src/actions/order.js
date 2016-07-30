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
export function getList(type,id,cid){
  return dispatch => {
    dispatch(getStart())
    cid = cid>0? cid: cityid
    const url = type==1 ? `${URL}/orderOn/all/${cid}/${id}`: `${URL}/orderOff/all/${cid}/${id}`
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(getSuccess(json.orders, type))
     })
    .catch(() => dispatch(getError()))
  }
}


function getDetailStart(){
  return {
    type:types.ORDER_DETAIL_GET_START
  }
}
function getDetailSuccess(order,products,type){
  return {
    type:types.ORDER_DETAIL_GET_SUCCESS,
    val: {
      order,
      products,
      type
    }
  }
}
function getDetailError(){
  return {
    type:types.ORDER_DETAIL_GET_ERROR
  }
}
export function getDetail(type,id, cid){
  cid = cid>0? cid: cityid
  return dispatch => {
    dispatch(getDetailStart())
    //const url = type==1 ? `${URL}/orderOn/${cid}/${id}` : `${URL}/orderOff/${cid}/${id}`
    const url = `${URL}/orderOn/${cid}/${id}`
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(getDetailSuccess(json.order, json.products, type))
     })
    .catch(() => dispatch(getDetailError()))
  }
}

export function orderFinish(val){
  return {
    type:types.ORDER_FINISH,
    val
  }
}

export function orderChangeState(id, state){
  return {
    type:types.ORDER_CHANGE_STATE,
    val: {
      id,
      state
    }
  }
}

export function shouhuo(id, cid, cb, errCb){/*
  return dispatch => {
    const url = `${URL}/orderOn/confirm/${cid}/${id}`

    return fetch(url)
    .then(d => {
      cb && cb()
    })
    .catch((e) => {
      errCb && errCb()
    })
  }*/
  cb && cb()
}

export function tuihuo(id, cid, cb, errCb){
  return dispatch => {
    const url = `${URL}/orderOff/return/${cid}/${id}`

    return fetch(url)
    .then(d => {
      cb && cb()
    })
    .catch((e) => {
      errCb && errCb()
    })
  }
}