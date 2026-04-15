import Playlist from "@/common/models/Playlist";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
   playlists: Playlist[] | null;
}
const initialState: InitialState = {
   playlists: null,
};

const playlistsSlice = createSlice({
   name: "lists",
   initialState,
   reducers: {
      setPlaylists(state, { payload }: { payload: Playlist[] }) {
         state.playlists = payload;
      },
   },
});

export default playlistsSlice;
export const playlistsActions = playlistsSlice.actions;
