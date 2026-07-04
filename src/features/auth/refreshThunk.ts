import { accessTokenService } from "@/services/accessTokenService";
import { authService } from "@/services/authService";
import { refreshTokenService } from "@/services/refreshTokenService";
import { userService } from "@/services/userService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const refreshToken = refreshTokenService.get();

      if (!refreshToken) {
        return thunkApi.rejectWithValue("No refresh token");
      }

      const token = await authService.refresh(refreshToken);

      accessTokenService.save(token.access_token);

      const user = await userService.getCurrentUser();

      return {
        accessToken: token.access_token,
        user,
      };
    } catch {
      refreshTokenService.remove();
      accessTokenService.remove();

      return thunkApi.rejectWithValue("Session expired");
    }
  }
);