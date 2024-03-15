import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../utils/store";

interface BoardState {
  boardId: number | null;
}

const initialState: BoardState = {
  boardId: null,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoardId(state, action: PayloadAction<number | null>) {
      state.boardId = action.payload;
    },
  },
});

export const { setBoardId } = boardSlice.actions;

export const selectProjectId = (state: RootState) => state.board.boardId;

export default boardSlice.reducer;
