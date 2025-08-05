import Container from "../InfoContainer/Container";
import PageSubtitle from "@/common/components/PageSubtitle";

type Props = {
   media: any;
};

export default function Overview({ media }: Props) {
   return (
      <Container>
         <PageSubtitle>Overview</PageSubtitle>
         <div>
            {media.tagline && (
               <div className="italic font-bold mb-1 text-gray-700">
                  {media.tagline}
               </div>
            )}
            <div className="text-black text-xs sm:text-sm">
               {media.overview || "No overview available"}
            </div>
         </div>
      </Container>
   );
}
