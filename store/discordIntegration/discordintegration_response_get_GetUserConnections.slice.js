import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const discordintegration_get_users_me_connections_list = createAsyncThunk(
  "discordintegration_response_get_GetUserConnections/discordintegration_get_users_me_connections_list",
  async payload => {
    const response = await apiService.discordintegration_get_users_me_connections_list(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const discordintegration_response_get_GetUserConnectionsSlice = createSlice({
  name: "discordintegration_response_get_GetUserConnections",
  initialState,
  reducers: {},
  extraReducers: {
    [discordintegration_get_users_me_connections_list.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [discordintegration_get_users_me_connections_list.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [discordintegration_get_users_me_connections_list.rejected]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  discordintegration_get_users_me_connections_list,
  slice: discordintegration_response_get_GetUserConnectionsSlice
}
