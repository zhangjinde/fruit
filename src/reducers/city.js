import * as types from '../constants/ActionTypes'
import {assign} from '../utils/Object'

const initialState = {
/*
  cities:[{
    id:1,
    name:'中山',
    img:'/img/city.jpg',
    desc:'当地网点支持两小时内到货'
  },{
    id:2,
    name:'珠海',
    img:'/img/city.jpg',
    desc:'当地网点支持三小时内到货'    
  },{
    id:3,
    name:'发大水',
    img:'/img/city.jpg',
    desc:'当地网点支持四小时内到货'    
  },{
    id:4,
    name:'开发拉倒',
    img:'/img/city.jpg',
    desc:'当地网点支持六小时内到货'
  }],
  qus:{
    '1':[{id:1,name:'新香洲'},{id:13,name:'吉大'},{id:12,name:'拱北'},{id:11,name:'南平'},{id:8,name:'潜山'},{id:9,name:'烽火'}],
    '2':[{id:14,name:'fad'}],
    '3':[{id:114,name:'tt'}],
    '4':[{id:144,name:'dasf'}],
  },
  NowCity:1,
  Nowqu:12,
  type:1,
  */
  loading: false,
  error: false,
  cities: [],
  qus: {},
  NowCity: cityid ? cityid : -1,
  choCity: cityid ? cityid : -1,
  Nowqu: areaid? areaid : -1,
  type: 1,
}
function setCity(list){
  let cities=[],qus={};
  list.map(item => {
    const {id, cityName, avatarUrl, areas} = item;
    cities.push({
      id,
      name: cityName,
      img: avatarUrl,
      desc: '请选择您所在的区域购买'
    });
    qus[id] = [];
    areas.split(',').map(a=>{
      let q = a.split('=')
      qus[id].push({
        id: q[0],
        name: q[1]
      })
    })
  })
  return [cities, qus];
}
export default function cart(state = initialState, action){
  switch (action.type) {
    case types.CITY_CHANGE_TYPE:
      return assign({},state,{
        type:3-state.type
      })
    case types.CITY_CHANGE_QU:
      return assign({},state,{
        Nowqu:action.val,
        NowCity: state.choCity
      })
    case types.CITY_CHANGE_CITY:
      return assign({},state,{
        choCity:action.val,
        type:3-state.type
      }) 
    case types.CITY_GET_START:
      return assign({},state,{
        loading:true,
        error:false
      })
    case types.CITY_GET_SUCCESS:
      let cities=[], qus={};
      let all = setCity(action.val);

      return assign({},state,{
        loading:false,
        error:false,
        cities: all[0],
        qus: all[1]
      })      
    case types.CITY_GET_ERROR:
      return assign({},state,{
        loading: false,
        error: true
      })      
    default:
      return state
  } 
}