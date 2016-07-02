import React, { Component } from 'react'

export default class DetialBottom extends Component{
  add(cnt){
    this.props.add(cnt)
  }
  go(){
    this.props.history.push('/')
  }
  render() {
    let {num,status} = this.props

    return (
      <div className="fix-bottom">
        <p>
          <a className="go" onClick={this.go.bind(this)}>去选购商品</a>
        </p>
        {
          status == '0' ? 
            <p>
              <a className="del" >已售罄</a>
            </p>
          :            
          num>0?
            <p>
              <a className="del" onClick={this.add.bind(this,-1)}>-</a>
              <a className="num">{num}</a>
              <a className="add" onClick={this.add.bind(this,1)}>+</a>
            </p>        
          :
            <p>
              <a className="add" onClick={this.add.bind(this,1)}>买</a>
            </p>
        }
      </div>
    )
  }
}