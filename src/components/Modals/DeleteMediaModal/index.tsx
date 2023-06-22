import { useEffect, useState } from "react";
import { deleteMedia } from "../../../api/media";
import { SavedMediaModel } from "../../../models/MediaModel";
import ModalButton from "../ModalButton";
import ModalButtonsContainer from "../ModalButtonsContainer";
import ModalContainer from "../ModalContainer";
import ModalTitle from "../ModalTitle";
import MediaToDelete from "./MediaToDelete";
import Subtitle from "./Subtitle";
import ModalPortal from "../ModalPortal";

type Props = {
   isOpen: boolean;
   close: () => void;
   mediaToDelete: SavedMediaModel[];
   list: any;
};

export default function DeleteMediaModal({
   isOpen,
   close,
   mediaToDelete,
   list,
}: Props) {
   const [movies, setMovies] = useState<SavedMediaModel[]>([]);
   const [tvSeries, setTvSeries] = useState<SavedMediaModel[]>([]);

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
      close();
      const deletedMedia = await deleteMedia(ids);
      console.log(deletedMedia);
   };

   return (
      <ModalPortal isOpen={isOpen}>
         <ModalContainer close={close}>
            <ModalTitle>
               Delete from <em>{list?.name}</em>
            </ModalTitle>
            <div className="text-sm text-text-2">
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
               <ModalButton red onClick={deleteMediaFunction}>
                  Delete
               </ModalButton>
            </ModalButtonsContainer>
         </ModalContainer>
      </ModalPortal>
   );
}
