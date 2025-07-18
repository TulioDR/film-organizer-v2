import Person from "./Person";
import InfoContainer from "../InfoContainer";
import {
   MD_MEDIA_QUERY,
   SM_MEDIA_QUERY,
   XL_MEDIA_QUERY,
   XXL_MEDIA_QUERY,
} from "@/constants/MEDIA_QUERIES";
import Responsive from "@/components/Responsive";
import ResponsiveConfig from "../../../models/ResponsiveConfig";

type Props = {
   people: any[];
   type: string;
};

export default function People({ people, type }: Props) {
   const responsiveConfigs: ResponsiveConfig[] = [
      { minWidth: XXL_MEDIA_QUERY, itemsPerPage: 4 },
      { minWidth: XL_MEDIA_QUERY, maxWidth: XXL_MEDIA_QUERY, itemsPerPage: 3 },
      { minWidth: MD_MEDIA_QUERY, maxWidth: XL_MEDIA_QUERY, itemsPerPage: 5 },
      { minWidth: SM_MEDIA_QUERY, maxWidth: MD_MEDIA_QUERY, itemsPerPage: 4 },
      { maxWidth: SM_MEDIA_QUERY, itemsPerPage: 3 },
   ];

   return (
      <>
         {responsiveConfigs.map((config, index) => (
            <Responsive key={index} {...config}>
               <InfoContainer
                  itemsPerPage={config.itemsPerPage}
                  numberOfRows={config.numberOfRows}
                  subtitle={type}
                  media={people}
                  renderItem={(person) => <Person person={person} />}
               />
            </Responsive>
         ))}
      </>
   );
}
