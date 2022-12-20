import React from "react";
import useSidebarContext from "../../../context/SidebarContext";
import Poster from "../../Poster";

type Props = {
   media: any;
   index: number;
   currentIndex: number | null;
   setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
   getDetails: (index: number) => void;
};

export default function QuickResult({
   media,
   index,
   currentIndex,
   setCurrentIndex,
   getDetails,
}: Props) {
   const { isMovie } = useSidebarContext();

   const selected = index !== null && index === currentIndex;
   return (
      <li
         onClick={() => getDetails(index)}
         onMouseDown={(e) => e.preventDefault()}
         onMouseEnter={() => setCurrentIndex(index)}
         onMouseLeave={() => setCurrentIndex(null)}
         className={`h-20 cursor-pointer flex py-2 px-5 ${
            selected ? "bg-light-bg dark:bg-dark-bg" : ""
         }`}
      >
         <Poster
            alt={media.title || media.name}
            size="sm"
            posterPath={media.poster_path}
         />
         <div className="pl-2">
            <div className="text-black dark:text-white text-sm">
               {isMovie ? media.title : media.name}
            </div>
            <div className="text-gray-dark dark:text-gray-light text-xs">
               {isMovie
                  ? media.release_date?.substr(0, 4) || "N/A"
                  : media.first_air_date?.substr(0, 4) || "N/A"}
            </div>
         </div>
      </li>
   );
}
