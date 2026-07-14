import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../errors/getError";
import { userService } from "@/services/userService";

export const getAllDoctorsThunk = createAsyncThunk(
  "doctors",
  async (query, thunkApi) => {
    try {
    return  await userService.getAllDoctors(query);
    } catch (e) {
      return thunkApi.rejectWithValue(getErrorMessage(e));
    }
  },
);
