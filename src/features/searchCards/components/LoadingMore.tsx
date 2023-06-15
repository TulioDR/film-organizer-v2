import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { SpinnerCircularFixed } from "spinners-react";

type Props = {
   page: number;
   setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function LoadingMore({ page, setPage }: Props) {
   const loadingRef = useRef(null);
   const isInView = useInView(loadingRef);

   useEffect(() => {
      if (isInView) {
         setPage((page) => page + 1);
         console.log("load more");
      }
   }, [isInView, setPage]);

   if (page >= 4) return <></>;
   return (
      <div className="mb-10 w-full">
         <div
            ref={loadingRef}
            className="bg-secondary mx-auto w-max px-20 py-5 rounded-xl"
         >
            <SpinnerCircularFixed
               size={40}
               thickness={180}
               speed={100}
               color="white"
               secondaryColor="transparent"
            />
         </div>
      </div>
   );
}
