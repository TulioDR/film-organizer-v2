import { useState } from "react";
import InfoSubtitle from "../InfoSubtitle";
import Trailer from "./Trailer";
import ShowButton from "./ShowButton";

type Props = {
   trailers: any[];
};

export default function Trailers({ trailers }: Props) {
   const [isShowingMore, setIsShowingMore] = useState<boolean>(false);
   const [displayed, setDisplayed] = useState<any[]>(trailers.slice(0, 8));

   const showMore = () => {
      setIsShowingMore(true);
      setDisplayed(trailers);
   };
   const showLess = () => {
      setIsShowingMore(false);
      setDisplayed(trailers.slice(0, 8));
   };

   return (
      <div className="w-full">
         <InfoSubtitle>Trailers</InfoSubtitle>
         {trailers.length > 0 ? (
            <>
               <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                  {displayed.map((trailer) => (
                     <Trailer key={trailer.id} trailer={trailer} />
                  ))}
               </div>
               {trailers.length > 8 && (
                  <div className="flex flex-col items-center gap-3 mt-7">
                     {!isShowingMore && (
                        <div className="text-xs sm:text-sm">
                           There are {trailers.length - 8} more trailers
                        </div>
                     )}
                     <ShowButton onClick={isShowingMore ? showLess : showMore}>
                        {isShowingMore ? "Show Less" : "Show More"}
                     </ShowButton>
                  </div>
               )}
            </>
         ) : (
            <div>No trailers available</div>
         )}
      </div>
   );
}
