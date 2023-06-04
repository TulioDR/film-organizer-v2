import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
   name: "list",
   initialState: {
      lists: [],
      revealSidebar: false,
   },
   reducers: {
      setLists(state, action) {
         state.lists = action.payload;
      },
   },
});

export default listSlice;
export const listActions = listSlice.actions;
