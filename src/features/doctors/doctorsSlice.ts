import type { Doctor } from "@/types/doctor";
import { createSlice } from "@reduxjs/toolkit";
import { createDoctorThunk } from "./createDoctorThunk";


interface DoctorsState {
  doctors: Doctor[] | [];
  selectedDoctors: Doctor | null;
  loading: boolean;
  error: null | string;

}

const initialState: DoctorsState = {
  doctors: [],
  selectedDoctors: null,
  loading: false,
  error:null,
}
const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {}, extraReducers: (builder) => {
    builder
      .addCase(createDoctorThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(createDoctorThunk.fulfilled, (state, action) => {
        state.doctors.push(action.payload)
        state.loading = false;
      })
      .addCase(createDoctorThunk.rejected, (state) => {
        state.loading = false;
    })
  }
})
export const { } = doctorSlice.actions;
export default doctorSlice.reducer
