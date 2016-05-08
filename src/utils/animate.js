export function move(obj, option , before, cb){
  requestAnimationFrame =  requestAnimationFrame || webkitRequestAnimationFrame
  let s = option.start, e = option.end, time = option.time || 500
  let top = s.top, left = s.left
  let stp_t = (e.top-s.top)/500*16,
      stp_l = (e.left-s.left)/500*16
  before && (before())
  let _mv=function(){
     obj.style.left=left+'px'
     obj.style.top=top+'px'
     left+=stp_l
     top+=stp_t
    if(top < e.top){
      requestAnimationFrame(_mv)
    }else{
      cb && (cb())
    }
  }
  _mv()
}