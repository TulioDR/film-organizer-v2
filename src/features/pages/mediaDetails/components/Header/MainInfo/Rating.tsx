type Props = {
   rating: any[];
   isMovie: boolean;
};

export default function Rating({ rating, isMovie }: Props) {
   const getRating = (certifications: any[], isMovie: boolean) => {
      const country = certifications?.find((c) => c.iso_3166_1 === "US");
      if (isMovie)
         return (
            country?.release_dates[0]?.certification ||
            country?.release_dates[1]?.certification
         );
      else return country?.rating;
   };

   const rated = getRating(rating, isMovie);

   return (
      <span className="">
         {rated ? (
            <>
               <span className="mr-1 uppercase text-xs">Rated</span>
               <span className="text-base font-title">{rated}</span>
            </>
         ) : (
            <span className="text-xs">Not yet Rated</span>
         )}
      </span>
   );
}
