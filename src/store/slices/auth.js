import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
  },
  reducers: {
    signIn: (state, action) => {
      state.user = action.payload;
    },
    signOut: (state) => {
      state.user = {};
    },
    signUp: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signIn, signOut, signUp } = authSlice.actions;
export default authSlice.reducer;
