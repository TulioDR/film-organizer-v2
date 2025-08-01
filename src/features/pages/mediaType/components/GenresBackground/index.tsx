import movieGenres from "@/data/genres/movieGenres";
import tvGenres from "@/data/genres/tvGenres";
import GenreModel from "@/features/pages/genres/models/GenreModel";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {};

export default function GenresBackground({}: Props) {
   const [genres, setGenres] = useState<GenreModel[]>([]);

   const router = useRouter();

   useEffect(() => {
      const mediaType = router.query.media_type;
      if (!mediaType) return;
      const isMovie = mediaType === "movie";
      setGenres(isMovie ? movieGenres : tvGenres);
   }, [router.query.media_type]);

   return (
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
         <div className="w-[125%] h-[125%] grid grid-cols-4 grid-rows-4 flex-shrink-0">
            {genres.map((genre) => (
               <div key={genre.id} className="w-full h-full relative">
                  <Image
                     src={genre.image}
                     alt={genre.name}
                     sizes="100%"
                     fill
                     className="object-cover"
                  />
               </div>
            ))}
         </div>
      </div>
   );
}
