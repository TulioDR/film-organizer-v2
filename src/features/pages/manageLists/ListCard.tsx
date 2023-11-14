import { useRef, useState } from "react";
import { updateList } from "@/api/lists";

import { onlyLettersNumbersSpaces } from "@/utils/listNameValidation";
import BottomBorder from "./BottomBorder";

import EditButton from "./EditButton";
import EditButtonsContainer from "./EditButtonsContainer";
import ErrorMessageForName from "./ErrorMessageForName";
import { motion } from "framer-motion";
import { staggerItem } from "@/animations/StaggerCards";
import useListsRefresh from "@/hooks/useListsRefresh";
import useNotification from "@/features/notification/hooks/useNotification";

type Props = {
   list: any;
   openDeleteModal: (list: any) => void;
};

export default function ListCard({ list, openDeleteModal }: Props) {
   const inputRef = useRef<HTMLInputElement>(null);
   const [value, setValue] = useState<string>(list.name);
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
   const [showEditButtons, setShowEditButtons] = useState<boolean>(false);
   const [showError, setShowError] = useState<string | null>(null);

   const { showErrorNotification, showSuccessNotification } = useNotification();

   const nameValidation = (value: string): null | string => {
      let error = null;
      if (!value) {
         error = "Name required";
      } else if (!onlyLettersNumbersSpaces(value)) {
         error = "Name should only contain letters, numbers and spaces";
      }
      setShowError(error);
      if (error) setTimeout(() => setShowError(null), 5000);
      return error;
   };

   const openEdit = () => {
      setShowEditButtons(true);
      inputRef.current?.focus();
   };
   const cancelEdit = () => {
      setValue(list.name);
      closeEdit();
   };
   const closeEdit = () => {
      setShowEditButtons(false);
      setIsOnFocus(false);
      setShowError(null);
      inputRef.current?.blur();
   };

   const handleFocus = () => {
      setIsOnFocus(true);
   };
   const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape") cancelEdit();
   };

   const { refreshLists } = useListsRefresh();
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const isInvalid = nameValidation(value);
      if (isInvalid) return;
      if (value === list.name) return;
      const { error } = await updateList(list.id, { name: value });
      if (error) {
         showErrorNotification(error);
      } else {
         showSuccessNotification("List updated Successfully");
         refreshLists();
         closeEdit();
      }
   };

   return (
      <motion.li
         variants={staggerItem}
         className="relative px-5 shadow-xl bg-secondary-light dark:bg-secondary-dark rounded-lg list-none"
      >
         <form onSubmit={handleSubmit} className="flex w-full h-full space-x-5">
            <div className="flex-1 py-3 relative overflow-hidden flex">
               <input
                  ref={inputRef}
                  type="text"
                  onFocus={handleFocus}
                  maxLength={12}
                  value={value}
                  autoComplete="off"
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setValue(e.currentTarget.value)}
                  className={`h-9 w-full outline-none bg-transparent text-light-1 dark:text-dark-1 ${
                     isOnFocus ? "" : "pointer-events-none"
                  }`}
               />
               <BottomBorder isOnFocus={isOnFocus} />
            </div>
            <div className="h-full relative overflow-hidden">
               <EditButton onClick={openEdit} icon="edit" />
               <EditButton
                  onClick={() => openDeleteModal(list)}
                  icon="delete"
                  red
               />
               <EditButtonsContainer showEditButtons={showEditButtons}>
                  <EditButton submit icon="done" />
                  <EditButton onClick={cancelEdit} icon="close" red />
               </EditButtonsContainer>
            </div>
         </form>
         {showError && isOnFocus && (
            <ErrorMessageForName
               error={showError}
               setShowError={setShowError}
            />
         )}
      </motion.li>
   );
}
