import Responsive from "@/components/Responsive";
import { LG_MEDIA_QUERY } from "@/constants/MEDIA_QUERIES";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

type Props = {
   alt: string;
   posterPath: string;
   backPath: string;
};

export default function HeaderPoster({ alt, posterPath, backPath }: Props) {
   return (
      <>
         <Responsive minWidth={LG_MEDIA_QUERY}>
            <Desktop alt={alt} posterPath={posterPath} />
         </Responsive>
         <Responsive maxWidth={LG_MEDIA_QUERY}>
            <Mobile alt={alt} posterPath={posterPath} backPath={backPath} />
         </Responsive>
      </>
   );
}
