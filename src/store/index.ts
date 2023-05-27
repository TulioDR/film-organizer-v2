import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/theme-slice";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
   reducer: { theme: themeSlice.reducer },
});
const makeStore = () => store;

const wrapper = createWrapper(makeStore);
export default wrapper;
