import Immutable from 'seamless-immutable'
import * as types from './actionTypes'

const initialState = Immutable({
  myWeather: {},
  myWeatherFetching: false,
})

export default (state = initialState, action = {}) => {
  switch (action.type) {
  case types.GET_WEATHER:
    return state.merge({
      myWeatherFetching: true
    })
  case types.GET_WEATHER_SUCCESS:
    return state.merge({
      myWeather: action.payload.myWeather,
      myWeatherFetching: false
    })
  case types.GET_WEATHER_ERROR:
    return state.merge({
      myWeatherFetching: true,
      myWeather: {}
    })
  default:
    return state
  }
}
