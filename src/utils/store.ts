import { configureStore } from "@reduxjs/toolkit";
// import {taskManagerReducer} from "../Features/taskManagerSlice";
import taskManagerReducer from "../Features/taskManagerSlice";

export const store = configureStore({
  reducer: {
    taskManager: taskManagerReducer,
  },
});
