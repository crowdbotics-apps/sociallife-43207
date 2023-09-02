import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const facebookmessenger_get_v160_page_id_conversations_read = createAsyncThunk(
  "facebookmessenger_response_get_GetConversationonpages/facebookmessenger_get_v160_page_id_conversations_read",
  async payload => {
    const response = await apiService.facebookmessenger_get_v160_page_id_conversations_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const facebookmessenger_response_get_GetConversationonpagesSlice = createSlice({
  name: "facebookmessenger_response_get_GetConversationonpages",
  initialState,
  reducers: {},
  extraReducers: {
    [facebookmessenger_get_v160_page_id_conversations_read.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [facebookmessenger_get_v160_page_id_conversations_read.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [facebookmessenger_get_v160_page_id_conversations_read.rejected]: (
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
  facebookmessenger_get_v160_page_id_conversations_read,
  slice: facebookmessenger_response_get_GetConversationonpagesSlice
}
