import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const discordintegration_get_users_me_guilds_list = createAsyncThunk(
  "discordintegration_response_get_GetUserguilds/discordintegration_get_users_me_guilds_list",
  async payload => {
    const response = await apiService.discordintegration_get_users_me_guilds_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const discordintegration_response_get_GetUserguildsSlice = createSlice({
  name: "discordintegration_response_get_GetUserguilds",
  initialState,
  reducers: {},
  extraReducers: {
    [discordintegration_get_users_me_guilds_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [discordintegration_get_users_me_guilds_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [discordintegration_get_users_me_guilds_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  discordintegration_get_users_me_guilds_list,
  slice: discordintegration_response_get_GetUserguildsSlice
}
