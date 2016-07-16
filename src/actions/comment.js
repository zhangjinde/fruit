import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function subStart(){

}

function subSuccess(){

}

function subError(){

}

export function submit(val){
  return dispatch => {
    //dispatch(subStart())
    const url = URL+'/comment/new/'
    const body = {
      userName: val.name,//评论者名，方便加载列表时直接显示
      userId: val.id,//评论者Id
      userImgUrl: val.head,//评论者头像
      content: val.content,//评论内容
      productId: val.pid,//被评论商品id
      cityId: val.cid,//被评论商品所在cityId
      areaId: val.aid//被评论商品所在areaId
    }

    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(json => {
      //dispatch(subSuccess())
     })
    .catch(() => {
      // dispatch(subError())
    })
  }
}