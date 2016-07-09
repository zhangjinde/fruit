import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'
import CityList from '../components/city/CityList'
import QuList from '../components/city/QuList'
import Loading from '../components/Loading'
import Error from '../components/Error'

import * as cityActions from '../actions/city'

class City extends Component {
  componentDidMount(){
    if(!this.props.cities.length)
      this.props.actions.getList();
  }
  change(){
    const {actions} = this.props
    actions.changeType()
  }
  
  render() { 
    let { actions, history, type, qus, cities, NowCity, choCity, Nowqu, loading, error } = this.props 
    let city = cities.filter(c=>c.id===choCity)[0]
    return (
      <div className="city">
        <NavBack history={history}>
          <div className="title">
            <p className="ct">{city && city.name || cityname}</p>
            <p className="des">{city && city.desc || areaname}</p>
          </div>
          <a className="choose" onClick={this.change.bind(this)}>
            切换城市
            <i className={ type===2 ? "fa fa-angle-up":"fa fa-angle-up rotate" }></i>
          </a>
        </NavBack>
        {
          loading ? 
            <Loading/>
          :
            error ?
              <Error/>
            :
              type===1 ? 
              <QuList qus={qus[choCity]} now={Nowqu} actions={actions} history={history}/>
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
    error,
    choCity
  } = state.city;
  
  return {
    cities,
    qus,
    NowCity,
    Nowqu,
    type,
    loading,
    error,
    choCity
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