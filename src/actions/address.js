import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function setDefault(){
  return {
    type:types.ADDR_SET_DEF
  }
}

export function clear(){
  return {
    type:types.ADDR_CLEAR
  }
}

export function addSave(val){
  return dispatch => {
    dispatch(addStart())
    const url = URL+'/address/new'
    const body = {
      userId: val.userId,
      userName: val.name,
      phoneNumber: val.tel,
      detailAddress: val.addr,
      isDefault: val.moren ? 'yes':'no',
      cityId: 1,
      areaId: 1
    }

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => {
      val.id = json.id
      dispatch(addSuccess(val))
     })
    .catch(() => dispatch(addError()))
  }
}
function addStart(){
  return {
    type:types.ADDR_ADD_START
  }
}
function addSuccess(val){
  return {
    type:types.ADDR_ADD_SAVE,
    val:val
  }
}
function addError(){
  return {
    type:types.ADDR_ADD_ERROR
  }
}

export function edit(){
  return {
    type:types.ADDR_EDIT
  }
}


function delStart(){
  return {
    type:types.ADDR_DEL_START
  }
}
function delSuccess(id){
  return {
    type:types.ADDR_DEL,
    val:id
  }
}
function delError(){
  return {
    type:types.ADDR_DEL_ERROR
  }
}



export function del(id){
  return dispatch => {
    dispatch(delStart())
    const url = URL+'/address/'+id
    return fetch(url, {
      method: "DELETE",
      credentials: 'include'
    })
    .then(json => {
      dispatch(delSuccess(id))
     })
    .catch(() => dispatch(delError()))
  }
}

export function chooseAddr(id){
  return {
    type:types.ADDR_CHOOSE,
    val:id
  }
}

export function chooseTime(id){
  return {
    type:types.ADDR_CHOOSE_TIME,
    val:id
  }
}

function updateStart(){
  return {
    type:types.ADDR_UPDATE_START
  }
}
function updateSuccess(id, val){
  return {
    type:types.ADDR_UPD,
    val:{
      id,
      val
    }
  }
}
function updateError(){
  return {
    type:types.ADDR_UPDATE_ERROR
  }
}

export function update(id,val){
  return dispatch => {
    dispatch(updateStart())
    const url = URL+'/address/edit/'+id
    const body = {
      userName:val.name,
      phoneNumber:val.tel,
      detailAddress:val.addr,
      isDefault:val.moren ? 'yes':'no'
    }

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(json => {
      dispatch(updateSuccess(id, val))
     })
    .catch(() => dispatch(updateError()))
  }
}

function getListStart(){
  return {
    type:types.ADDR_LIST_GET_START
  }
}
function getListSuccess(val){
  return {
    type:types.ADDR_LIST_GET_SUCCESS,
    val
  }
}
function getListError(){
  return {
    type:types.ADDR_LIST_GET_ERROR
  }
}
export function getList(id){
  return dispatch => {
    dispatch(getListStart())
    const url = URL+'/address/all/1/1/'+id
    return fetch(url)
    .then(response => response.json())
    .then(json => {
      dispatch(getListSuccess(json.addresses))
     })
    .catch(() => dispatch(getListError()))
  }
}