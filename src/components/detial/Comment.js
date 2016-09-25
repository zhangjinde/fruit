import React, { Component } from 'react'
import CommentItem from './CommentItem'

import Loading from '../Loading'
import Error from '../Error'


export default class Comment extends Component{
  render() {
    let {comments, hideCmt, like, loading, error} = this.props
    return (
      <div className="comment"> 
        <a className="close" onClick={hideCmt}>
          <i className="iconfont icon-ricon-add" aria-hidden="true"></i>
        </a>
        <ul>
        {
        loading?
          <Loading/>
        :
        error?
          <Error/>
        :
          comments && comments.length?
            comments.map(c=>(
              <CommentItem item={c} like={like} key={c.id}/>
            ))
          :
            <li className='empty'>列表为空</li>
        }
        </ul>
      </div>
    )
  }
}