import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
  type:1,
  exchange:[
  
/*  {
    id:1,
    img:'/img/quan.png',
    name:'10元代金券',
    point:1000,
    desc:'代金券兑换'
  },{
    id:2,
    img:'/img/quan.png',
    name:'20元代金券',
    point:2000,
    desc:'代金券兑换'
  },{
    id:3,
    img:'/img/quan.png',
    name:'100元代金券',
    point:10000,
    desc:'代金券兑换'
  }
  */
  ],
  record:[],
  use:[],
  now:0,
  loadingExch: false, 
  errorExch: false, 
  loadingRec: false, 
  errorRec: false, 
  loadingUse: false, 
  errorUse: false  
}

function getExc(list){
  let res = [];
  list.map(l=>{
    res.push({
      id:l.id,
      img: IMG_URL + l.coverSUrl,
      name: l.name,
      point:l.point,
      desc: l.comment,
      cityId: l.cityId
    })
  })
  return res;
}

export default function points(state = initialState, action){
  switch (action.type) {
    case types.POINT_CHANGE_TYPE:
      return assign({},state,{
        type:action.val
      })
    case types.POINT_GET_EXCH_START:
      return assign({},state,{
        loadingExch: true,
        errorExch: false
      })
    case types.POINT_GET_EXCH_SUCCESS:
      return assign({},state,{
        loadingExch: false,
        errorExch: false,
        exchange: getExc(action.val)
      })
    case types.POINT_GET_EXCH_ERROR:
      return assign({},state,{
        loadingExch: false,
        errorExch: true
      })    
    case types.POINT_GET_REC_START:
      return assign({},state,{
        loadingRec: true,
        errorRec: false
      })      
    case types.POINT_GET_REC_SUCCESS:
      return assign({},state,{
        loadingRec: false,
        errorRec: false
      })       
    case types.POINT_GET_REC_ERROR:
      return assign({},state,{
        loadingRec: false,
        errorRec: true
      })       
    case types.POINT_GET_USE_START:
      return assign({},state,{
        loadingUse: true,
        errorRec: false
      })     
    case types.POINT_GET_USE_SUCCESS:
      return assign({},state,{
        loadingUse: false,
        errorRec: false
      })      
    case types.POINT_GET_USE_ERROR:
      return assign({},state,{
        loadingUse: false,
        errorUse: true
      })      
    default:
      return state
  } 
}