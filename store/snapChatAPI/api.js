import axios from "axios"
import { SNAPCHAT_API_SUPPORT_TOKEN } from "react-native-dotenv"
const snapChatAPI = axios.create({
  baseURL: "https://adsapi.snapchat.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${SNAPCHAT_API_SUPPORT_TOKEN}`
  }
})
function snapchatapi_get_v1_me_list(payload) {
  return snapChatAPI.get(`/v1/me`)
}
function snapchatapi_post_v1_adaccounts_ad_account_id_campaigns_create(
  payload
) {
  return snapChatAPI.post(
    `/v1/adaccounts/ad_account_id/campaigns`,
    payload.data
  )
}
export const apiService = {
  snapchatapi_get_v1_me_list,
  snapchatapi_post_v1_adaccounts_ad_account_id_campaigns_create
}
