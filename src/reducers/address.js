import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
  moren:0,
  now:0,
  time:0,
  editing:false,
  addrs:[],
  setDef:false,
}
function _del(state,id){
  let adds=[]
  state.addrs.map(add=>{
    if(add.id!==id){
      adds.push(add)
    }
  })
  return adds
}
function _upd(state,id,val){
  let adds=[]
  state.addrs.map(add=>{
    if(add.id===id){
      adds.push(assign({},add,val))
    }else{
      adds.push(add)
    }
  })
  return adds
}

export default function address(state = initialState, action){
  switch (action.type) {
    case types.ADDR_SET_DEF:
      return assign({},state,{
        setDef:true,
      })
    case types.CITY_CHANGE_QU:
      state.addrs=[];
      return state;
    case types.ADDR_CLEAR:
      return assign({},state,{
        setDef:false,
        editing:false,
      })      
    case types.ADDR_ADD_SAVE:
      if(state.setDef){
        state.moren=action.val.id
      }
      //同时设置订单生成页收货地址
      return assign({},state,{
        now:action.val.id,
        addrs:[].concat(state.addrs,action.val)
      })      
    case types.ADDR_EDIT:
      return assign({},state,{
        editing:!state.editing
      })
    case types.ADDR_DEL:
      return assign({},state,{
        addrs:_del(state,action.val)
      })
    case types.ADDR_UPD:
      if(state.setDef){
        state.moren=action.val.id
      }    
      return assign({},state,{
        addrs:_upd(state,action.val.id,action.val.val)
      })
    case types.ADDR_CHOOSE:
      return assign({},state,{
        now:action.val
      })
    case types.ADDR_CHOOSE_TIME:
      return assign({},state,{
        time:action.val
      })   
    case types.ADDR_LIST_GET_SUCCESS:
      let m;
      const addrs = action.val.map(ad=>{
        if(ad.isDefault == 'yes'){
          m=ad.id
        }
        return {
          addr: ad.detailAddress,
          tel: ad.phoneNumber,
          name: ad.userName,
          id:ad.id
        }
      })

      return assign({},state,{
        addrs: addrs,
        moren: m||0,
        now: m||0
      })
    default:
      return state
  } 
}