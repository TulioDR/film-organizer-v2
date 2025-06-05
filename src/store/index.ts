import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme-slice";
import { createWrapper } from "next-redux-wrapper";
import sidebarSlice from "./slices/sidebar-slice";
import listSlice from "./slices/list-slice";
import bookmarkSlice from "./slices/bookmark-slice";
import backgroundSlice from "./slices/background-slice";
import notificationSlice from "./slices/notification-slice";
import layoutSlice from "./slices/layout-slice";
import selectedMediaSlice from "./slices/selected-media-slice";

const store = configureStore({
   reducer: {
      theme: themeSlice.reducer,
      sidebar: sidebarSlice.reducer,
      lists: listSlice.reducer,
      bookmark: bookmarkSlice.reducer,
      background: backgroundSlice.reducer,
      notification: notificationSlice.reducer,
      layout: layoutSlice.reducer,
      selectedMedia: selectedMediaSlice.reducer,
   },
});
const makeStore = () => store;

const wrapper = createWrapper(makeStore);
export default wrapper;
