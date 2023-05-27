import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
   name: "theme",
   initialState: { themeColor: "#3b82f6" },
   reducers: {
      changeThemeColor(state, action) {
         console.log(action.payload);
         localStorage.setItem("theme", action.payload);
         state.themeColor = action.payload;
      },
   },
});
export default themeSlice;
export const themeActions = themeSlice.actions;
