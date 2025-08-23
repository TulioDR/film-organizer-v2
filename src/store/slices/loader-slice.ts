import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
   name: "loader",
   initialState: {
      isLoading: false,
   },
   reducers: {
      startLoading: (state) => {
         state.isLoading = true;
      },
      stopLoading: (state) => {
         state.isLoading = false;
      },
   },
});

export default loaderSlice;
export const loaderActions = loaderSlice.actions;
