import {assign} from '../utils/Object'
import * as types from '../constants/ActionTypes'

const initialState = {
  points:0,
  name:'',
  head:'',
  id:''
}

export default function me(state = initialState, action){
  switch (action.type) { 
    case types.USER_GET_SUCCESS:
      let {val} = action
      return {
        points: val.point,
        name: val.userName,
        head: IMG_URL+val.avatarUrl,
        id: val.id
      }
    default:
      return state
  } 
}