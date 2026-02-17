import React from "react";
import { motion } from "framer-motion";
import ScrollDownIcon from "./ScrollDownIcon";
import { MediaDetailsModel } from "../../models/MediaDetailsModel";
// import MainInfoMobile from "./MainInfoMobile";
import HeaderPoster from "./HeaderPoster";
import HeaderData from "./HeaderData";

type Props = {
   media: MediaDetailsModel;
   media_type: "tv" | "movie";
};

export default function Header({ media, media_type }: Props) {
   return (
      <motion.div className="lg:h-[100svh] flex flex-col lg:flex-row gap-4 relative px-32 items-center">
         <HeaderPoster
            alt={media.name || media.title}
            posterPath={media.poster_path}
            backPath={media.backdrop_path}
         />
         <HeaderData media={media} mediaType={media_type} />
         <ScrollDownIcon />
      </motion.div>
   );
}
