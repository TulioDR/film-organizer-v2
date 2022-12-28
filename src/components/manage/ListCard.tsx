import { Field, Form, Formik } from "formik";
import { FormEvent, useRef, useState } from "react";
import { updateList } from "../../actions/lists";
import listNameValidation from "../../utils/listNameValidation";
import BottomBorder from "./BottomBorder";

import EditButton from "./EditButton";
import EditButtonsContainer from "./EditButtonsContainer";

type Props = {
   list: any;
};

export default function ListCard({ list }: Props) {
   const inputRef = useRef<HTMLInputElement>(null);

   const [value, setValue] = useState<string>(list.name);
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);

   const [showEditButtons, setShowEditButtons] = useState<boolean>(false);

   const openEdit = () => {
      setShowEditButtons(true);
      inputRef.current?.focus();
   };
   const deleteList = () => {
      console.log("delete");
   };
   const saveEdit = () => {
      if (value === list.name) {
         console.log("nothing was saved");
      } else {
         console.log("list saved");
         updateList(list.id, { name: value });
      }
   };
   const cancelEdit = () => {
      console.log("cancel edit");
      setValue(list.name);
      setShowEditButtons(false);
      setIsOnFocus(false);
      inputRef.current?.blur();
   };
   const handleFocus = (e: FormEvent<HTMLInputElement>) => {
      setIsOnFocus(true);
      e.currentTarget.setSelectionRange(
         e.currentTarget.value.length,
         e.currentTarget.value.length
      );
   };

   const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") cancelEdit();
   };

   return (
      <Formik
         initialValues={{ name: "" }}
         validate={listNameValidation}
         onSubmit={saveEdit}
      >
         {({ errors }) => (
            <Form className="relative px-5 shadow-lg bg-gray-light dark:bg-gray-dark flex rounded-lg">
               <div className="flex-1 py-3 relative overflow-hidden">
                  <Field
                     name="name"
                     innerRef={inputRef}
                     type="text"
                     onFocus={handleFocus}
                     onBlur={cancelEdit}
                     maxLength={20}
                     value={value}
                     autoComplete="off"
                     onKeyDown={handleKeyDown}
                     onChange={(e: any) => setValue(e.currentTarget.value)}
                     className={`h-9 w-full outline-none bg-transparent text-light-text-hard dark:text-dark-text-hard ${
                        isOnFocus ? "" : "pointer-events-none"
                     }`}
                  />
                  <BottomBorder isOnFocus={isOnFocus} />
               </div>
               <div className="h-full relative overflow-hidden">
                  <EditButton onClick={openEdit} icon="edit" />
                  <EditButton onClick={deleteList} icon="delete" red />
                  <EditButtonsContainer showEditButtons={showEditButtons}>
                     <EditButton onClick={saveEdit} icon="done" />
                     <EditButton onClick={cancelEdit} icon="close" red />
                  </EditButtonsContainer>
               </div>
               {errors.name && (
                  <div className="absolute left-0 top-full bg-red-500 text-white w-full h-5 text-sm">
                     {errors.name}
                  </div>
               )}
            </Form>
         )}
      </Formik>
   );
}
