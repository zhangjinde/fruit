import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function changeType(val){
  return {
    type:types.POINT_CHANGE_TYPE,
    val
  }
}

export function getExc(cid){
  return dispatch => {
    dispatch(_getExcStart())
    const url = URL+'/coupon/all/'+cid

    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(_getExcSuc(json.coupons))
     })
    .catch(() => dispatch(_getExcError()))
  }
}
function _getExcStart(){
  return {
    type:types.POINT_GET_EXCH_START
  }
}
function _getExcSuc(val){
  return {
    type:types.POINT_GET_EXCH_SUCCESS,
    val:val
  }
}
function _getExcError(){
  return {
    type:types.POINT_GET_EXCH_ERROR
  }
}

export function getRec(cid){
  return dispatch => {
    dispatch(_getRecStart())
    const url = `${URL}/point/history/${cid}/${user_id}`

    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(_getRecSuc(json.pls))
     })
    .catch(() => dispatch(_getRecError()))
  }
}
function _getRecStart(){
  return {
    type:types.POINT_GET_REC_START
  }
}
function _getRecSuc(val){
  return {
    type:types.POINT_GET_REC_SUCCESS,
    val:val
  }
}
function _getRecError(){
  return {
    type:types.POINT_GET_REC_ERROR
  }
}

export function getUse(cid){
  return dispatch => {
    dispatch(_getUseStart())
    const url = `${URL}/coupon/history/${cid}/${user_id}`

    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(_getUseSuc(json.history))
     })
    .catch(() => dispatch(_getUseError()))
  }
}
function _getUseStart(){
  return {
    type:types.POINT_GET_USE_START
  }
}
function _getUseSuc(val){
  return {
    type:types.POINT_GET_USE_SUCCESS,
    val:val
  }
}
function _getUseError(){
  return {
    type:types.POINT_GET_USE_ERROR
  }
}

function _exchangeSuccess(val){
  return {
    type:types.POINT_EXCHANGE_SUCCESS,
    val
  }
}
export function exchange(val,cb,errorCb){
  return dispatch => {
    const url = `${URL}/coupon/exchange/${val.cityId}/${val.couponId}/${val.userId}`

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => {
      dispatch(_exchangeSuccess(val.point))
      cb && cb()
     })
    .catch(() => {
      errorCb && errorCb()
    })
  }
}