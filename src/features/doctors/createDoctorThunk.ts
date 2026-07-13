import { userService } from "@/services/userService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../errors/getError";

export const createDoctorThunk = createAsyncThunk(
  "doctors/profile",
  async ({ user_id,
    first_name,
    last_name,
    specialization,
    years_experience,
    employmend_type,
    email,
    phone_number,
    working_days }: {
   user_id: number;
  first_name: string,
    last_name: string,
    specialization: string,
  years_experience: number,
      employmend_type: string,
  email:string,
  phone_number: number,
 
  working_days: string[],}, thunkApi) => {
    
    try {
      await userService.createDoctor(
        user_id,
        first_name,
        last_name,
        specialization,
        years_experience,
        employmend_type,
        email,
        phone_number,

        working_days)
    } catch (e) {
      return thunkApi.rejectWithValue(getErrorMessage(e))

    }
  }
)