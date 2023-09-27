import { MediaDetailsModel } from "@/models/MediaModel";
import SimilarCard from "./SimilarCard";
import Subtitle from "@/components/Subtitle";

type Props = {
   media: MediaDetailsModel;
   mediaType: "tv" | "movie";
};

export default function Similar({ media, mediaType }: Props) {
   return (
      <div className="">
         <Subtitle>
            Similar {mediaType === "movie" ? "Movies" : "Series"}
         </Subtitle>
         <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-2 gap-5">
            {media.similar.results.map((similar) => (
               <SimilarCard
                  key={similar.id}
                  href={`/${mediaType}/${similar.id}`}
                  similar={similar}
               />
            ))}
         </div>
      </div>
   );
}
