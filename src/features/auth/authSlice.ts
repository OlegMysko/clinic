import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import  type { User } from "@/types/User";
interface authState  {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuth: boolean;
  
}

const initialState: authState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuth:false,

}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action:PayloadAction<{
    user: User;
    accessToken: string;
      refreshToken: string;
      isAuth: boolean;
  }>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuth = false;
    }
  }
})

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer