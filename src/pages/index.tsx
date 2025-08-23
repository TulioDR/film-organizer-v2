import { useEffect } from "react";

import API_PUBLIC from "@/api/public";

import Marquee from "@/features/pages/home/Marquee";
import PageHead from "@/common/components/PageHead";
import { Media } from "@/common/models/Media";
import { useDispatch } from "react-redux";
import { pageTitleActions } from "@/store/slices/page-title-slice";
import useStopLoader from "@/features/layout/loader/hooks/useStopLoader";
import { AnimatePresence, motion } from "framer-motion";

export const getServerSideProps = async () => {
   const { data } = await API_PUBLIC.get("/home");
   const array = data[0].results;
   const midpoint = Math.floor(array.length / 2);
   const firstHalf = array.slice(0, midpoint);
   const secondHalf = array.slice(midpoint);
   return {
      props: { firstHalf, secondHalf },
   };
};

interface Props {
   firstHalf: Media[];
   secondHalf: Media[];
}

export default function Home({ firstHalf, secondHalf }: Props) {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(pageTitleActions.removeTitle());
   }, []);

   const { isLoading } = useStopLoader();

   return (
      <>
         <PageHead title="Film Organizer" />
         <AnimatePresence mode="wait" propagate>
            {!isLoading && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="fixed top-0 left-0 h-[100svh] w-full flex justify-center"
               >
                  <div className="w-[50vw] flex gap-4 h-full">
                     {Array.from({ length: 4 }).map((_, index) => (
                        <Marquee
                           key={index}
                           array={index % 2 === 0 ? firstHalf : secondHalf}
                           reverse={index % 2 === 0}
                           initialY={index * (100 / 4)}
                        />
                     ))}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
