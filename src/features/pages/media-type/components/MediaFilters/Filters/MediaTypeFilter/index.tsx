import MediaTypeButton from "./MediaTypeButton";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import {
   MOVIE_ICON,
   TV_ICON,
} from "@/features/pages/media-type/constants/FILTER_ICONS";
import MainFilterCard from "@/features/mainFilter/components/MainFilterCard";

type Props = {};

export default function MediaTypeFilter({}: Props) {
   const { state, dispatch } = useMediaFilterContext();

   const isMovie = state.mediaType === "movie";

   const changeMediaType = (mediaType: "movie" | "tv") => {
      dispatch({ type: "SET_MEDIA_TYPE", payload: mediaType });
   };

   return (
      <MainFilterCard
         icon={isMovie ? MOVIE_ICON : TV_ICON}
         name="Movies or Series"
      >
         <div className="flex w-full gap-2">
            <MediaTypeButton
               text="Movies"
               isSelected={isMovie}
               onClick={() => changeMediaType("movie")}
            />
            <MediaTypeButton
               text="Series"
               isSelected={!isMovie}
               onClick={() => changeMediaType("tv")}
            />
         </div>
      </MainFilterCard>
   );
}
