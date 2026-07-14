import { userService } from "@/services/userService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "../errors/getError";

export const createDoctorThunk = createAsyncThunk(
  "doctors/profile",
  async ({
    userId,
    firstName,
    lastName,
    specialization,
    yearsExperience,
    employmendType,
    email,
    phoneNumber,
    workingDays }: {
   userId: number;
  firstName: string,
    lastName: string,
    specialization: string,
  yearsExperience: number,
      employmendType: string,
  email:string,
  phoneNumber: number,
 
  workingDays: string[],}, thunkApi) => {
    
    try {
      await userService.createDoctor(
        userId,
        firstName,
        lastName,
        specialization,
        yearsExperience,
        employmendType,
        email,
        phoneNumber,

        workingDays)
    } catch (e) {
      return thunkApi.rejectWithValue(getErrorMessage(e))

    }
  }
)