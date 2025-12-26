import React from "react";
import FilterCard from "../../FilterCard";
import MediaTypeButton from "./MediaTypeButton";
import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import {
   MOVIE_ICON,
   TV_ICON,
} from "@/features/pages/media-type/constants/FILTER_ICONS";

type Props = {};

export default function MediaTypeFilter({}: Props) {
   const { mediaType, setMediaType } = useMediaFilterContext();
   const isMovie = mediaType === "movie";

   return (
      <FilterCard icon={isMovie ? MOVIE_ICON : TV_ICON} name="Movies or Series">
         <div className="flex w-full gap-2">
            <MediaTypeButton
               text="Movies"
               isSelected={isMovie}
               onClick={() => setMediaType("movie")}
            />
            <MediaTypeButton
               text="Series"
               isSelected={!isMovie}
               onClick={() => setMediaType("tv")}
            />
         </div>
      </FilterCard>
   );
}
