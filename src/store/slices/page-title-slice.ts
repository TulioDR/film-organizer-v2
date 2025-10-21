import { createSlice } from "@reduxjs/toolkit";

type TitleSection = {
   text: string;
   link: string;
};

interface InitialState {
   title: [TitleSection | null, TitleSection | null, TitleSection | null];
}

const initialState: InitialState = {
   title: [null, null, null],
};

const pageTitleSlice = createSlice({
   name: "pageTitle",
   initialState,
   reducers: {
      setTitle(state, action) {
         state.title = action.payload;
      },
      removeTitle(state) {
         state.title = [null, null, null];
      },
   },
});

export default pageTitleSlice;
export const pageTitleActions = pageTitleSlice.actions;
