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
      <div className="flex items-center space-x-3 mb-2">
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
            name="TV Shows"
            type="tv"
            selectedType={selectedType}
            setSelectedType={setSelectedType}
         />
      </div>
   );
}
