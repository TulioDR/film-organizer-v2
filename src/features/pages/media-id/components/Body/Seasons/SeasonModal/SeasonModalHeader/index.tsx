import Responsive from "@/common/components/Responsive";
import { XL_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

type Props = {
   season: any;
};

export default function SeasonModalHeader({ season }: Props) {
   return (
      <>
         <Responsive minWidth={XL_MEDIA_QUERY}>
            <Desktop season={season} />
         </Responsive>
         <Responsive maxWidth={XL_MEDIA_QUERY}>
            <Mobile season={season} />
         </Responsive>
      </>
   );
}
