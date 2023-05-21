import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "./userAPI";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await userAPI.fetchUser();
  return response.data;
});

const initialState = {
  name: "No user",
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.status = "complete";
      state.name = action.payload.username;
    });
  },
});

export const selectUserName = (state) => state.user.name;
export const selectUserFetchStatus = (state) => state.user.status;

export default userSlice.reducer;
