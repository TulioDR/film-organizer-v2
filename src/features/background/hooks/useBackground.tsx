import { MediaModel } from "@/models/MediaModel";
import GenreModel from "@/models/genresModel";
import { backgroundActions } from "@/store/slices/background-slice";
import { useDispatch } from "react-redux";

export default function useBackground() {
   const dispatch = useDispatch();

   const getImage = (media: GenreModel | MediaModel) => {
      if ("image" in media) return media.image;
      else return media.backdrop_path;
   };

   const changeBackground = (media: GenreModel | MediaModel) => {
      const background = {
         backgroundKey: media.id,
         backgroundImage: getImage(media),
      };
      dispatch(backgroundActions.setBackground(background));
   };

   const removeBackground = () => {
      dispatch(backgroundActions.removeBackground());
   };

   return { changeBackground, removeBackground };
}
