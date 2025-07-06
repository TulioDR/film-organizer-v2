import React from "react";
import { motion } from "framer-motion";
import MainPoster from "./MainPoster";
import MainInfo from "./MainInfo";
import ScrollDownIcon from "./ScrollDownIcon";
import { MediaDetailsModel } from "../../models/MediaDetailsModel";
import MainInfoMobile from "./MainInfoMobile";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";

type Props = {
   media: MediaDetailsModel;
   media_type: "tv" | "movie";
};

export default function Header({ media, media_type }: Props) {
   const { isHidden } = useSelector((state: StoreModel) => state.layout);
   return (
      <>
         <motion.div
            animate={{ opacity: isHidden ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="sm:h-[100svh] py-32 flex relative"
         >
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
