import React, { Component } from 'react'
import {Link} from 'react-router'

export default class BlockGoods extends Component{
  show(){
    let {list,icon} = this.refs 
    if(list.className==""){
      list.className="hide"
      icon.className="fa fa-chevron-circle-up right"
    }else{
      list.className=""
      icon.className="fa fa-chevron-circle-down right"
    }
  }
  cmt(id, cid, aid){
    this.props.showCmt(id, cid, aid)
  }
  showCmt(id){
    this.setState({
      [id]: true
    })
  }
  hideCmt(id){
    this.setState({
      [id]: false
    })
  }
  submit(g, idx){
    const { me, cmtActions, submit, order } = this.props;
    const val = this.refs['cmt'+idx].value;
    if(!val){
      return ;
    }

    cmtActions.submit({
      name: me.name || '匿名用户',
      id: me.id || user_id,
      head: me.head ? me.head.substr(me.head.lastIndexOf('/')+1) :'1003234393232034_head.jpg',
      content: val,
      pid: g.id,
      cid: g.cityId,
      aid: g.areaId,
      orderId: order.id
    },()=>{
      g.cmt = val;
      alert("评论成功");
      this.hideCmt(g.id);
      submit();
    },()=>{
      alert('出错了')
    })
  }
  render() {
    let {goods, showcmt} = this.props
    const state = this.state || {}
    return (
      <div className="block goods">
        <p className="tit">
          您订购的商品
          <a onClick={this.show.bind(this)}><i ref="icon" className="fa fa-chevron-circle-down right"></i></a>
        </p>
        <ul ref="list">
        {
          goods.map((g, idx)=>(
            <li key={g.id}>
              <div className="flex">
                <div className="img">
                  <Link to={`/fruit/${g.id}?cityId=${g.cityId}&areaId=${g.areaId}`}><img src={IMG_URL+g.image}/></Link>
                </div>
                <div className="name">{g.name}</div>
                <div className="sum">
                  <p className="cnt">×{g.number}</p>
                  <p className="price">￥{(g.number*g.price).toFixed(2)}</p>
                </div>
              </div>
              {
              showcmt?
              !g.comment?
              <p className="op" style={{display: !state[g.id] ? "block":"none"}}><a className="btn" onClick={this.showCmt.bind(this,g.id)}>发表评论</a></p>
              :
              <p className="op" style={{display: !state[g.id] ? "block":"none"}}><a className="btn" onClick={this.showCmt.bind(this,g.id)}>查看评论</a></p>
              :
              ""
              }
              {
              showcmt?
              !g.comment?
                <div className="cmt" style={{display: state[g.id] ? "block":"none"}}>
                  <textarea ref={"cmt"+idx}></textarea>
                  <p className="an">
                    <a className="btn" onClick={this.hideCmt.bind(this,g.id)}>取消</a>
                    <a className="btn" onClick={this.submit.bind(this,g,idx)}>发表</a>
                  </p>
                </div>
                :
                <div className="cmt" style={{display: state[g.id] ? "block":"none"}}>
                  <p>{g.comment}</p>
                   <p className="an"><a className="btn" onClick={this.hideCmt.bind(this,g.id)}>关闭</a></p>
                </div>  
              :
              ""                
              }
            </li>  
          ))
        }      
        </ul>
      </div>
    )
  }
}