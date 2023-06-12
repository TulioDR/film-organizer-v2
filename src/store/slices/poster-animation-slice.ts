import { windowExtraLarge } from "@/data/constants/windowWidth";
import { createSlice } from "@reduxjs/toolkit";

const posterAnimationSlice = createSlice({
   name: "posterAnimation",
   initialState: {
      animatePoster: true,
   },
   reducers: {
      changePosterAnimation(state, action) {
         if (window.innerWidth < windowExtraLarge) {
            state.animatePoster = true;
         } else {
            state.animatePoster = action.payload;
         }
      },
   },
});

export default posterAnimationSlice;
export const posterAnimationActions = posterAnimationSlice.actions;
