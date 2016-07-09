import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function changeType(val){
  return {
    type:types.COUPON_CHANGE_TYPE,
    val
  }
}

function getStart(){
  return {
    type:types.COUPON_GET_START
  }
}
function getSuccess(val, type){
  return {
    type:types.COUPON_GET_SUCCESS,
    val: {
      val,
      type
    }
  }
}
function getError(){
  return {
    type:types.COUPON_GET_ERROR
  }
}
export function getCoupon(id, type, cid){
  return dispatch => {
    dispatch(getStart())
    cid<=0 && (cid=cityid)

    const url = type == 1 ? `/couponOn/all/${cid}/` : `/couponOff/all/${cid}/`
    return fetch(URL+url+id)
    .then(response => response.json())
    .then(json => {
      dispatch(getSuccess(json.coupons, type))
     })
    .catch(() => dispatch(getError()))
  }
}

function getDetailStart(){
  return {
    type:types.COUPON_DETAIL_GET_START
  }
}
function getDetailSuccess(val){
  return {
    type:types.COUPON_DETAIL_GET_SUCCESS,
    val
  }
}
function getDetailError(){
  return {
    type:types.COUPON_DETAIL_GET_ERROR
  }
}
export function getCouponDetail(id, cid){
  return dispatch => {
    dispatch(getDetailStart())
    return fetch(URL+'/couponOn/'+cid+'/'+id)
    .then(response => response.json())
    .then(json => {
      dispatch(getDetailSuccess(json.coupon))
     })
    .catch(() => dispatch(getDetailError()))
  }
}