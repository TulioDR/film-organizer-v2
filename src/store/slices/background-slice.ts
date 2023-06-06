import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
   name: "background",
   initialState: {
      backgroundImage: null,
      backgroundKey: "",
   },
   reducers: {
      setBackground(state, action) {
         state.backgroundImage = action.payload.backgroundImage;
         state.backgroundKey = action.payload.backgroundKey;
      },
      removeBackground(state) {
         state.backgroundImage = null;
         state.backgroundKey = "";
      },
   },
});

export default backgroundSlice;
export const backgroundActions = backgroundSlice.actions;
