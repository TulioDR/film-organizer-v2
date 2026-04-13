import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import PlaylistCardButton from "./PlaylistCardButton";
import PlaylistCardInput from "./PlaylistCardInput";

import OpenCardLink from "./OpenCardLink";
import { AnimatePresence } from "framer-motion";
import InputFocusUnderline from "./InputFocusUnderline";
import PlaylistInputError from "./PlaylistInputError";
import PlaylistCardPoster from "./PlaylistCardPoster";
import usePlaylistCard from "../../hooks/usePlaylistCard";

type Props = {};

export default function PlaylistCard({}: Props) {
   const {
      inputRef,
      state,
      onChange,
      onFocus,
      handleKeyDown,
      openEdit,
      closeEdit,
      openDeleteModal,
      submitUpdate,
      setShowError,
   } = usePlaylistCard();

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
                     <PlaylistCardButton type="update" onClick={submitUpdate} />
                     <PlaylistCardButton type="cancel" onClick={closeEdit} />
                  </>
               ) : (
                  <>
                     <OpenCardLink href={`/playlists/${"id"}`} />
                     <PlaylistCardButton type="edit" onClick={openEdit} />
                     <PlaylistCardButton
                        type="delete"
                        onClick={openDeleteModal}
                     />
                  </>
               )}
            </div>
         </div>
      </div>
   );
}
