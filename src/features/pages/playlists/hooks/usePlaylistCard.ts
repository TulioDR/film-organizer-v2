import useNotification from "@/features/layout/notification/hooks/useNotification";
import { useReducer, useRef } from "react";
import listNameValidation from "../utils/listNameValidation";
import { playlistReducer } from "../utils/playlistReducer";
import { PlaylistState } from "../models/playlistModels";
import { updatePlaylist } from "@/api/playlists";
import Playlist from "@/common/models/Playlist";

export default function usePlaylistCard(playlist: Playlist) {
   const { showErrorNotification, showSuccessNotification } = useNotification();
   const initialState: PlaylistState = {
      value: playlist.name,
      isOnFocus: false,
      showError: null,
      showEditButtons: false,
   };
   const [state, dispatch] = useReducer(playlistReducer, initialState);

   const inputRef = useRef<HTMLInputElement>(null);

   const submitUpdate = async () => {
      const nameError = listNameValidation(state.value);
      if (nameError) {
         dispatch({ type: "SET_ERROR", payload: nameError });
         return;
      }
      if (state.value === playlist.name) return;
      const { error } = await updatePlaylist(playlist.id, {
         name: state.value,
      });
      if (error) {
         showErrorNotification(error);
      } else {
         showSuccessNotification("List updated Successfully");
         // refreshLists();
         closeEdit();
      }
   };

   const onFocus = () => dispatch({ type: "SET_FOCUS", payload: true });

   const openEdit = () => {
      dispatch({ type: "OPEN_EDIT" });
      inputRef.current?.focus();
   };

   const closeEdit = () => {
      dispatch({ type: "CLOSE_EDIT", initialName: playlist.name });
      inputRef.current?.blur();
   };

   const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeEdit();
      if (e.key === "Enter") submitUpdate();
   };

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "SET_VALUE", payload: e.currentTarget.value });
   };

   const setShowError = (val: string | null) => {
      dispatch({ type: "SET_ERROR", payload: val });
   };

   return {
      inputRef,
      state,
      onChange,
      onFocus,
      handleKeyDown,
      openEdit,
      closeEdit,
      submitUpdate,
      setShowError,
   };
}
