export function move(obj, option , before, cb){
  let raf =  window.requestAnimationFrame || window.webkitRequestAnimationFrame
  let lastTime = 0, currTime;
  if (!raf) {
    raf = function(callback, element) {
      currTime = new Date().getTime();
      let timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
      let id = window.setTimeout(function() {
          callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  let s = option.start, e = option.end, time = option.time || 700
  let top = s.top, left = s.left
  let stp_t = (e.top-s.top)/time*16,
      stp_l = (e.left-s.left)/time*16
  if(stp_t<0)return;
  before && (before())
  let _mv=function(){
     obj.style.left=left+'px'
     obj.style.top=top+'px'
     left+=stp_l
     top+=stp_t
    if(top < e.top){
      raf(_mv)
    }else{
      cb && (cb())
    }
  }
  _mv()
}