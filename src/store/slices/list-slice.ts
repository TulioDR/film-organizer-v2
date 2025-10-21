import List from "@/common/models/List";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
   lists: null | List[];
}
const initialState: InitialState = {
   lists: null,
};

const listSlice = createSlice({
   name: "lists",
   initialState,
   reducers: {
      setLists(state, { payload }: { payload: null | List[] }) {
         state.lists = payload;
      },
   },
});

export default listSlice;
export const listActions = listSlice.actions;
