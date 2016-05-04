import {assign} from '../utils/Object'

const initialState = {
  points:120,
  name:'hahahah',
  head:'/img/head.png'
}

export default function me(state = initialState, action){
  switch (action.type) { 
    default:
      return state
  } 
}