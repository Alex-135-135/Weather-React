import mainRequestService from './request.service'

const getWeather = (lat, lon) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?cnt=5&lat=${lat}&lon=${lon}&units=metric&APPID=236612a7763329b46b2c67a6cb5f6455`
  const options = {
    method: 'GET'
  }
  return mainRequestService(url, options)
}

export default {
  getWeather
}
