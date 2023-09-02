import axios from "axios"
import {
  FREE_DOG_API_USERNAME,
  FREE_DOG_API_PASSWORD
} from "react-native-dotenv"
const freeDogAPI = axios.create({
  baseURL: "https://dog.ceo/api",
  auth: { username: FREE_DOG_API_USERNAME, password: FREE_DOG_API_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function freedogapi_get_breeds_image_random_read(payload) {
  return freeDogAPI.get(`/breeds/image/random`)
}
export const apiService = { freedogapi_get_breeds_image_random_read }
