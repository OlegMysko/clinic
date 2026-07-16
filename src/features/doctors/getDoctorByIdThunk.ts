import { userService } from "@/services/userService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../errors/getError";

export const getDoctorByIdThunk = createAsyncThunk(
  "doctor/getById",
  async (id: string, thunkApi) => {
    try {
    return await userService.getDoctorProfile(id)
    }
    catch (e) {
      return thunkApi.rejectWithValue(getErrorMessage(e))
      
   }
  }
);