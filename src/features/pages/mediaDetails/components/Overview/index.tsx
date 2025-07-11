import Subtitle from "@/components/Subtitle";
import Container from "../InfoContainer/Container";

type Props = {
   media: any;
};

export default function Overview({ media }: Props) {
   return (
      <Container>
         <Subtitle>Overview</Subtitle>
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
