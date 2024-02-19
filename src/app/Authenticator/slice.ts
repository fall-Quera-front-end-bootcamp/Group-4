import { createSlice } from "@reduxjs/toolkit";
import { FORGET_PASSWORD } from "./constant";

export const initialState = {
  mode: FORGET_PASSWORD,
  dataList: {
    taskItems: [],
    tasks: [],
    totalTasks: null,
    init: {},
  },
};

const slice = createSlice({
  name: "App/Authenticator",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = slice.actions;

export default slice.reducer;
