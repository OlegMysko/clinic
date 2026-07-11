import { createSlice } from "@reduxjs/toolkit";
import { createUserThunk } from "./createUserThunk";


interface userState {
  user: [];
  selectedUser: user | null;
  loading: boolean;
  error: null | string;

}
const initialState: userState = {
  user: [],
  selectedUser: null,
  loading: false,
  error:null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}, extraReducers: (builder) => {
    builder
      .addCase(createUserThunk.pending, state => {
        state.loading = true;
      })
      .addCase(createUserThunk.fulfilled, (state,action) =>  {
        state.user?.push(action.payload)
        state.loading = false;
      })
      .addCase(createUserThunk.rejected, (state) => {
      state.loading=false
      })
    
  }
})
export const {} = userSlice.actions;
export default userSlice.reducer;