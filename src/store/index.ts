import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme-slice";
import { createWrapper } from "next-redux-wrapper";

import backgroundSlice from "./slices/background-slice";
import notificationSlice from "./slices/notification-slice";
import loaderSlice from "./slices/loader-slice";
import playlistsSlice from "./slices/playlist-slice";

const store = configureStore({
   reducer: {
      theme: themeSlice.reducer,
      playlists: playlistsSlice.reducer,
      background: backgroundSlice.reducer,
      notification: notificationSlice.reducer,
      loader: loaderSlice.reducer,
   },
});
const makeStore = () => store;

const wrapper = createWrapper(makeStore);
export default wrapper;

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
