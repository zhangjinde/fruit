import * as types from '../constants/ActionTypes'

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
  //test
  val.id=(Math.random()*1234567)>>0
  return {
    type:types.ADDR_ADD_SAVE,
    val:val
  }
}

export function edit(){
  return {
    type:types.ADDR_EDIT
  }
}

export function del(id){
  return {
    type:types.ADDR_DEL,
    val:id
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

export function update(id,val){
  return {
    type:types.ADDR_UPD,
    val:{
      id,
      val
    }
  }
}