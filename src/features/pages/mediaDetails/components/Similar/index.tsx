import SimilarCard from "./SimilarCard";
import Subtitle from "@/components/Subtitle";
import SimilarContainer from "./SimilarContainer";
import { MediaDetailsModel } from "../../models/MediaDetailsModel";

type Props = {
   media: MediaDetailsModel;
   mediaType: "tv" | "movie";
};

export default function Similar({ media, mediaType }: Props) {
   return (
      <SimilarContainer>
         <Subtitle>
            Similar {mediaType === "movie" ? "Movies" : "Series"}
         </Subtitle>
         <div className="flex xl:grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-2 gap-1 sm:gap-5 w-full overflow-x-auto main-scrollbar">
            {media.similar.results.map((similar) => (
               <SimilarCard
                  key={similar.id}
                  href={`/${mediaType}/${similar.id}`}
                  similar={similar}
               />
            ))}
         </div>
      </SimilarContainer>
   );
}
