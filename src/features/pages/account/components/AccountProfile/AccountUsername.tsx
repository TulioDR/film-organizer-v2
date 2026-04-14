import { useUser } from "@clerk/nextjs";
import { useState, useRef } from "react";
import PlaylistCardButton from "@/features/pages/playlists/components/PlaylistCard/PlaylistCardButton";
// import useNotification from "@/features/notification/hooks/useNotification";
import { motion } from "framer-motion";

type Props = {};

export default function AccountUsername({}: Props) {
   const { user } = useUser();
   // const { showSuccessNotification, showErrorNotification } = useNotification();

   const inputRef = useRef<HTMLInputElement>(null);
   const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

   const openEdit = () => setIsEditOpen(true);
   const closeEdit = () => setIsEditOpen(false);
   const updateUsername = async () => {
      // const { value } = inputRef.current!;
      // if (value == user!.username) {
      //    setIsEditOpen(false);
      //    return;
      // }
      // try {
      //    await user!.update({
      //       username: value,
      //    });
      //    showSuccessNotification("Username updated successfully");
      // } catch (error) {
      //    showErrorNotification(error);
      // }
      // setIsEditOpen(false);
   };

   if (!user) return <></>;
   return (
      <>
         <div className="relative h-10 w-full xl:w-60">
            {isEditOpen ? (
               <>
                  <input
                     ref={inputRef}
                     placeholder="Type your new username here"
                     className="bg-transparent w-full h-full outline-none text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50"
                     defaultValue={user.username || ""}
                  />
                  <motion.div
                     initial={{ width: 0 }}
                     animate={{ width: "100%" }}
                     transition={{ duration: 0.2 }}
                     className="absolute bottom-0 left-0 h-0.5 bg-accent"
                  />
               </>
            ) : (
               <div className="h-10 flex items-center">
                  <span>
                     {user.username || "You do not have an username yet"}
                  </span>
               </div>
            )}
         </div>
         <div className="h-12 w-full flex justify-end gap-1">
            {isEditOpen ? (
               <>
                  <PlaylistCardButton
                     text="Update"
                     keyboardKey="Enter"
                     onClick={updateUsername}
                  />
                  <PlaylistCardButton
                     text="Cancel"
                     keyboardKey="Esc"
                     onClick={closeEdit}
                  />
               </>
            ) : (
               <>
                  <PlaylistCardButton
                     text={user.username ? "Edit username" : "Add username"}
                     onClick={openEdit}
                  />
               </>
            )}
         </div>
      </>
   );
}
