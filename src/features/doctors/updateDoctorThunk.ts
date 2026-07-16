import type { DoctorFormData } from "@/types/dotorFormData";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../errors/getError";
import { userService } from "@/services/userService";

export const updateDoctorThunk = createAsyncThunk(
  "doctors/prodile",
  async ({ id, data }: { id: string, data: DoctorFormData }, thunkApi) => {
    try {
     return  await userService.updateDoctor(  id, data)

    } catch (e) {
      return thunkApi.rejectWithValue(getErrorMessage(e))
    }
  }
)