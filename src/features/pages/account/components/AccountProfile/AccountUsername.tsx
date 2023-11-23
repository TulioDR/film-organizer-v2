import { useUser } from "@clerk/nextjs";
import { useState, useRef } from "react";
import EditButton from "./EditButton";
import useNotification from "@/features/notification/hooks/useNotification";

type Props = {};

export default function AccountUsername({}: Props) {
   const { user } = useUser();
   const { showSuccessNotification, showErrorNotification } = useNotification();

   const inputRef = useRef<HTMLInputElement>(null);
   const [isEditOpen, setIsEditOpen] = useState<boolean>(false);

   const openEdit = () => {
      setIsEditOpen(true);
   };
   const closeEdit = () => {
      setIsEditOpen(false);
   };

   const updateUsername = async () => {
      const { value } = inputRef.current!;
      if (value == user!.username) {
         setIsEditOpen(false);
         return;
      }
      try {
         await user!.update({
            username: value,
         });
         showSuccessNotification("Username updated successfully");
      } catch (error) {
         showErrorNotification(error);
      }
      setIsEditOpen(false);
   };

   if (!user) return <></>;
   return (
      <div className="w-full flex justify-between items-center text-xs sm:text-sm md:text-base">
         {isEditOpen ? (
            <input
               ref={inputRef}
               placeholder="Type your new username here"
               className="bg-transparent w-60 h-10 outline-none text-light-1 dark:text-dark-1 placeholder:text-light-2 dark:placeholder:text-dark-2 border-b border-light-1 dark:border-dark-1"
               defaultValue={user.username || ""}
            />
         ) : (
            <span>{user.username || "You do not have an username yet"}</span>
         )}
         {isEditOpen ? (
            <div className="flex gap-3">
               <EditButton onClick={updateUsername} icon="done" />
               <EditButton onClick={closeEdit} icon="close" red />
            </div>
         ) : (
            <EditButton onClick={openEdit} icon="edit" />
         )}
      </div>
   );
}
