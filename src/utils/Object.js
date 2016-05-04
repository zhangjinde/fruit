export function assign(target, ...objs){
  objs.map(obj=>{
    for(var attr in obj){
      if(obj.hasOwnProperty(attr)){
        //if(typeof obj[attr] === 'object'){
          //target[attr] = assign({},obj[attr])
        //}else{
          target[attr] = obj[attr]
        //}
      }
    }
  })
  return target
}