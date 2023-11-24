import ModalContainer from "@/components/Modals/ModalContainer";
import { useUser } from "@clerk/nextjs";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import UpdateInput from "./UpdateInput";
import ModalTitle from "@/components/Modals/ModalTitle";
import useNotification from "@/features/notification/hooks/useNotification";
import ModalButtonsContainer from "@/components/Modals/ModalButtonsContainer";
import ModalButton from "@/components/Modals/ModalButton";

type Props = {
   close: () => void;
};

export default function UpdatePasswordModal({ close }: Props) {
   const { user } = useUser();
   console.log(user);
   const { showSuccessNotification, showErrorNotification } = useNotification();

   const initialValues = {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
   };

   const [isLoading, setIsLoading] = useState<boolean>(false);

   const validation = (values: any) => {
      const { currentPassword, newPassword, confirmNewPassword } = values;
      let error: any = {};
      if (user!.passwordEnabled && !currentPassword) {
         error.currentPassword = "Current password required";
      }
      if (!newPassword) {
         error.newPassword = "New password required";
      }
      if (!confirmNewPassword) {
         error.confirmNewPassword = "This field cannot be empty";
      } else if (confirmNewPassword !== newPassword) {
         error.confirmNewPassword = "Passwords do not match";
      }
      return error;
   };

   const handleSubmit = async (values: any) => {
      setIsLoading(true);
      const { currentPassword, newPassword } = values;
      try {
         await user!.updatePassword({
            newPassword: newPassword,
            currentPassword: user!.passwordEnabled
               ? currentPassword
               : undefined,
         });
         showSuccessNotification("Password updated successfully");
         close();
      } catch (error: any) {
         console.log(error.errors[0]);
         showErrorNotification(error.errors[0]);
      }
      setIsLoading(false);
   };

   return (
      <ModalContainer closeModal={close}>
         <ModalTitle>Update Password</ModalTitle>
         <Formik
            initialValues={initialValues}
            validate={validation}
            onSubmit={handleSubmit}
         >
            <Form className="w-full sm:w-96">
               <div className="space-y-5">
                  {user!.passwordEnabled && (
                     <UpdateInput
                        name="currentPassword"
                        placeholder="Current password"
                     />
                  )}
                  <UpdateInput name="newPassword" placeholder="New password" />
                  <UpdateInput
                     name="confirmNewPassword"
                     placeholder="Confirm new password"
                  />
               </div>
               <ModalButtonsContainer>
                  <ModalButton onClick={close}>Cancel</ModalButton>
                  <ModalButton blue submit isLoading={isLoading}>
                     Update
                  </ModalButton>
               </ModalButtonsContainer>
            </Form>
         </Formik>
      </ModalContainer>
   );
}
