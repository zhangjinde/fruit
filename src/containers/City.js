import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import NavBack from '../components/NavBack'
import CityList from '../components/city/CityList'
import QuList from '../components/city/QuList'

import * as cityActions from '../actions/city'

class City extends Component {
  change(){
    this.props.actions.changeType()
  }
  render() { 
    let { actions, history, type, qus, cities, NowCity, Nowqu } = this.props 
    let city = cities.filter(c=>c.id===NowCity)[0]
    return (
      <div className="city">
        <NavBack history={history}>
          <div className="title">
            <p className="ct">{city.name}</p>
            <p className="des">{city.desc}</p>
          </div>
          <a className="choose" onClick={this.change.bind(this)}>
            切换城市
            <i className={ type===2 ? "fa fa-angle-up":"fa fa-angle-up rotate" }></i>
          </a>
        </NavBack>
        {
          type===1?
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
    type
  } = state.city;
  
  return {
    cities,
    qus,
    NowCity,
    Nowqu,
    type
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