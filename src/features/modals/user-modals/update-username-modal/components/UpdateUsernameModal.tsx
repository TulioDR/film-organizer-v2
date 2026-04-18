import MainButton from "@/common/components/MainButton";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalInput from "@/features/modals/modal-parts/components/ModalInput";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";

type Props = {
   close: () => void;
};

export default function UpdateUsernameModal({ close }: Props) {
   const { user } = useUser();
   const { showSuccessNotification, showErrorNotification } = useNotification();
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const initialValues = {
      newUsername: user?.username,
   };

   const validation = (values: any) => {
      const { newUsername } = values;
      let error: any = {};
      if (!newUsername) {
         error.newUsername = "Please type an username";
      }
      if (newUsername === !user?.username) {
         error.newUsername = "There is no change in the username";
      }
      return error;
   };

   const handleSubmit = async (values: any) => {
      setIsLoading(true);
      const { newUsername } = values;
      try {
         await user!.update({
            username: newUsername,
         });
         showSuccessNotification("Username updated successfully");
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
         title="Update Username"
         initialValues={initialValues}
         validate={validation}
         onSubmit={handleSubmit}
      >
         {user?.passwordEnabled && (
            <ModalInput name="currentPassword" placeholder="Current password" />
         )}
         <ModalInput name="newUsername" placeholder="New username" />
         <ModalButtonsContainer>
            <MainButton onClick={close} text="Cancel" />
            <MainButton text="Update" submit isLoading={isLoading} />
         </ModalButtonsContainer>
      </ModalContainer>
   );
}
