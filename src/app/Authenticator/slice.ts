import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FORGET_PASSWORD, LOGIN } from "./constant";

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  mobile: string;
  email: string;
  password: string;
}

interface AuthState {
  mode: string;
  loginInfos: Login;
  registerInfos: Register;
}

export const initialState: AuthState = {
  loginInfos: { email: "", password: "" },
  mode: LOGIN,
  registerInfos: { name: "", password: "", mobile: "", email: "" },
};

// export const initialState = {
//   mode: FORGET_PASSWORD,
//   dataList: {
//     taskItems: [],
//     tasks: [],
//     totalTasks: null,
//     init: {},
//   },
// };

const slice = createSlice({
  name: "Authenticator",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<string>) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = slice.actions;

export default slice.reducer;
