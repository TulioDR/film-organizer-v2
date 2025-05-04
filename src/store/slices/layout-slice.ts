import { createSlice } from "@reduxjs/toolkit";

const layoutSlice = createSlice({
   name: "layout",
   initialState: {
      isHidden: false,
   },
   reducers: {
      hideLayout(state) {
         state.isHidden = true;
      },
      revealLayout(state) {
         state.isHidden = false;
      },
   },
});

export default layoutSlice;
export const layoutActions = layoutSlice.actions;
