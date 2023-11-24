import ModalContainer from "@/components/Modals/ModalContainer";
import { useUser } from "@clerk/nextjs";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import ModalTitle from "@/components/Modals/ModalTitle";
import useNotification from "@/features/notification/hooks/useNotification";
import ModalButtonsContainer from "@/components/Modals/ModalButtonsContainer";
import ModalButton from "@/components/Modals/ModalButton";
import UpdateInput from "../../updatePasswordModal/components/UpdateInput";

type Props = {
   close: () => void;
};

export default function DeletePasswordModal({ close }: Props) {
   const { user } = useUser();
   const { showSuccessNotification, showErrorNotification } = useNotification();

   const [isLoading, setIsLoading] = useState<boolean>(false);

   const initialValues = {
      currentPassword: "",
   };

   const validation = (values: any) => {
      const { currentPassword } = values;
      let error: any = {};
      if (!currentPassword) {
         error.currentPassword = "Current password required";
      }
      return error;
   };

   const handleSubmit = async (values: any) => {
      const { currentPassword } = values;
      setIsLoading(true);
      try {
         await user!.removePassword({ currentPassword });
         showSuccessNotification("Password deleted successfully");
         close();
      } catch (error: any) {
         console.log(error.errors[0]);
         showErrorNotification(error.errors[0]);
      }
      setIsLoading(false);
   };

   return (
      <ModalContainer closeModal={close}>
         <ModalTitle>Delete Password</ModalTitle>
         <Formik
            initialValues={initialValues}
            validate={validation}
            onSubmit={handleSubmit}
         >
            <Form className="w-full sm:w-96">
               <UpdateInput
                  name="currentPassword"
                  placeholder="Current password"
               />
               <ModalButtonsContainer>
                  <ModalButton onClick={close}>Cancel</ModalButton>
                  <ModalButton red submit isLoading={isLoading}>
                     Delete
                  </ModalButton>
               </ModalButtonsContainer>
            </Form>
         </Formik>
      </ModalContainer>
   );
}
