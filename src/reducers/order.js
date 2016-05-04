import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
  list1:[],
  list2:[],
  type:1
}

export default function cart(state = initialState, action){
  switch (action.type) {
    case types.ORDER_CHANGE_TYPE:
      return assign({},state,{
        type:action.val
      })
    default:
      return state
  } 
}