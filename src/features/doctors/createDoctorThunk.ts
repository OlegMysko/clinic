import { userService } from "@/services/userService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../errors/getError";
import type { DoctorFormData } from "@/types/dotorFormData";

export const createDoctorThunk = createAsyncThunk(
  "doctors/profile",
  async (data:DoctorFormData, thunkApi) => {
    
    try {
      await userService.createDoctor(data)
    } catch (e) {
      return thunkApi.rejectWithValue(getErrorMessage(e))

    }
  }
)