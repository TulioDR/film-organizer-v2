import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
   isLoginAdviceOpen: false,
   isSaveMediaOpen: false,
   mediaToSave: null as string | null,
};

const bookmarkSlice = createSlice({
   name: "bookmark",
   initialState: {
      isLoginAdviceOpen: false,
      isSaveMediaOpen: false,
      mediaToSave: null,
   },
   reducers: {
      openSaveMediaModal(state, action) {
         state.isSaveMediaOpen = true;
         state.mediaToSave = action.payload;
      },
      closeSaveMediaModal(state) {
         state.isSaveMediaOpen = false;
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
