function toDate(time, year){
  let da=new Date(time)
  let m=(da.getMonth()+1).toString(),
      d=da.getDate().toString(),
      y=da.getFullYear().toString();
  
  m.length===1 && (m='0'+m)
  
  d.length===1 && (d='0'+d)
  
  return !year ? `${m}-${d}` : `${y}-${m}-${d}`
}

export default {
  Time:{
    getText:function(id){
      let t={
        1:'10:00-12:00',
        2:'13:00-15:00',
        3:'15:00-18:00',        
        4:'18:00-20:00',
        0:'20:00-22:00',
      }
      return t[id%5]
    },
    isValid:function(id){
      if(id>5)return true;
      var d = new Date((toDate(+(new Date), 1)+ " " +({
        1: '11:00',
        2: '14:00',
        3: '16:30',
        4: '19:00',
        5: '21:00',
        '-1': '21:00'
      }[id])).replace(/-/g,'/'))

      return d>new Date()
    },
    getDay:function(id, year){
      if(id>5)
        return toDate(+(new Date)+1000*3600*24, year)
      else
       return toDate(+(new Date), year)
    }
  }
}