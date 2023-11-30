import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1,
    email: 'abdullahisamsudeen@gmail.com',
  },
  reducers: {
    increment: (state) => {
      if (state.count < 4) {
        state.count += 1;
      }
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { increment, setEmail } = counterSlice.actions;
export default counterSlice.reducer;
