import { useEffect, useState } from "react";
import { deleteMedia } from "../../actions/media";
import MediaModel from "../../models/MediaModel";
import ModalButton from "../modals/ModalButton";
import ModalButtonsContainer from "../modals/ModalButtonsContainer";
import ModalContainer from "../modals/ModalContainer";
import ModalTItle from "../modals/ModalTItle";

type Props = {
   isOpen: boolean;
   close: () => void;
   mediaToDelete: MediaModel[];
   list: any;
   refresh: () => void;
};

export default function DeleteMediaModal({
   isOpen,
   close,
   mediaToDelete,
   list,
   refresh,
}: Props) {
   const [movies, setMovies] = useState<MediaModel[]>([]);
   const [tvSeries, setTvSeries] = useState<MediaModel[]>([]);

   useEffect(() => {
      const movie = mediaToDelete.filter(
         ({ media_type }) => media_type === "movie"
      );
      const tv = mediaToDelete.filter(({ media_type }) => media_type === "tv");
      setMovies(movie);
      setTvSeries(tv);
   }, [mediaToDelete]);

   const deleteMediaFunction = async () => {
      const ids = mediaToDelete.map(({ id }) => id);
      const deletedMedia = await deleteMedia(ids);
      console.log(deletedMedia);
      refresh();
      close();
   };

   return (
      <ModalContainer isOpen={isOpen} close={close}>
         <ModalTItle>Delete from {list?.name}</ModalTItle>
         <div className="text-sm text-light-text-soft dark:text-dark-text-soft">
            <div>The next items are going to be deleted:</div>
            <div>
               Note: Deleting an item from the list is a permanent action and
               can't be undone.
            </div>
            <div>
               <div className="mt-2 text-lg font-medium text-light-text-normal dark:text-dark-text-normal">
                  Movies
               </div>
               <ul>
                  {movies.length ? (
                     movies.map((item) => (
                        <li key={item.id} className="h-6 pl-2">
                           - {item.name}
                        </li>
                     ))
                  ) : (
                     <span className="h-6 pl-2">
                        No Movies are going to be deleted
                     </span>
                  )}
               </ul>
               <div className="mt-2 text-lg font-medium text-light-text-normal dark:text-dark-text-normal">
                  TV Series
               </div>
               <ul>
                  {tvSeries.length ? (
                     tvSeries.map((item) => (
                        <li key={item.id} className="h-6 pl-2">
                           - {item.name}
                        </li>
                     ))
                  ) : (
                     <span className="h-6 pl-2">
                        No TV Series are going to be deleted
                     </span>
                  )}
               </ul>
            </div>
         </div>
         <ModalButtonsContainer>
            <ModalButton onClick={close}>Cancel</ModalButton>
            <ModalButton red onClick={deleteMediaFunction}>
               Delete
            </ModalButton>
         </ModalButtonsContainer>
      </ModalContainer>
   );
}
