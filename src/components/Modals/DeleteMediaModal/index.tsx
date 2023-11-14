import { useEffect, useState } from "react";
import { deleteManyMedia } from "@/api/media";
import { SavedMediaModel } from "../../../models/MediaModel";
import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";
import MediaToDelete from "./MediaToDelete";
import Subtitle from "./Subtitle";
import LoadingButton from "../LoadingButton";
import useNotification from "@/features/notification/hooks/useNotification";

type Props = {
   close: () => void;
   mediaToDelete: SavedMediaModel[];
   list: any;
   refresh: () => void;
   stopDeleteMode: () => void;
};

export default function DeleteMediaModal({
   close,
   mediaToDelete,
   list,
   refresh,
   stopDeleteMode,
}: Props) {
   const [movies, setMovies] = useState<SavedMediaModel[]>([]);
   const [tvSeries, setTvSeries] = useState<SavedMediaModel[]>([]);

   const [isLoading, setIsLoading] = useState<boolean>(false);
   const { showSuccessNotification, showErrorNotification } = useNotification();

   useEffect(() => {
      const movie = mediaToDelete.filter(
         ({ media_type }) => media_type === "movie"
      );
      const tv = mediaToDelete.filter(({ media_type }) => media_type === "tv");
      setMovies(movie);
      setTvSeries(tv);
   }, [mediaToDelete]);

   const deleteMediaFunction = async () => {
      setIsLoading(true);
      const ids = mediaToDelete.map(({ id }) => id);
      const { error } = await deleteManyMedia(ids);
      if (error) {
         setIsLoading(false);
         showErrorNotification(error);
      } else {
         showSuccessNotification("Media deleted Successfully");
         refresh();
         stopDeleteMode();
         close();
      }
   };

   return (
      <ModalContainer closeModal={close}>
         <ModalTitle>
            Delete from <em>{list.name}</em>
         </ModalTitle>
         <div className="text-xs sm:text-sm text-text-2">
            <div>The next items are going to be deleted:</div>
            <div>
               Note: Deleting an item from the list is a permanent action and
               cannot be undone.
            </div>
            <div>
               <Subtitle>Movies</Subtitle>
               <MediaToDelete media={movies} movie />
               <Subtitle>TV Series</Subtitle>
               <MediaToDelete media={tvSeries} />
            </div>
         </div>
         <ModalButtonsContainer>
            <ModalButton onClick={close}>Cancel</ModalButton>
            <ModalButton red onClick={deleteMediaFunction} disabled={isLoading}>
               <LoadingButton isLoading={isLoading}>Delete</LoadingButton>
            </ModalButton>
         </ModalButtonsContainer>
      </ModalContainer>
   );
}
