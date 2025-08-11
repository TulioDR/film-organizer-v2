import Trailer from "./Trailer";
import InfoContainer from "../InfoContainer";
import { Video } from "../../../models/MediaDetailsModel";
import {
   SM_MEDIA_QUERY,
   XL_MEDIA_QUERY,
   XXL_MEDIA_QUERY,
} from "@/common/constants/MEDIA_QUERIES";
import ResponsiveConfig from "../../../models/ResponsiveConfig";
import Responsive from "@/common/components/Responsive";
import { useEffect } from "react";

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

   useEffect(() => {
      console.log(trailers);
   }, [trailers]);

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
