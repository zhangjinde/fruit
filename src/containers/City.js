import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'
import CityList from '../components/city/CityList'
import QuList from '../components/city/QuList'

import * as cityActions from '../actions/city'

class City extends Component {
  componentDidMount(){
    if(!this.props.cities.length)
      this.props.actions.getList();
  }
  change(){
    this.props.actions.changeType()
  }
  render() { 
    let { actions, history, type, qus, cities, NowCity, Nowqu, loading, error } = this.props 
    console.log(cities)
    let city = cities.filter(c=>c.id===NowCity)[0]
    return (
      <div className="city">
        <NavBack history={history}>
          <div className="title">
            <p className="ct">{city && city.name || '请选择城市'}</p>
            <p className="des">{city && city.desc || '请选择区域'}</p>
          </div>
          <a className="choose" onClick={this.change.bind(this)}>
            切换城市
            <i className={ type===2 ? "fa fa-angle-up":"fa fa-angle-up rotate" }></i>
          </a>
        </NavBack>
        {
          loading ? 
            <p className='loading'>正在加载，请稍候..</p>
          :
            error ?
              <p className='error'>出错了</p>
            :
              type===1 ? 
              <QuList qus={qus[NowCity]} now={Nowqu} actions={actions}/>
              :
              <CityList cities={cities} actions={actions}/>
        }
      </div>
    )
  }
}

City.propTypes = {
  cities: PropTypes.array.isRequired,
  qus: PropTypes.object.isRequired,
  NowCity: PropTypes.number.isRequired,
  Nowqu: PropTypes.number.isRequired,
  type: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  const {
    cities,
    qus,
    NowCity,
    Nowqu,
    type,
    loading,
    error
  } = state.city;
  
  return {
    cities,
    qus,
    NowCity,
    Nowqu,
    type,
    loading,
    error    
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cityActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)