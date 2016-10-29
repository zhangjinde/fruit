import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
  loading: false,
  error: false,
  comments: [],
  cmtLoading: false,
  cmtError: false,
}

function genProd(i){
  return {
    id:i.id,
    name:i.productName,
    chandi: i.origin,
    img: `${IMG_URL}/${i.coverBUrl}`,
    like:false,
    likes: i.likes,
    comments:[],
    guige: i.standard,
    price: i.price,
    old: i.marketPrice,
    sales:i.salesVolume,
    detailUrl: i.detailUrl,
    status: i.status,
    subdetailUrl: i.subdetailUrl,
    cityId: i.cityId,
    areaId: i.areaId,
    discount: (i.marketPrice-i.price).toFixed(2),
    restrict: i.restrict,
    phone: i.phone
  }
}
function updCmt(cmts, id){
  let res = []
  res = cmts.map(c=>{
    if(c.id==id){
      c.likes++
      c.liked=true
    }
    return c;
  })
  return res;
}
export default function detail(state = initialState, action){
  switch (action.type) {
    case types.DETAIL_LIKE:
      return assign({},state,{
        likes:state.likes+1,
        like:true
      })
    case types.FRUIT_DETAIL_GET_START:
      return assign({},state,{
        loading: true,
        error: false,
      })
    case types.FRUIT_DETAIL_GET_SUCCESS:
      return assign({},state,genProd(action.val));
    case types.FRUIT_DETAIL_GET_ERROR:
      return assign({},state,{
        loading: false,
        error: true,
      })
    case types.FRUIT_DETAIL_CMT_LIKE:
      return assign({},state,{
        comments: updCmt(state.comments, action.val)
      })
    case types.FRUIT_DETAIL_CMT_GET_START:
      return assign({},state,{
        cmtLoading: true,
        cmtError: false,
      })      
    case types.FRUIT_DETAIL_CMT_GET_SUCCESS:
      return assign({},state,{
        comments:action.val,
        cmtLoading: false,
        cmtError: false,
      })
    case types.FRUIT_DETAIL_CMT_GET_ERROR:
      return assign({},state,{
        comments:action.val,
        cmtLoading: false,
        cmtError: true,
      })      
    default:
      return state
  } 
}