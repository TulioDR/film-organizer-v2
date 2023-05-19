import Poster from "@/components/Poster";
import React from "react";

type Props = {
   trailer: any;
};

export default function Trailer({ trailer }: Props) {
   return (
      <a
         href={`https://www.youtube.com/watch?v=${trailer.key}`}
         target="_blank"
         className="cursor-pointer flex flex-col"
      >
         <div className="relative">
            <Poster
               alt={trailer.name}
               posterPath={trailer.key}
               size="md"
               backPoster
               trailer
            />

            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-2 left-2 rounded-full aspect-square w-8 border-gray-400 border-[3px] grid place-content-center">
               <span className="material-icons">play_arrow</span>
            </div>
         </div>
         <div className="text-sm pt-1">{trailer.name}</div>
      </a>
   );
}
