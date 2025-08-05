import { deleteAllLists } from "@/api/lists";
import Store from "@/common/models/Store";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import ModalButton from "@/features/modals/modal-parts/components/ModalButton";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";

import { useUser } from "@clerk/nextjs";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

type Props = {
   close: () => void;
};

export default function DeleteUserModal({ close }: Props) {
   const { user } = useUser();
   const router = useRouter();

   const { lists } = useSelector((state: Store) => state.lists);

   const [isLoading, setIsLoading] = useState<boolean>(false);
   const { showSuccessNotification, showErrorNotification } = useNotification();
   const handleSubmit = async () => {
      setIsLoading(true);
      if (lists && lists.length > 0) {
         const { error } = await deleteAllLists(user!.id);
         if (error) {
            showErrorNotification(error);
            setIsLoading(false);
            return;
         }
      }
      try {
         await user?.delete();
         showSuccessNotification("Account deleted successfully");
         close();
         router.push("/");
      } catch (error: any) {
         showErrorNotification(error.errors[0].message);
      }
      setIsLoading(false);
   };
   return (
      <ModalContainer closeModal={close}>
         <ModalTitle>Delete Account</ModalTitle>
         <Formik initialValues={{}} onSubmit={handleSubmit}>
            <Form className="w-full sm:w-96">
               <div className="text-xs sm:text-sm md:text-base">
                  <div>Are you sure you want to delete your account?.</div>
                  <div>This action cannot be undone.</div>
               </div>
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
