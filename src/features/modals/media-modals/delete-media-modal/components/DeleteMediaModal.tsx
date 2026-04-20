import { useEffect, useState } from "react";
// import { deleteManyMedia } from "@/api/media";

import MediaToDelete from "./MediaToDelete";
import Subtitle from "./Subtitle";

// import useNotification from "@/features/layout/notification/hooks/useNotification";
import ModalTitle from "@/features/modals/modal-parts/components/ModalTitle";
import ModalButtonsContainer from "@/features/modals/modal-parts/components/ModalButtonsContainer";
import { SavedMedia } from "@/common/models/Media";
import ModalAnimationContainer from "@/features/modals/modal-parts/components/ModalAnimationContainer";
import MainButton from "@/common/components/MainButton";

type Props = {
   close: () => void;
   mediaToDelete: SavedMedia[];
   list: any;
   refresh: () => void;
   stopDeleteMode: () => void;
};

export default function DeleteMediaModal({
   close,
   mediaToDelete,
   list,
   // refresh,
   // stopDeleteMode,
}: Props) {
   const [movies, setMovies] = useState<SavedMedia[]>([]);
   const [tvSeries, setTvSeries] = useState<SavedMedia[]>([]);

   const [isLoading, setIsLoading] = useState<boolean>(false);
   // const { showSuccessNotification, showErrorNotification } = useNotification();

   useEffect(() => {
      const movie = mediaToDelete.filter(
         ({ media_type }) => media_type === "movie",
      );
      const tv = mediaToDelete.filter(({ media_type }) => media_type === "tv");
      setMovies(movie);
      setTvSeries(tv);
   }, [mediaToDelete]);

   const deleteMediaFunction = async () => {
      setIsLoading(true);
      // const ids = mediaToDelete.map(({ media_id }) => id);
      // const { error } = await deleteManyMedia(ids);
      // if (error) {
      //    setIsLoading(false);
      //    showErrorNotification(error);
      // } else {
      //    showSuccessNotification("Media deleted Successfully");
      //    refresh();
      //    stopDeleteMode();
      //    close();
      // }
   };

   return (
      <ModalAnimationContainer closeModal={close}>
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
            <MainButton onClick={close} text="cancel" />
            <MainButton
               onClick={deleteMediaFunction}
               isLoading={isLoading}
               text="Delete"
            />
         </ModalButtonsContainer>
      </ModalAnimationContainer>
   );
}
