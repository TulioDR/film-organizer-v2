import Responsive from "@/common/components/Responsive";

import { XL_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function Navbar() {
   return (
      <>
         <Responsive minWidth={XL_MEDIA_QUERY}>
            <Desktop />
         </Responsive>
         <Responsive maxWidth={XL_MEDIA_QUERY}>
            <Mobile />
         </Responsive>
      </>
   );
}
