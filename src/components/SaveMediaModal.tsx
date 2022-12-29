import { createMedia } from "../actions/media";
import useListsContext from "../context/ListsContext";

import ModalButton from "./modals/ModalButton";
import ModalButtonsContainer from "./modals/ModalButtonsContainer";
import ModalContainer from "./modals/ModalContainer";
import ModalTItle from "./modals/ModalTItle";

export default function SaveMediaModal() {
   const {
      isSaveMediaOpen,
      closeSaveMediaModal,
      lists,
      currentMedia,
      currentType,
   } = useListsContext();
   return (
      <ModalContainer isOpen={isSaveMediaOpen} close={closeSaveMediaModal}>
         <ModalTItle>Save to...</ModalTItle>
         <ul className="w-56">
            {lists.map((list) => (
               <ListToSave
                  key={list.id}
                  list={list}
                  media={currentMedia}
                  mediaType={currentType}
               />
            ))}
         </ul>
         <ModalButtonsContainer>
            <ModalButton onClick={closeSaveMediaModal}>Close</ModalButton>
         </ModalButtonsContainer>
      </ModalContainer>
   );
}

interface ListProps {
   list: any;
   media: any;
   mediaType: "movie" | "tv";
}

function ListToSave({ list, media, mediaType }: ListProps) {
   const saveToList = () => {
      createMedia({
         name: media.title || media.name,
         poster_path: media.poster_path,
         type: mediaType,
         listId: list.id,
      });
   };
   return (
      <li
         onClick={saveToList}
         className="h-9 flex items-center cursor-pointer hover:bg-gray-light dark:hover:bg-gray-dark"
      >
         <span className="material-icons mx-2">check_box_outline_blank</span>
         <span className="text-sm">{list.name}</span>
      </li>
   );
}
