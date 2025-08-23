import { createSlice } from "@reduxjs/toolkit";

const pageTitleSlice = createSlice({
   name: "pageTitle",
   initialState: {
      title: [null, null, null],
   },
   reducers: {
      setTitle(state, action) {
         state.title = action.payload;
      },
      removeTitle(state) {
         state.title = [null, null, null];
      },
   },
});

export default pageTitleSlice;
export const pageTitleActions = pageTitleSlice.actions;
