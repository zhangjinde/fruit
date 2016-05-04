import * as types from '../constants/ActionTypes'

const initialState = {
  type:2,
  exchange:[{
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
  }],
  record:[{
    id:1,
    desc:'每日登陆',
    time:'2016-04-28',
    type:1, //1 ADD 2 DEL  
    point:3
  },{
    id:2,
    desc:'每日登陆',
    time:'2016-03-28',
    type:1,
    point:2
  },{
    id:3,
    desc:'新用户关注',
    time:'2016-03-28',
    type:1,
    point:100
  }],
  use:[],
  now:0,
}

export default function points(state = initialState, action){
  switch (action.type) {
    case types.POINT_CHANGE_TYPE:
      return Object.assign({},state,{
        type:action.val
      })
    default:
      return state
  } 
}