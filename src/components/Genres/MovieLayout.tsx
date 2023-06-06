import React from "react";
import GenreCard from "./GenreCard";

type Props = {
   genres: any[];
   mediaType: "tv" | "movie";
};

export default function MovieLayout({ genres, mediaType }: Props) {
   return (
      <>
         <div className="flex h-full space-x-5">
            {genres.slice(0, 6).map((genre) => (
               <GenreCard
                  key={genre.id + mediaType}
                  genre={genre}
                  mediaType={mediaType}
               />
            ))}
         </div>
         <div className="flex h-full gap-5">
            {genres.slice(6, 13).map((genre) => (
               <GenreCard
                  key={genre.id + mediaType}
                  genre={genre}
                  mediaType={mediaType}
               />
            ))}
         </div>
         <div className="flex h-full gap-5">
            {genres.slice(13, 19).map((genre) => (
               <GenreCard
                  key={genre.id + mediaType}
                  genre={genre}
                  mediaType={mediaType}
               />
            ))}
         </div>
      </>
   );
}
