import React from "react";
import { Video } from "../../models/MediaDetailsModel";
import youtubeLogo from "@/data/images/logos/youtube.svg";
import CustomHyperlink from "../CustomHyperlink";

type Props = {
   trailer: Video;
};

export default function Trailer({ trailer }: Props) {
   return (
      <CustomHyperlink
         href={`https://www.youtube.com/watch?v=${trailer.key}`}
         posterPath={trailer.key}
         alt={trailer.name}
         logo={youtubeLogo.src}
         horizontal
         backPoster
         trailer
         footer={
            <div className="w-full text-xs lg:text-sm font-medium truncate p-4">
               {trailer.name}
            </div>
         }
      />
   );
}
