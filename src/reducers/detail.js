import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
  loading: false,
  error: false
}

function genProd(i){
  return {
    id:i.id,
    name:i.productName,
    chandi: i.origin,
    img: `${IMG_URL}/${i.coverBUrl}`,
    like:false,
    likes: i.likes,
    guige: i.standard,
    price: i.price,
    old: i.marketPrice,
    comments:[],
    sales:i.salesVolume,
    detailUrl: i.detailUrl,
    status: i.status,
    subdetailUrl: i.subdetailUrl,
    discount: (i.marketPrice-i.price).toFixed(2),
    loading: false,
    error: false
  }
}

export default function detail(state = initialState, action){
  switch (action.type) {
    case types.DETAIL_LIKE:
      return assign({},state,{
        likes:state.likes+1,
        like:true
      })
    case types.DETAIL_UNLIKE:
      return assign({},state,{
        likes:state.likes-1,
        like:false
      })
    case types.FRUIT_DETAIL_GET_START:
      return assign({},state,{
        loading: true,
        error: false,
      })
    case types.FRUIT_DETAIL_GET_SUCCESS:
      return genProd(action.val);
    case types.FRUIT_DETAIL_GET_ERROR:
      return assign({},state,{
        loading: false,
        error: true,
      })      
    default:
      return state
  } 
}