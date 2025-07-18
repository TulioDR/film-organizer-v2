import React from "react";
import { motion } from "framer-motion";
import ScrollDownIcon from "./ScrollDownIcon";
import { MediaDetailsModel } from "../../models/MediaDetailsModel";
// import MainInfoMobile from "./MainInfoMobile";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import HeaderPoster from "./HeaderPoster";
import HeaderData from "./HeaderData";

type Props = {
   media: MediaDetailsModel;
   media_type: "tv" | "movie";
};

export default function Header({ media, media_type }: Props) {
   const { isHidden } = useSelector((state: StoreModel) => state.layout);
   return (
      <motion.div
         animate={{ opacity: isHidden ? 0 : 1 }}
         transition={{ duration: 0.2 }}
         className="lg:h-[100svh] pt-24 pb-4 lg:pt-24 lg:pb-24 xl:pt-32 xl:pb-32 flex flex-col lg:flex-row gap-4 xl:gap-8 relative "
      >
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
