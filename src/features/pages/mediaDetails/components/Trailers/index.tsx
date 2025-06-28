import Trailer from "./Trailer";
import InfoContainer from "../InfoContainer";
import { Video } from "../../models/MediaDetailsModel";

type Props = {
   trailers: any[];
};

export default function Trailers({ trailers }: Props) {
   return (
      <InfoContainer<Video>
         itemsPerPage={4}
         columnLength={2}
         subtitle="Trailers"
         media={trailers}
         renderItem={(trailerItem) => <Trailer trailer={trailerItem} />}
      />
   );
}
