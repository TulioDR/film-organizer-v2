import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
   background: string | null;
   hideUi: boolean;
}

const initialState: InitialState = {
   background: null,
   hideUi: false,
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
      showBackground(state) {
         state.hideUi = true;
      },
      hideBackground(state) {
         state.hideUi = false;
      },
      toggleBackground(state) {
         state.hideUi = !state.hideUi;
      },
   },
});

export default backgroundSlice;
export const backgroundActions = backgroundSlice.actions;
