import React from "react";
import TypePill from "./TypePill";

type Props = {
   selectedType: "movie" | "tv" | "all";
   setSelectedType: React.Dispatch<
      React.SetStateAction<"movie" | "tv" | "all">
   >;
};

export default function MediaTypePills({
   selectedType,
   setSelectedType,
}: Props) {
   return (
      <div className="flex items-center gap-3">
         <TypePill
            name="All"
            type="all"
            selectedType={selectedType}
            setSelectedType={setSelectedType}
         />
         <TypePill
            name="Movies"
            type="movie"
            selectedType={selectedType}
            setSelectedType={setSelectedType}
         />
         <TypePill
            name="Series"
            type="tv"
            selectedType={selectedType}
            setSelectedType={setSelectedType}
         />
      </div>
   );
}
