import SimilarCard from "./SimilarCard";
import { MediaDetailsModel } from "../../models/MediaDetailsModel";
import InfoContainer from "../InfoContainer";

type Props = {
   media: MediaDetailsModel;
   mediaType: "tv" | "movie";
};

export default function Similar({ media, mediaType }: Props) {
   const similarMedia = media.similar.results;

   return (
      <InfoContainer
         itemsPerPage={5}
         numberOfRows={1}
         columnLength={2}
         subtitle={`Similar ${mediaType === "movie" ? "Movies" : "Series"}`}
         media={similarMedia}
         renderItem={(similar) => (
            <SimilarCard
               href={`/${mediaType}/${similar.id}`}
               similar={similar}
            />
         )}
      />
   );
}
