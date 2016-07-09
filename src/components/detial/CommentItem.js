import React, { Component } from 'react'

export default class CommentItem extends Component{
  click(){
    const { item, like } = this.props;
    if(!item.liked){
      like(item.id, item.cityId, item.areaId)
    }
  }
  render() {
    let {item} = this.props
    return (
      <li>   
        <div className="header">
          <img src={IMG_URL + item.userImgUrl} className='head'/>
          <div className='txt'>
            <p className='name'>{item.userName}</p>
            <p className='date'>{item.date}</p>
          </div>
          <a className={item.liked? "icon color":"icon"} onClick={this.click.bind(this)}>
            <i className={item.liked ? "fa fa-heart": "fa fa-heart-o"}></i>
            {item.likes}
          </a>
        </div>
        <div className="content">{item.content}</div>
      </li>
    )
  }
}