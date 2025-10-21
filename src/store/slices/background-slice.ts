import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
   backgroundImage: string | null;
   backgroundKey: string;
}
const initialState: InitialState = {
   backgroundImage: null,
   backgroundKey: "",
};
interface SetBackgroundPayload {
   backgroundImage: string;
   backgroundKey: string;
}

const backgroundSlice = createSlice({
   name: "background",
   initialState,
   reducers: {
      setBackground(state, { payload }: { payload: SetBackgroundPayload }) {
         const { backgroundImage, backgroundKey } = payload;
         state.backgroundImage = backgroundImage;
         state.backgroundKey = backgroundKey + backgroundImage;
      },
      removeBackground(state) {
         state.backgroundImage = null;
         state.backgroundKey = "";
      },
   },
});

export default backgroundSlice;
export const backgroundActions = backgroundSlice.actions;
