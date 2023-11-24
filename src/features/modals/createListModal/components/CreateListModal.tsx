import { useState } from "react";

import { Formik, Form } from "formik";

import listNameValidation from "../../../../utils/listNameValidation";
import { createList } from "../../../../api/lists";
import useListsRefresh from "@/hooks/useListsRefresh";

import useNotification from "@/features/notification/hooks/useNotification";
import { useUser } from "@clerk/nextjs";
import { v4 as uuid } from "uuid";
import InputUnderline from "./InputUnderline";
import CreateListInput from "./CreateListInput";
import ModalContainer from "@/components/Modals/ModalContainer";
import ModalTitle from "@/components/Modals/ModalTitle";
import ModalButtonsContainer from "@/components/Modals/ModalButtonsContainer";
import ModalButton from "@/components/Modals/ModalButton";

type Props = {
   close: () => void;
};

export default function CreateListModal({ close }: Props) {
   const { refreshLists } = useListsRefresh();

   const [isFocused, setIsFocused] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { user } = useUser();

   const { showSuccessNotification, showErrorNotification } = useNotification();

   const handleSubmit = async (values: any) => {
      setIsLoading(true);
      const newListData = {
         id: uuid(),
         name: values.name,
         authorId: user?.id,
      };
      const createdList = await createList(newListData);
      console.log(createdList);
      if (createdList.error) {
         showErrorNotification(createdList.error);
         setIsLoading(false);
      } else {
         showSuccessNotification("List created Successfully");
         refreshLists();
         close();
      }
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
                     <ModalButton submit blue isLoading={isLoading}>
                        Create
                     </ModalButton>
                  </ModalButtonsContainer>
               </Form>
            )}
         </Formik>
      </ModalContainer>
   );
}
