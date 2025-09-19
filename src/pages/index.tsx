import { useEffect, useState } from "react";

import API_PUBLIC from "@/api/public";

import Marquee from "@/features/pages/home/Marquee";
import PageHead from "@/common/components/PageHead";
import { Media } from "@/common/models/Media";
import { pageTitleActions } from "@/store/slices/page-title-slice";
import { motion } from "framer-motion";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import useStopLoader from "@/features/layout/loader/hooks/useStopLoader";
import HomeImage from "@/features/pages/home/HomeImage";

export const getServerSideProps = async () => {
   const { data } = await API_PUBLIC.get("/home");
   const originalArray = data[0].results;

   const quarterSize = originalArray.length / 4;

   const array1 = originalArray.slice(0, quarterSize);
   const array2 = originalArray.slice(quarterSize, quarterSize * 2);
   const array3 = originalArray.slice(quarterSize * 2, quarterSize * 3);
   const array4 = originalArray.slice(quarterSize * 3, originalArray.length);

   const bigArray = [array1, array2, array3, array4];
   return {
      props: { bigArray },
   };
};

interface Props {
   bigArray: Media[][];
}

export default function Home({ bigArray }: Props) {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(pageTitleActions.removeTitle());
   }, []);

   useStopLoader();

   const [src, setSrc] = useState<string | null>(null);

   const [isHovered, setIsHovered] = useState(false);

   return (
      <>
         <PageHead title="Film Organizer" />
         <HomeImage src={src} />
         <motion.div className="fixed top-0 left-0 h-[100svh] w-full flex justify-start px-32 overflow-hidden">
            <motion.div
               initial={{ y: "100%", opacity: 0 }}
               animate={{ y: "0%", opacity: 1 }}
               exit={{ y: "-100%", opacity: 0 }}
               transition={{ duration: 1 }}
               onHoverStart={() => setIsHovered(true)}
               onHoverEnd={() => setIsHovered(false)}
               className="w-1/2 flex gap-4 h-full"
            >
               {bigArray.map((array, index) => (
                  <Marquee
                     key={index}
                     array={array}
                     reverse={index % 2 === 0}
                     initialY={index * (100 / 4)}
                     setSrc={setSrc}
                     isHovered={isHovered}
                  />
               ))}
            </motion.div>
         </motion.div>
      </>
   );
}
