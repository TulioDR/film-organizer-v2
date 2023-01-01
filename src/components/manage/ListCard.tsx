import { useRef, useState } from "react";
import { updateList } from "../../actions/lists";
import useListsContext from "../../context/ListsContext";
import { onlyLettersNumbersSpaces } from "../../utils/listNameValidation";
import BottomBorder from "./BottomBorder";

import EditButton from "./EditButton";
import EditButtonsContainer from "./EditButtonsContainer";

type Props = {
   list: any;
   openDeleteModal: (list: any) => void;
};

export default function ListCard({ list, openDeleteModal }: Props) {
   const inputRef = useRef<HTMLInputElement>(null);
   const [value, setValue] = useState<string>(list.name);
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
   const [showEditButtons, setShowEditButtons] = useState<boolean>(false);
   const { refresh } = useListsContext();

   const [showError, setShowError] = useState<string | null>(null);

   const nameValidation = (value: string): boolean => {
      if (!value) {
         setShowError("Name required");
         setTimeout(() => {
            setShowError(null);
         }, 5000);
         return false;
      } else if (!onlyLettersNumbersSpaces(value)) {
         setShowError(
            "Invalid name, it should only contain letters, numbers and spaces"
         );
         setTimeout(() => {
            setShowError(null);
         }, 5000);
         return false;
      }
      return true;
   };

   const openEdit = () => {
      setShowEditButtons(true);
      inputRef.current?.focus();
   };
   const saveEdit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const isValid = nameValidation(value);
      if (!isValid) return;
      if (value !== list.name) {
         const updatedList = await updateList(list.id, { name: value });
         console.log(updatedList);
         refresh();
         setShowEditButtons(false);
         setIsOnFocus(false);
         setShowError(null);
         inputRef.current?.blur();
      }
   };
   const closeEdit = () => {
      setValue(list.name);
      setShowEditButtons(false);
      setIsOnFocus(false);
      setShowError(null);
      inputRef.current?.blur();
   };
   const handleFocus = (e: React.FormEvent<HTMLInputElement>) => {
      setIsOnFocus(true);
      e.currentTarget.setSelectionRange(
         e.currentTarget.value.length,
         e.currentTarget.value.length
      );
   };

   const handleKeyDown = (e: any) => {
      if (e.key === "Escape") closeEdit();
   };

   return (
      <li className="relative px-5 shadow-lg bg-gray-light dark:bg-gray-dark rounded-lg list-none">
         <form onSubmit={saveEdit} className="flex w-full h-full space-x-5">
            <div className="flex-1 py-3 relative overflow-hidden flex">
               <input
                  ref={inputRef}
                  type="text"
                  onFocus={handleFocus}
                  maxLength={20}
                  value={value}
                  autoComplete="off"
                  onKeyDown={handleKeyDown}
                  onChange={(e) => setValue(e.currentTarget.value)}
                  className={`h-9 w-full outline-none bg-transparent text-light-text-hard dark:text-dark-text-hard ${
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
                  <EditButton onClick={closeEdit} icon="close" red />
               </EditButtonsContainer>
            </div>
         </form>
         {showError && isOnFocus && (
            <div className="absolute left-0 top-full bg-red-500 text-white w-full h-8  rounded-lg px-5 flex items-center justify-between">
               <span className="text-xs 2xl:text-sm">{showError}</span>
               <button
                  onClick={() => setShowError(null)}
                  className="h-full grid place-content-center w-12"
               >
                  <span className="material-icons">close</span>
               </button>
            </div>
         )}
      </li>
   );
}
