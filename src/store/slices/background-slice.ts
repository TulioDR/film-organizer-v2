import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
   background: string | null;
}

const initialState: InitialState = {
   background: null,
};

const backgroundSlice = createSlice({
   name: "background",
   initialState,
   reducers: {
      setBackground(state, action) {
         state.background = action.payload;
      },
      removeBackground(state) {
         state.background = null;
      },
   },
});

export default backgroundSlice;
export const backgroundActions = backgroundSlice.actions;
