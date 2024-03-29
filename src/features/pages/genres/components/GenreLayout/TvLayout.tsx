import GenreCard from "../GenreCard";

type Props = {
   genres: any[];
};

export default function TvLayout({ genres }: Props) {
   const mediaType = "tv";
   return (
      <>
         <div className="flex h-full space-x-5">
            {genres.slice(0, 5).map((genre) => (
               <GenreCard
                  key={genre.id + mediaType}
                  genre={genre}
                  mediaType={mediaType}
               />
            ))}
         </div>
         <div className="flex h-full gap-5">
            {genres.slice(5, 11).map((genre) => (
               <GenreCard
                  key={genre.id + mediaType}
                  genre={genre}
                  mediaType={mediaType}
               />
            ))}
         </div>
         <div className="flex h-full gap-5">
            {genres.slice(11, 16).map((genre) => (
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
