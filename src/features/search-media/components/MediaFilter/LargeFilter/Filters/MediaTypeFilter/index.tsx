import React from "react";
import FilterCard from "../../FilterCard";
import MediaTypeButton from "./MediaTypeButton";

type Props = {
   isMovie: boolean;
   setMediaType: React.Dispatch<React.SetStateAction<"movie" | "tv">>;
};

export default function MediaTypeFilter({ isMovie, setMediaType }: Props) {
   return (
      <FilterCard name="Movies or Series">
         <div className="flex w-full">
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
