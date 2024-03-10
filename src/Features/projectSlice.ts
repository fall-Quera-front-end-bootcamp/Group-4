
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProjectState {
  projectId: number | null;
}

const initialState: ProjectState = {
  projectId: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectId(state, action: PayloadAction<number | null>) {
      state.projectId = action.payload;
    },
  },
});

export const { setProjectId } = projectSlice.actions;

export const selectProjectId = (state: { project: ProjectState }) =>
  state.project.projectId;

export default projectSlice.reducer;
