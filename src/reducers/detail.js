import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
  id:1,
  name:'智利葡萄',
  chandi:'智利',
  img:'/img/putao.jpg',
  like:false,
  likes:9,
  guige:'一份5个',
  price:'35',
  old:'40.00',
  comments:[],
  sales:100,
  imgs:['/img/putao.jpg','/img/putao.jpg','/img/putao.jpg'],
  discount:'5',
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
    default:
      return state
  } 
}