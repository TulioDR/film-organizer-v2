import ListToSave from "./ListToSave";
import NoListsText from "./NoListsText";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import ModalButton from "@/features/modals/modal-parts/components/ModalButton";
import useAppSelector from "@/store/hooks/useAppSelector";

type Props = {
   isOpen: boolean;
   mediaToSave: { media: any; mediaType: "movie" | "tv" };
   closeModal: () => void;
};

export default function SaveMediaModal({
   isOpen,
   mediaToSave,
   closeModal,
}: Props) {
   const { lists } = useAppSelector((state) => state.lists);

   if (!mediaToSave) return <></>;
   if (!lists) return <></>;
   return (
      <ModalPortal isOpen={isOpen}>
         <ModalContainer closeModal={closeModal}>
            <ModalTitle>Save to...</ModalTitle>
            <div className="w-56 border-y border-light-2 dark:border-dark-2">
               {lists.length === 0 && <NoListsText />}
               {lists.length > 0 &&
                  lists.map((list) => (
                     <ListToSave
                        key={list.id}
                        list={list}
                        media={mediaToSave.media}
                        mediaType={mediaToSave.mediaType}
                     />
                  ))}
            </div>

            <ModalButtonsContainer>
               <ModalButton onClick={closeModal}>Close</ModalButton>
            </ModalButtonsContainer>
         </ModalContainer>
      </ModalPortal>
   );
}
