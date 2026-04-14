import { useState } from "react";

import { Formik, Form } from "formik";

import useNotification from "@/features/layout/notification/hooks/useNotification";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalButton from "@/features/modals/modal-parts/components/ModalButton";
// import useListsRefresh from "@/common/hooks/useListsRefresh";
import listNameValidation from "@/features/pages/playlists/utils/listNameValidation";
import { onlyLettersNumbersSpaces } from "@/common/utils/onlyLettersNumbersSpaces";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import ModalInput from "@/features/modals/modal-parts/components/ModalInput";
import MainButton from "@/common/components/MainButton";
import { createPlaylist } from "@/api/playlists";

type Props = {
   close: () => void;
   isOpen: boolean;
};

export default function CreateListModal({ close, isOpen }: Props) {
   // const { refreshLists } = useListsRefresh();

   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { showSuccessNotification, showErrorNotification } = useNotification();

   const handleSubmit = async (values: any) => {
      setIsLoading(true);
      const newListData = {
         name: values.name,
      };
      const createdList = await createPlaylist(newListData);
      console.log("this is the created list");
      console.log(createdList);
      if (createdList.error) {
         showErrorNotification(createdList.error);
         setIsLoading(false);
      } else {
         setIsLoading(false);
         showSuccessNotification("List created Successfully");
         // refreshLists();
         close();
      }
   };

   return (
      <ModalPortal isOpen={isOpen}>
         <ModalContainer closeModal={close}>
            <Formik
               initialValues={{ name: "" }}
               // validate={onlyLettersNumbersSpaces}
               onSubmit={handleSubmit}
            >
               {({ errors, touched }) => (
                  <Form className="w-72 flex flex-col gap-4">
                     <ModalTitle>Create a List</ModalTitle>
                     <ModalInput
                        name="name"
                        placeholder="Name"
                        maxLength={50}
                     />
                     <ModalInput
                        name="Description"
                        placeholder="Description (optional)"
                        maxLength={500}
                     />
                     {touched.name && errors.name && (
                        <div className="w-full text-red-400">{errors.name}</div>
                     )}
                     <ModalButtonsContainer>
                        <MainButton onClick={close} text="Cancel" />
                        <MainButton submit text="Create" />
                     </ModalButtonsContainer>
                  </Form>
               )}
            </Formik>
         </ModalContainer>
      </ModalPortal>
   );
}
