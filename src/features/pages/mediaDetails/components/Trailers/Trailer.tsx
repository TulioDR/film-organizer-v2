import React from "react";
import { Video } from "../../models/MediaDetailsModel";
import youtubeLogo from "@/data/images/logos/youtube.svg";
import CustomHyperlink from "../CustomHyperlink";

type Props = {
   trailer: Video;
};

export default function Trailer({ trailer }: Props) {
   return (
      <div className="flex flex-col gap-2">
         <CustomHyperlink
            href={`https://www.youtube.com/watch?v=${trailer.key}`}
            posterPath={trailer.key}
            alt={trailer.name}
            logo={youtubeLogo.src}
            horizontal
            backPoster
            trailer
         />
         <div className="w-full text-xs lg:text-sm truncate">
            {trailer.name}
         </div>
      </div>
   );
}
