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
      if (isInView) setPage((page) => page + 1);
   }, [isInView, setPage]);

   if (page >= 4) return <></>;
   return (
      <div
         ref={loadingRef}
         className="bg-secondary-light dark:bg-secondary-dark mx-auto w-max px-20 py-5 rounded-xl"
      >
         <SpinnerCircularFixed
            size={40}
            thickness={180}
            speed={100}
            color="white"
            secondaryColor="transparent"
         />
      </div>
   );
}