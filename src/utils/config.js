function toDate(time){
  let da=new Date(time)
  let m=(da.getMonth()+1).toString(),
      d=da.getDate().toString();
  
  m.length===1 && (m='0'+m)
  
  d.length===1 && (d='0'+d)
  
  return m+'-'+d
}

export default {
  Time:{
    getText:function(id){
      let t={
        1:'10:00-12:00',
        2:'14:00-18:00',
        0:'18:00-20.00',
      }
      return t[id%3]
    },
    getDay:function(id){
      if(id>3)
        return toDate(+(new Date)+1000*3600*24)
      else
       return toDate(+(new Date))
    }
  }
}