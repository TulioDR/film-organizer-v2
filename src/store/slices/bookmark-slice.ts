import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
   name: "bookmark",
   initialState: {
      isLoginAdviceOpen: false,
      mediaToSave: null,
   },
   reducers: {
      openSaveMediaModal(state, action) {
         state.mediaToSave = action.payload;
      },
      closeSaveMediaModal(state) {
         state.mediaToSave = null;
      },
      openLoginAdviceModal(state) {
         state.isLoginAdviceOpen = true;
      },
      closeLoginAdviceModal(state) {
         state.isLoginAdviceOpen = false;
      },
   },
});

export default bookmarkSlice;
export const bookmarkActions = bookmarkSlice.actions;
