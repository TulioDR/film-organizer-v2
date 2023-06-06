import GenreCard from "../../layout/cards/GenreCard";

type Props = {
   genres: any[];
   mediaType: "tv" | "movie";
};

export default function TvLayout({ genres, mediaType }: Props) {
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
