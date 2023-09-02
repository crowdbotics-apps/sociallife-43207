import axios from "axios"
const facebookMessenger = axios.create({
  baseURL: "https://graph.facebook.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function facebookmessenger_get_v160_me_read(payload) {
  return facebookMessenger.get(`/v16.0/me`, {
    params: { access_token: payload.access_token }
  })
}
function facebookmessenger_get_v160_page_id_conversations_read(payload) {
  return facebookMessenger.get(`/v16.0/${payload.page_id}/conversations`, {
    params: { access_token: payload.access_token }
  })
}
export const apiService = {
  facebookmessenger_get_v160_me_read,
  facebookmessenger_get_v160_page_id_conversations_read
}
