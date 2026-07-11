import { userService } from "@/services/userService";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { getErrorMessage } from "../errors/getError";

export const createUserThunk = createAsyncThunk(
  "accounts/register",
  async({
    firstName,lastName,email,password
  }: {
    firstName: string,
    lastName: string,
    email: string,
    password:string
    }, thunkApi) => {
    try {
      await userService.register(firstName, lastName, email, password)
      await new Promise(resolve => setTimeout(resolve, 3000));
        
    } catch (e) {
      return thunkApi.rejectWithValue(getErrorMessage(e))
    }
  }
)