import { PlaylistAction, PlaylistState } from "../models/playlistModels";

export function playlistReducer(
   state: PlaylistState,
   action: PlaylistAction,
): PlaylistState {
   switch (action.type) {
      case "SET_VALUE":
         return { ...state, value: action.payload };
      case "SET_FOCUS":
         return { ...state, isOnFocus: action.payload };
      case "SET_ERROR":
         return { ...state, showError: action.payload };
      case "OPEN_EDIT":
         return { ...state, showEditButtons: true };
      case "CLOSE_EDIT":
         return {
            value: action.initialName,
            isOnFocus: false,
            showError: null,
            showEditButtons: false,
         };
      default:
         return state;
   }
}
