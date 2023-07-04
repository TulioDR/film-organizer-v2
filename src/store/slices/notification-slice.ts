import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
   name: "notification",
   initialState: {
      notification: null,
      success: false,
   },
   reducers: {
      showNotification(state, action) {
         state.notification = action.payload.message;
         state.success = action.payload.success;
      },
      hideNotification(state) {
         state.notification = null;
      },
   },
});

export default notificationSlice;
export const notificationActions = notificationSlice.actions;
