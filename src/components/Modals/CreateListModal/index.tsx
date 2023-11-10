import { useState } from "react";

import { Formik, Form } from "formik";

import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalButton from "../ModalButton";
import listNameValidation from "../../../utils/listNameValidation";
import { createList } from "../../../api/lists";
import useListsRefresh from "@/hooks/useListsRefresh";
import LoadingButton from "../LoadingButton";
import useNotification from "@/features/notification/hooks/useNotification";
import { useUser } from "@clerk/nextjs";
import { v4 as uuid } from "uuid";
import InputUnderline from "./InputUnderline";
import CreateListInput from "./CreateListInput";
type Props = {
   close: () => void;
};

export default function CreateListModal({ close }: Props) {
   const { refreshLists } = useListsRefresh();

   const [isFocused, setIsFocused] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { user } = useUser();

   const { setAndCloseNotification, getErrorMessage } = useNotification();

   const handleSubmit = async (values: any) => {
      setIsLoading(true);
      const newListData = {
         id: uuid(),
         name: values.name,
         authorId: user?.id,
      };
      const createdList = await createList(newListData);
      console.log(createdList);
      let message = "";
      let success = false;
      if (createdList.error) {
         setIsLoading(false);
         message = getErrorMessage(createdList.error.code);
      } else {
         message = "List created Successfully";
         success = true;
         refreshLists();
         close();
      }
      setAndCloseNotification(message, success);
   };

   return (
      <ModalContainer closeModal={close}>
         <Formik
            initialValues={{ name: "" }}
            validate={listNameValidation}
            onSubmit={handleSubmit}
         >
            {({ errors, touched }) => (
               <Form className="w-72">
                  <ModalTitle>Create a List</ModalTitle>
                  <div className="relative overflow-hidden">
                     <CreateListInput setIsFocused={setIsFocused} />
                     <InputUnderline isFocused={isFocused} />
                  </div>
                  {touched.name && errors.name && (
                     <div className="w-full text-red-400">{errors.name}</div>
                  )}
                  <ModalButtonsContainer>
                     <ModalButton onClick={close}>Cancel</ModalButton>
                     <ModalButton submit blue disabled={isLoading}>
                        <LoadingButton isLoading={isLoading}>
                           Create
                        </LoadingButton>
                     </ModalButton>
                  </ModalButtonsContainer>
               </Form>
            )}
         </Formik>
      </ModalContainer>
   );
}
