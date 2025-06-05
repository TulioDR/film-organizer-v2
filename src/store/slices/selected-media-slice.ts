import { createSlice } from "@reduxjs/toolkit";

const selectedMediaSlice = createSlice({
   name: "selectedMedia",
   initialState: {
      selectedMedia: null,
      cardHeight: null,
      isFixed: true,
   },
   reducers: {
      changeSelectedMedia(state, action) {
         state.selectedMedia = action.payload.selectedMedia;
         state.cardHeight = action.payload.cardHeight;
      },
      resetSelectedMedia(state) {
         state.selectedMedia = null;
         state.cardHeight = null;
      },
      setToFixed(state) {
         state.isFixed = true;
      },
      removedFixed(state) {
         state.isFixed = false;
      },
   },
});

export default selectedMediaSlice;
export const selectedMediaActions = selectedMediaSlice.actions;
