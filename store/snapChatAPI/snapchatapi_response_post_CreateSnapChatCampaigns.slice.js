import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const snapchatapi_post_v1_adaccounts_ad_account_id_campaigns_create = createAsyncThunk(
  "snapchatapi_response_post_CreateSnapChatCampaigns/snapchatapi_post_v1_adaccounts_ad_account_id_campaigns_create",
  async payload => {
    const response = await apiService.snapchatapi_post_v1_adaccounts_ad_account_id_campaigns_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const snapchatapi_response_post_CreateSnapChatCampaignsSlice = createSlice({
  name: "snapchatapi_response_post_CreateSnapChatCampaigns",
  initialState,
  reducers: {},
  extraReducers: {
    [snapchatapi_post_v1_adaccounts_ad_account_id_campaigns_create.pending]: (
      state,
      action
    ) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [snapchatapi_post_v1_adaccounts_ad_account_id_campaigns_create.fulfilled]: (
      state,
      action
    ) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [snapchatapi_post_v1_adaccounts_ad_account_id_campaigns_create.rejected]: (
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
  snapchatapi_post_v1_adaccounts_ad_account_id_campaigns_create,
  slice: snapchatapi_response_post_CreateSnapChatCampaignsSlice
}
