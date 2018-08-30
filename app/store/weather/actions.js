import { weatherService } from 'project-services'
import * as types from './actionTypes'

export const getWeather = (...arg) => {
  return dispatch => {
    return new Promise(resolve => {
      try {
        dispatch({ type: types.GET_WEATHER })
        weatherService.getWeather(...arg).then(myWeather => {
          dispatch({ type: types.GET_WEATHER_SUCCESS, payload: {myWeather} })
          resolve()
        })
      } catch (err) {
        dispatch({ type: types.GET_WEATHER_ERROR })
        alert(err.message)
        resolve()
      }
    })
  }
}
