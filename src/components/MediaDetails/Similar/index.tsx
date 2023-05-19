import Poster from "@/components/Poster";
import InfoSubtitle from "@/components/MediaDetails/InfoSubtitle";
import Link from "next/link";

type Props = {
   media: any;
   mediaType: "tv" | "movie";
};

export default function Similar({ media, mediaType }: Props) {
   return (
      <div>
         <InfoSubtitle>Similar Movies</InfoSubtitle>
         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-2 gap-5">
            {media.similar.results.map((sim: any) => (
               <Link
                  key={sim.id}
                  href={`/${mediaType}/${media.id}`}
                  className="cursor-pointer w-full"
               >
                  <Poster
                     alt={sim.title || sim.name}
                     posterPath={sim.poster_path}
                     size="md"
                  />
               </Link>
            ))}
         </div>
      </div>
   );
}
