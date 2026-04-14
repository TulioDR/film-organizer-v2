import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import PlaylistCardInput from "./PlaylistCardInput";

import OpenCardLink from "./OpenCardLink";
import { AnimatePresence } from "framer-motion";
import InputFocusUnderline from "./InputFocusUnderline";
import PlaylistInputError from "./PlaylistInputError";
import PlaylistCardPoster from "./PlaylistCardPoster";
import usePlaylistCard from "../../hooks/usePlaylistCard";
import MainButton from "@/common/components/MainButton";
import Playlist from "@/common/models/Playlist";
import DeletePlaylistHandler from "./DeletePlaylistHandler";
// import DeletePlaylistHandler from "./DeletePlaylistHandler";

type Props = {
   playlist: Playlist;
};

export default function PlaylistCard({ playlist }: Props) {
   const {
      inputRef,
      state,
      onChange,
      onFocus,
      handleKeyDown,
      openEdit,
      closeEdit,
      submitUpdate,
      setShowError,
   } = usePlaylistCard(playlist);

   const { value, isOnFocus, showError, showEditButtons } = state;

   return (
      <div
         style={{ borderRadius: STANDARD_RADIUS }}
         className="h-56 flex gap-8 group border border-border-light dark:border-border-dark bg-white dark:bg-black"
      >
         <PlaylistCardPoster />
         <div className="flex-1 h-full flex flex-col justify-between p-4 pt-8">
            <div
               className={`w-full h-12 relative ${isOnFocus ? "" : "pointer-events-none"}`}
            >
               <PlaylistCardInput
                  inputRef={inputRef}
                  value={value}
                  onChange={onChange}
                  handleKeyDown={handleKeyDown}
                  onFocus={onFocus}
                  onBlur={closeEdit}
               />
               <AnimatePresence>
                  {isOnFocus && <InputFocusUnderline />}
               </AnimatePresence>
               {showError && isOnFocus && (
                  <PlaylistInputError
                     error={showError}
                     setShowError={setShowError}
                  />
               )}
            </div>

            <div className="w-full flex justify-end gap-1 h-12">
               {showEditButtons ? (
                  <>
                     <MainButton
                        text="Update"
                        onClick={submitUpdate}
                        keyboardKey="Enter"
                     />
                     <MainButton
                        text="Cancel"
                        onClick={closeEdit}
                        keyboardKey="Esc"
                     />
                  </>
               ) : (
                  <>
                     <OpenCardLink href={`/playlists/${playlist.id}`} />
                     <MainButton square icon="edit" onClick={openEdit} />
                     <DeletePlaylistHandler playlistToDelete={playlist} />
                  </>
               )}
            </div>
         </div>
      </div>
   );
}
