import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../utils/store";

interface WorkspaceState {
  workspaceId: number | null;
}

const initialState: WorkspaceState = {
  workspaceId: null,
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    setWorkspaceId(state, action: PayloadAction<number | null>) {
      state.workspaceId = action.payload;
    },
  },
});

export const { setWorkspaceId } = workspaceSlice.actions;

export const selectWorkspaceId = (state: RootState) => state.workspace.workspaceId;

export default workspaceSlice.reducer;
