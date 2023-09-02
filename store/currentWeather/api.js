import axios from "axios"
const currentWeather = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function currentweather_get_currentjson_read(payload) {
  return currentWeather.get(`/current.json`)
}
export const apiService = { currentweather_get_currentjson_read }
