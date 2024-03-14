// authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    logout(state) {
        state.isAuthenticated = false;
        state.error = null;
    },
  },
});

export const { setAuthenticated, setError, logout } = authSlice.actions;
export default authSlice.reducer;