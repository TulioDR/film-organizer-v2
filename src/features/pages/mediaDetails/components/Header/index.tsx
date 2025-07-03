import React from "react";
import { motion } from "framer-motion";
import MainPoster from "./MainPoster";
import MainInfo from "./MainInfo";
import ScrollDownIcon from "./ScrollDownIcon";
import { MediaDetailsModel } from "../../models/MediaDetailsModel";
import MainInfoMobile from "./MainInfoMobile";

type Props = {
   media: MediaDetailsModel;
   media_type: "tv" | "movie";
};

export default function Header({ media, media_type }: Props) {
   return (
      <>
         <motion.div className="sm:h-[100svh] py-32 flex relative overflow-hidden">
            <MainPoster
               alt={media.name || media.title}
               posterPath={media.poster_path}
            />
            <MainInfo media={media} mediaType={media_type} />
            <ScrollDownIcon />
         </motion.div>
         <MainInfoMobile media={media} mediaType={media_type} />
      </>
   );
}
