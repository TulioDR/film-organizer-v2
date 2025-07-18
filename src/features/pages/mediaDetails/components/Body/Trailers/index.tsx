import Trailer from "./Trailer";
import InfoContainer from "../InfoContainer";
import { Video } from "../../../models/MediaDetailsModel";
import {
   SM_MEDIA_QUERY,
   XL_MEDIA_QUERY,
   XXL_MEDIA_QUERY,
} from "@/constants/MEDIA_QUERIES";
import Responsive from "@/components/Responsive";
import ResponsiveConfig from "../../../models/ResponsiveConfig";

type Props = {
   trailers: any[];
};

export default function Trailers({ trailers }: Props) {
   const responsiveConfigs: ResponsiveConfig[] = [
      { minWidth: XXL_MEDIA_QUERY, itemsPerPage: 4 },
      {
         maxWidth: XXL_MEDIA_QUERY,
         minWidth: XL_MEDIA_QUERY,
         itemsPerPage: 3,
      },
      {
         maxWidth: XL_MEDIA_QUERY,
         minWidth: SM_MEDIA_QUERY,
         itemsPerPage: 2,
      },
      { maxWidth: SM_MEDIA_QUERY, itemsPerPage: 2, numberOfRows: 2 },
   ];

   return (
      <>
         {responsiveConfigs.map((config, index) => (
            <Responsive key={index} {...config}>
               <InfoContainer<Video>
                  itemsPerPage={config.itemsPerPage}
                  numberOfRows={config.numberOfRows}
                  subtitle="Trailers"
                  media={trailers}
                  className="xl:col-span-2"
                  renderItem={(trailerItem) => (
                     <Trailer trailer={trailerItem} />
                  )}
               />
            </Responsive>
         ))}
      </>
   );
}
