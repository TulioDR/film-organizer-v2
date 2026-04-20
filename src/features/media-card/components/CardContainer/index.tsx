import Responsive from "@/common/components/Responsive";
import { LG_MEDIA_QUERY } from "@/common/constants/MEDIA_QUERIES";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

type Props = {
   children: React.ReactNode;
   layoutId: string;
   isLoading: boolean;
};

export default function CardContainer({
   children,
   layoutId,
   isLoading,
}: Props) {
   return (
      <>
         <Responsive minWidth={LG_MEDIA_QUERY}>
            <Desktop layoutId={layoutId} isLoading={isLoading}>
               {children}
            </Desktop>
         </Responsive>
         <Responsive maxWidth={LG_MEDIA_QUERY}>
            <Mobile layoutId={layoutId} isLoading={isLoading}>
               {children}
            </Mobile>
         </Responsive>
      </>
   );
}
