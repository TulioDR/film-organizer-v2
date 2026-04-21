import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
   themeColor: string;
   themeColorName: string;
   isDarkMode: boolean;
}

const initialState: InitialState = {
   themeColor: "#5d9cec",
   themeColorName: "blue",
   isDarkMode: false,
};

const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      changeThemeColor(state, action) {
         state.themeColor = action.payload.color;
         state.themeColorName = action.payload.name;
      },
      toggleDarkMode(state) {
         state.isDarkMode = !state.isDarkMode;
      },
      startDarkMode(state) {
         state.isDarkMode = true;
      },
      stopDarkMode(state) {
         state.isDarkMode = false;
      },
   },
});
export default themeSlice;
export const themeActions = themeSlice.actions;
