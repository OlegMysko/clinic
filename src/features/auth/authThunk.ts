import { accessTokenService } from "@/services/accessTokenService";
import { authService } from "@/services/authService"
import { refreshTokenService } from "@/services/refreshTokenService";
import { userService } from "@/services/userService";
import { createAsyncThunk } from "@reduxjs/toolkit"

export const loginThunk = createAsyncThunk(
  "accounts/login",
  async({
    email, password
  }: {
    email: string,
    password: string;
    }, thunkApi) => {
    try {
      const tokens = await authService.login(email, password)
      accessTokenService.save(tokens.access_token)
      refreshTokenService.save(tokens.refresh_token)
      const user = await userService.getCurrentUser()
     
      return {...tokens,user};
    } catch  {
      return thunkApi.rejectWithValue('Login failed')
    }
    
  }
)

  
