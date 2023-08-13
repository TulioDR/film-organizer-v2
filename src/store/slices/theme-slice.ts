import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
   name: "theme",
   initialState: {
      themeColor: "#5d9cec",
      themeColorName: "blue",
      isDarkMode: true,
   },
   reducers: {
      changeThemeColor(state, action) {
         state.themeColor = action.payload.color;
         state.themeColorName = action.payload.name;
      },
      toggleDarkMode(state) {
         state.isDarkMode = !state.isDarkMode;
      },
   },
});
export default themeSlice;
export const themeActions = themeSlice.actions;
