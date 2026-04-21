import { useState } from "react";

import useNotification from "@/features/layout/notification/hooks/useNotification";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalInput from "@/features/modals/modal-parts/components/ModalInput";
import MainButton from "@/common/components/MainButton";
import { createPlaylist, updatePlaylist } from "@/api/playlists";
import useListsRefresh from "@/common/hooks/useListsRefresh";
import { PlaylistWithItems } from "@/common/models/Playlist";

type Props = {
   close: () => void;
   playlist?: PlaylistWithItems;
};

export default function CreateOrUpdateListModal({ close, playlist }: Props) {
   const { refreshLists } = useListsRefresh();

   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { showSuccessNotification, showErrorNotification } = useNotification();

   const handleSubmit = async (values: any) => {
      setIsLoading(true);
      const newListData = {
         name: values.name,
         description: values.description,
      };
      let error = null;
      if (playlist) {
         const updatedList = await updatePlaylist(playlist.id, newListData);
         error = updatedList.error;
      } else {
         const createdList = await createPlaylist(newListData);
         if (createdList.error) error = createdList.error;
      }
      if (error) {
         showErrorNotification(error);
         setIsLoading(false);
      } else {
         setIsLoading(false);
         showSuccessNotification("List created Successfully");
         refreshLists();
         close();
      }
   };

   const initialValues = {
      name: playlist?.name || "",
      description: playlist?.description || "",
   };

   const nameValidation = (values: any) => {
      const { name } = values;
      let error: any = {};
      if (!name) error.name = "Required";
      return error;
   };
   return (
      <ModalContainer
         closeModal={close}
         title={`${playlist ? "Update" : "Create"} List`}
         initialValues={initialValues}
         validate={nameValidation}
         onSubmit={handleSubmit}
      >
         <ModalInput name="name" placeholder="Name" maxLength={50} />
         <ModalInput
            name="description"
            placeholder="Description (optional)"
            maxLength={500}
         />

         <ModalButtonsContainer>
            <MainButton onClick={close} text="Cancel" />
            <MainButton
               submit
               text={playlist ? "Update" : "Create"}
               isLoading={isLoading}
            />
         </ModalButtonsContainer>
      </ModalContainer>
   );
}
