import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme-slice";
import { createWrapper } from "next-redux-wrapper";
import sidebarSlice from "./slices/sidebar-slice";
import listSlice from "./slices/list-slice";
import bookmarkSlice from "./slices/bookmark-slice";

const store = configureStore({
   reducer: {
      theme: themeSlice.reducer,
      sidebar: sidebarSlice.reducer,
      lists: listSlice.reducer,
      bookmark: bookmarkSlice.reducer,
   },
});
const makeStore = () => store;

const wrapper = createWrapper(makeStore);
export default wrapper;
