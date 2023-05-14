import React from "react";
import GenreCard from "../../layout/cards/GenreCard";

type Props = {
   genres: any[];
   mediaType: "tv" | "movie";
   setCurrentGenre: React.Dispatch<any>;
};

export default function MovieLayout({
   genres,
   mediaType,
   setCurrentGenre,
}: Props) {
   return (
      <>
         <div className="flex h-full space-x-5">
            {genres.slice(0, 6).map((genre) => (
               <GenreCard
                  key={genre.id}
                  genre={genre}
                  mediaType={mediaType}
                  setCurrentGenre={setCurrentGenre}
               />
            ))}
         </div>
         <div className="flex h-full gap-5">
            {genres.slice(6, 13).map((genre) => (
               <GenreCard
                  key={genre.id}
                  genre={genre}
                  mediaType={mediaType}
                  setCurrentGenre={setCurrentGenre}
               />
            ))}
         </div>
         <div className="flex h-full gap-5">
            {genres.slice(13, 19).map((genre) => (
               <GenreCard
                  key={genre.id}
                  genre={genre}
                  mediaType={mediaType}
                  setCurrentGenre={setCurrentGenre}
               />
            ))}
         </div>
      </>
   );
}
