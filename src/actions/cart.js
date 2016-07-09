import * as types from '../constants/ActionTypes'

export function updPos(val){
  return {
    type:types.CART_UPDPOS,
    val
  }
}
export function edit(){
  return {
    type:types.CART_EDIT
  }
}

export function chooseCoupon(id){
  return {
    type:types.CART_CHANGE_COUPON,
    val:id
  }
}

export function add(item,val){
  return {
    type:types.CART_ADD,
    val:{
      item,
      val
    }
  }
}

export function clear(){
  return {
    type:types.CART_CLEAR
  }
}


function submitStart(){
  return {
    type:types.CART_SUBMIT_START
  }
}
function submitSuccess(){
  return {
    type:types.CART_SUBMIT_SUCCESS
  }
}
function submitError(){
  return {
    type:types.CART_SUBMIT_ERROR
  }
}
export function submit(data, cb){
  return dispatch => {
    dispatch(submitStart())
    const url = URL+'/orderOn/new/'
    const addr = data.addr
    const productIds = data.goods.map((g)=>g.id)
    const nums = data.goods.map((g)=>g.count)

    return fetch(url,{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productIds:productIds,
        nums: nums,
        receiverName:addr.name,
        phoneNumber:addr.tel,
        address: addr.addr,
        couponId: data.couponId,
        receiveTime: data.time,
        cityarea:'上海',
        userId:user_id,
        areaId:1,
        cityId:1
      })
    })
    .then(response => response.json())
    .then(json => {
      dispatch(submitSuccess())
      cb(json.number, data);
     })
    .catch(() => dispatch(submitError()))
  }
}