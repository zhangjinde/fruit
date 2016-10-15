import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {/*
  list1:[{
    id:1,
    name:'老王',
    tel:'18601232213',
    orderNo:123542132,
    createTime:'2016-05-12 22:33:00',
    arriveTime:'06日18:00-20:00',
    arriveAddr:'新香洲',
    goods:[{
      id:1,
      img:'/img/putao.jpg', 
      name:'广西荔枝',
      count:1,
      price:12,
    }],
    yunfei:'10.00',
    total:'12.00',
    state:1,  //1下单2在发送3已经送达0已经取消
  },{
    id:2,
    name:'老王',
    tel:'18601232213',    
    orderNo:56142112,
    createTime:'2016-05-11 22:13:00',
    arriveTime:'05日18:00-20:00',
    arriveAddr:'纠结',
    goods:[{
      id:1,
      img:'/img/putao.jpg',      
      name:'广西荔枝',
      count:1,
      price:12,
    },{
      id:3,
      img:'/img/putao.jpg',      
      name:'山峰',
      count:2,
      price:12,
    }],
    yunfei:'0.00',
    total:'36.00',
    state:2,    
  }],
  list2:[{
    id:3,
    name:'老王',
    tel:'18601232213',    
    orderNo:9527,
    createTime:'2016-05-12 22:33:00',
    arriveTime:'2016-05-13',
    arriveAddr:'新香洲',
    goods:[{
      id:1,
      img:'/img/putao.jpg',      
      name:'测试1',
      count:1,
      price:12,
    }],
    yunfei:'10.00',
    total:'12.00',
    state:3,
  },{
    id:4,
    name:'老王',
    tel:'18601232213',    
    orderNo:51928098,
    createTime:'2016-05-11 22:13:00',
    arriveTime:'2016-05-12',
    arriveAddr:'纠结',
    goods:[{
      id:1,
      img:'/img/putao.jpg',
      name:'测试2',
      count:1,
      price:12,
    },{
      id:2,
      img:'/img/putao.jpg',      
      name:'测试3',
      count:2,
      price:12,
    }],
    yunfei:'0.00',
    total:'36.00',
    state:0,    
  }],*/
  list1:[],
  list2:[],
  type:1,
  now:2,
  detail:{},
  finish:{},
  loading:false,
  error: false,
  outdate1: true,
  outdate2: true,
}
function genList(list){
  return list.map(it=>{
    let goods = it.productNames.split(',');
    goods = goods.map(g=>{
      let l = g.split('=');
      return {
        name: l[0],
        price: (+l[1]).toFixed(2),
        count: l[2]
      }
    })
    return {
      id: it.id,
      name: it.receiverName,
      tel: it.phoneNumber,    
      orderNo: it.number,
      createTime: it.orderTime,
      arriveTime: it.receiveTime,
      arriveAddr: it.address,
      goods,
      yunfei: it.freight||'0',
      total: (+it.totalPrice).toFixed(2),
      state: it.status || it.finalStatus,
      commented: it.commented || 0,
      couponPrice: it.couponPrice
    }
  })
}
function changeState(id, to, state){
  state.outdate1 = true;
  state.outdate2 = true;
  return state;
  //以下省去
  state.list1 = state.list1.map(l=>{
    if(l.id==id){
      l.state=to
    }
    return l;
  })
  state.list2 = state.list2.map(l=>{
    if(l.id==id){
      l.state=to
    }
    return l;
  })  
  //确认收货 == > 已收货订单
  if(to==5){
    let idx = state.list1.map(l=>l.id).indexOf(id), temp;
    if(idx>-1){
      temp = state.list1.splice(idx,1)
      state.list2.unshift(temp[0]);
    }
  }
  return state;
}
export default function order(state = initialState, action){
  let val = action.val;
  switch (action.type) {
    case types.CITY_CHANGE_QU:
      state.list1=[]
      state.list2=[]
      return state;    
    case types.ORDER_LIST_GET_START:
      return assign({},state,{
        loading:true,
        error: false 
      })  
    case types.ORDER_LIST_GET_ERROR:
      return assign({},state,{
        loading:false,
        error: true 
      })        
    case types.ORDER_LIST_GET_SUCCESS:
      return assign({},state,{
        list1: val.type==1 ? genList(val.val): state.list1,
        list2: val.type==2 ? genList(val.val): state.list2, 
        loading:false,
        error: false,
        outdate1: val.type==1 ? false : state.outdate1,
        outdate2: val.type==2 ? false : state.outdate2
      })
    case types.ORDER_DETAIL_GET_SUCCESS:
      let {order, products} = val
      return assign({},state,{
        detail: {
          arriveTime: order.receiveTime,
          state: order.status,
          history: order.history,
          goods: products,
          id: order.id,
          cityId: order.cityId,
          areaId: order.areaId,
          number: order.number,
          receiveTime: order.receiveTime,
          receiverName: order.receiverName,
          phoneNumber: order.phoneNumber,
          otalPrice: order.totalPrice,
          couponPrice: order.couponPrice,
          address: order.address
        }
      })
    case types.ORDER_CHANGE_STATE:
      return changeState(val.id, val.state, state);
    case types.ORDER_CHANGE_TYPE:
      return assign({},state,{
        type:val
      })
    case types.ORDER_FINISH:
      state.finish= val
      state.outdate1 = true
      state.outdate2 = true
      return state;
    default:
      return state
  } 
}