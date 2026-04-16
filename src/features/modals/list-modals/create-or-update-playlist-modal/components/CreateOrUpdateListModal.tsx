import { useState } from "react";

import { Formik, Form } from "formik";

import useNotification from "@/features/layout/notification/hooks/useNotification";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
// import useListsRefresh from "@/common/hooks/useListsRefresh";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import ModalInput from "@/features/modals/modal-parts/components/ModalInput";
import MainButton from "@/common/components/MainButton";
import {
   createPlaylist,
   getUserPlaylists,
   updatePlaylist,
} from "@/api/playlists";
import useListsRefresh from "@/common/hooks/useListsRefresh";
import { PlaylistWithItems } from "@/common/models/Playlist";

type Props = {
   close: () => void;
   isOpen: boolean;
   playlist?: PlaylistWithItems;
   setFilteredPlaylists: React.Dispatch<
      React.SetStateAction<PlaylistWithItems[]>
   >;
};

export default function CreateOrUpdateListModal({
   close,
   isOpen,
   playlist,
   setFilteredPlaylists,
}: Props) {
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
         const newPlaylists = await getUserPlaylists(true);
         console.log(newPlaylists);
         setFilteredPlaylists(newPlaylists);
         error = updatedList.error;
      } else {
         const createdList = await createPlaylist(newListData);
         const newPlaylists = await getUserPlaylists(true);
         console.log(newPlaylists);
         setFilteredPlaylists(newPlaylists);
         error = createdList.error;
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
      // console.log(error);
      return error;
   };
   return (
      <ModalPortal isOpen={isOpen}>
         <ModalContainer closeModal={close}>
            <Formik
               initialValues={initialValues}
               validate={nameValidation}
               onSubmit={handleSubmit}
            >
               <Form className="w-72 flex flex-col gap-4">
                  <ModalTitle>{`${playlist ? "Update" : "Create"} List`}</ModalTitle>
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
               </Form>
            </Formik>
         </ModalContainer>
      </ModalPortal>
   );
}
