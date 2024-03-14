import { configureStore } from "@reduxjs/toolkit";
import taskManagerReducer from "../Features/taskManagerSlice";
import authenticatorReducer from "../app/Authenticator/slice";
import workspaceReducer from "../Features/workspaceSlice";
import projectReducer from "../Features/projectSlice"
import authReducer from "../app/Authenticator/authSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// export const rootReducer = combineReducers({})

// const store = configureStore({
//   reducer: {

//     taskManager: taskManagerReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    taskManager: taskManagerReducer,
    authenticator: authenticatorReducer,
    auth: authReducer,
    workspace: workspaceReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
