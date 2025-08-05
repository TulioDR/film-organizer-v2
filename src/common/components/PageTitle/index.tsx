import React, { useEffect, useState } from "react";
import TitleSection from "./TitleSection";
import { useRouter } from "next/router";
import SEARCH_PAGES from "@/common/constants/SEARCH_PAGES";
import { AnimatePresence, motion } from "framer-motion";
import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";

type Props = {};

export default function PageTitle({}: Props) {
   const router = useRouter();

   const [mediaType, setMediaType] = useState<string | null>(null);
   const [searchType, setSearchType] = useState<string | null>(null);
   const [genreType, setGenreType] = useState<string | null>(null);

   useEffect(() => {
      const path = SEARCH_PAGES.find((p) => p.pathname === router.pathname);
      const MT = router.query.media_type;

      console.log(path, MT);
      if (path && MT && ["movie", "tv"].includes(MT as string)) {
         setMediaType(MT === "movie" ? "Movies" : "TV Shows");
         setSearchType(path.title);
         if (path.pathname === "/[media_type]/genres/[genre_id]") {
            const genreId = router.query.genre_id! as string;
            const currentGenres = MT === "movie" ? movieGenres : tvGenres;
            const selectedGenre = currentGenres.find((g) => g.id === +genreId!);
            setGenreType(selectedGenre ? selectedGenre.name : null);
         } else {
            setGenreType(null);
         }
      } else {
         setMediaType(null);
         setSearchType(null);
         setGenreType(null);
      }
   }, [router.pathname, router.query.media_type, router.query.genre_id]);

   if (!mediaType || !searchType) return <></>;
   return (
      // <div className="fixed">

      // </div>
      <motion.h1 className="absolute z-50 top-32 left-32 overflow-hidden h-8 flex gap-2 xl:gap-4 bg-green-500">
         <AnimatePresence mode="wait">
            <TitleSection key={mediaType} text={mediaType} />
         </AnimatePresence>
         {/* <AnimatePresence mode="wait">
            <TitleSection
               key={`${mediaType}-${searchType}`}
               text={searchType}
            />
         </AnimatePresence>
         <AnimatePresence mode="wait">
            {genreType && <TitleSection key={genreType} text={genreType} />}
         </AnimatePresence> */}
      </motion.h1>
   );
}
