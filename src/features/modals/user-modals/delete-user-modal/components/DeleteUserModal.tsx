import MainButton from "@/common/components/MainButton";
import useNotification from "@/features/layout/notification/hooks/useNotification";
import ModalAnimationContainer from "@/features/modals/modal-parts/components/ModalAnimationContainer";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import useAppSelector from "@/store/hooks/useAppSelector";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DeleteUserInput from "./DeleteUserInput";

type Props = {
   close: () => void;
};

export default function DeleteUserModal({ close }: Props) {
   const { user } = useUser();
   const router = useRouter();

   const { playlists } = useAppSelector((state) => state.playlists);

   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [isDisabled, setIsDisabled] = useState<boolean>(true);
   const [inputValue, setInputValue] = useState<string>("");

   const onChange = (e: any) => {
      setInputValue(e.target.value);
   };

   useEffect(() => {
      setIsDisabled(inputValue !== "DELETE");
   }, [inputValue]);

   const { showSuccessNotification, showErrorNotification } = useNotification();
   const handleSubmit = async () => {
      setIsLoading(true);
      if (playlists && playlists.length > 0) {
         console.log("you gotta delete your lists");
         // const { error } = await deleteAllLists(user!.id);
         // if (error) {
         //    showErrorNotification(error);
         //    setIsLoading(false);
         //    return;
         // }
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
      <ModalAnimationContainer closeModal={close}>
         <ModalTitle>Delete Account</ModalTitle>
         <div className="w-full flex flex-col gap-4">
            <div className="text-xs sm:text-sm md:text-base">
               <div>Are you sure you want to delete your account?.</div>
               <div>This action cannot be undone.</div>
               <div>
                  Type the word <strong>DELETE</strong>. (All caps), to confirm
                  you want to delete your account
               </div>
            </div>
            <DeleteUserInput value={inputValue} onChange={onChange} />
            <ModalButtonsContainer>
               <MainButton onClick={close} text="Cancel" />
               <MainButton
                  onClick={handleSubmit}
                  text="Delete"
                  type="delete"
                  isDisabled={isDisabled}
                  isLoading={isLoading}
               />
            </ModalButtonsContainer>
         </div>
      </ModalAnimationContainer>
   );
}
