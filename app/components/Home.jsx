import { getWeather } from 'store/weather/actions'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import momet from 'moment'

class Home extends Component {
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.props.dispatch(
        getWeather(position.coords.latitude, position.coords.longitude)
      )
    })
  }
  render () {
    const arr = this.props.myWeather
    return (
      <div>
          {arr.weather &&
            <div className="text-center status">
              <p><span>{arr.name},</span><span>{arr.sys.country}</span></p>
                <div className='Home_temp_weather'>
                  {arr.weather[0].main}
                  <img src={`//openweathermap.org/img/w/${arr.weather[0].icon}.png`} />
                  {arr.main.temp}&deg;C
                </div>
            </div>
          }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  myWeatherFetching: state.weather.myWeatherFetching,
  myWeather: state.weather.myWeather
})

export default connect(mapStateToProps)(Home)
