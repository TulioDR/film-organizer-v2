import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
   name: "sidebar",
   initialState: {
      expandSidebar: true,
      revealSidebar: false,
   },
   reducers: {
      toggleReveal(state) {
         state.revealSidebar = !state.revealSidebar;
      },
      closeReveal(state) {
         state.revealSidebar = false;
      },
      toggleExpanded(state) {
         state.expandSidebar = !state.expandSidebar;
      },
   },
});

export default sidebarSlice;
export const sidebarActions = sidebarSlice.actions;
