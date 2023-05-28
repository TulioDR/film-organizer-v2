import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme-slice";
import { createWrapper } from "next-redux-wrapper";
import sidebarSlice from "./slices/sidebar-slice";

const store = configureStore({
   reducer: {
      theme: themeSlice.reducer,
      sidebar: sidebarSlice.reducer,
   },
});
const makeStore = () => store;

const wrapper = createWrapper(makeStore);
export default wrapper;
