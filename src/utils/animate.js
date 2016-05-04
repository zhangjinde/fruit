export function move(obj, option , cb){
  requestAnimationFrame =  requestAnimationFrame || webkitRequestAnimationFrame
  let s = option.start, e = option.end, time = option.time || 500
  let top = s.top, left = s.left
  let stp_t = (e.top-s.top)/500*16,
      stp_l = (e.left-s.left)/500*16
  let _mv=function(){
     obj.style='top:'+top+'px;left:'+left+'px'
     top+=stp_t
     left+=stp_l
    if(top < e.top){
      requestAnimationFrame(_mv)
    }else{
      cb()
    }
  }
  _mv()
}