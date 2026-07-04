import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/types/User";
import { loginThunk } from "./authThunk";
interface authState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean;
  loading: boolean;
  error: null | string;
}

const initialState: authState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuth: false,
  loading: false,
  error:null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  }, extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, state => {
        state.loading = true;
      
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
        state.isAuth = true
      })
      .addCase(loginThunk.rejected, (state) => {
        state.user = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.isAuth = false;
    })
  }
});

export const {} = authSlice.actions;
export default authSlice.reducer;
