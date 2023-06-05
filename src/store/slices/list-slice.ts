import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
   name: "lists",
   initialState: {
      lists: [],
   },
   reducers: {
      setLists(state, action) {
         state.lists = action.payload;
      },
   },
});

export default listSlice;
export const listActions = listSlice.actions;
