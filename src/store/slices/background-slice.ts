import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
   name: "background",
   initialState: {
      backgroundImage: null,
      backgroundKey: "",
   },
   reducers: {
      setBackground(state, action) {
         const { backgroundImage, backgroundKey } = action.payload;
         state.backgroundImage = backgroundImage;
         state.backgroundKey = backgroundKey + backgroundImage;
      },
      removeBackground(state) {
         state.backgroundImage = null;
         state.backgroundKey = "";
      },
   },
});

export default backgroundSlice;
export const backgroundActions = backgroundSlice.actions;
