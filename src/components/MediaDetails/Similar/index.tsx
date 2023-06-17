import InfoSubtitle from "@/components/MediaDetails/InfoSubtitle";
import { MediaDetailsModel } from "@/models/MediaModel";
import SimilarCard from "./SimilarCard";

type Props = {
   media: MediaDetailsModel;
   mediaType: "tv" | "movie";
};

export default function Similar({ media, mediaType }: Props) {
   return (
      <div>
         <InfoSubtitle>
            Similar {mediaType === "movie" ? "Movies" : "Series"}
         </InfoSubtitle>
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
