import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import MainButton from "@/common/components/MainButton";
import ModalInput from "@/features/modals/modal-parts/components/ModalInput";

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
      <ModalContainer
         closeModal={close}
         title="Update Password"
         initialValues={initialValues}
         validate={validation}
         onSubmit={handleSubmit}
      >
         {user!.passwordEnabled && (
            <ModalInput name="currentPassword" placeholder="Current password" />
         )}
         <ModalInput name="newPassword" placeholder="New password" />
         <ModalInput
            name="confirmNewPassword"
            placeholder="Confirm new password"
         />
         <ModalButtonsContainer>
            <MainButton onClick={close} text="Cancel" />
            <MainButton
               onClick={close}
               text="Update"
               submit
               isLoading={isLoading}
            />
         </ModalButtonsContainer>
      </ModalContainer>
   );
}
