export interface PlaylistState {
   value: string;
   isOnFocus: boolean;
   showError: string | null;
   showEditButtons: boolean;
}

export type PlaylistAction =
   | { type: "SET_VALUE"; payload: string }
   | { type: "SET_FOCUS"; payload: boolean }
   | { type: "SET_ERROR"; payload: string | null }
   | { type: "OPEN_EDIT" }
   | { type: "CLOSE_EDIT"; initialName: string };
