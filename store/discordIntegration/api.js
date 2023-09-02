import axios from "axios"
import { DISCORD_CHAT_INTEGRATION_TOKEN } from "react-native-dotenv"
const discordIntegration = axios.create({
  baseURL: "https://discord.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${DISCORD_CHAT_INTEGRATION_TOKEN}`
  }
})
function discordintegration_get_users_me_list(payload) {
  return discordIntegration.get(`/users/@me`)
}
function discordintegration_get_users_me_guilds_list(payload) {
  return discordIntegration.get(`/users/@me/guilds`)
}
function discordintegration_get_users_me_connections_list(payload) {
  return discordIntegration.get(`/users/@me/connections`)
}
export const apiService = {
  discordintegration_get_users_me_list,
  discordintegration_get_users_me_guilds_list,
  discordintegration_get_users_me_connections_list
}
