import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const snapchatapi_get_v1_me_list = createAsyncThunk(
  "snapchatapi_response_get_GetSnapchatUsers/snapchatapi_get_v1_me_list",
  async payload => {
    const response = await apiService.snapchatapi_get_v1_me_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const snapchatapi_response_get_GetSnapchatUsersSlice = createSlice({
  name: "snapchatapi_response_get_GetSnapchatUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [snapchatapi_get_v1_me_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [snapchatapi_get_v1_me_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [snapchatapi_get_v1_me_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  snapchatapi_get_v1_me_list,
  slice: snapchatapi_response_get_GetSnapchatUsersSlice
}
