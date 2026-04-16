import ListToSave from "./ListToSave";
import NoListsText from "./NoListsText";
import ModalPortal from "@/features/modals/modal-parts/components/ModalPortal";
import ModalContainer from "@/features/modals/modal-parts/components/ModalContainer";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import useAppSelector from "@/store/hooks/useAppSelector";
import MainButton from "@/common/components/MainButton";

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
   const { playlists } = useAppSelector((state) => state.playlists);

   if (!mediaToSave) return <></>;
   if (!playlists) return <></>;
   return (
      <ModalPortal isOpen={isOpen}>
         <ModalContainer closeModal={closeModal}>
            <div className="w-64 flex flex-col gap-4">
               <ModalTitle>Save to...</ModalTitle>
               <div className="w-full max-h-[24rem] border-y border-border-light dark:border-border-dark overflow-y-auto">
                  {playlists.length === 0 && <NoListsText />}
                  {playlists.length > 0 &&
                     playlists.map((playlist) => (
                        <ListToSave
                           key={playlist.id}
                           playlist={playlist}
                           media={mediaToSave.media}
                           mediaType={mediaToSave.mediaType}
                        />
                     ))}
               </div>
               <ModalButtonsContainer>
                  <MainButton onClick={closeModal} text="Close" />
               </ModalButtonsContainer>
            </div>
         </ModalContainer>
      </ModalPortal>
   );
}
