import { useRouter } from "next/router";
import React from "react";
import useSidebarContext from "../../../context/SidebarContext";
import Poster from "../../Poster";

type Props = {
   media: any;
   setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function QuickResult({ media, setShowResults }: Props) {
   const { isMovie } = useSidebarContext();
   const router = useRouter();
   const getDetails = () => {
      const type = isMovie ? "movie" : "tv";
      router.push(`/${type}/${media.id}`);
      setShowResults(false);
   };
   return (
      <li
         onClick={getDetails}
         onMouseDown={(e) => e.preventDefault()}
         className="hover:bg-gray-700 h-20 cursor-pointer flex p-2 items-center"
      >
         <Poster
            alt={media.title || media.name}
            size="sm"
            posterPath={media.poster_path}
         />
         <div className="pl-2">
            <div className="text-black dark:text-white">
               {isMovie ? media.title : media.name}
            </div>
            <div className="text-gray-500 text-sm">
               {isMovie
                  ? media.release_date?.substr(0, 4) || "N/A"
                  : media.first_air_date?.substr(0, 4) || "N/A"}
            </div>
         </div>
      </li>
   );
}
