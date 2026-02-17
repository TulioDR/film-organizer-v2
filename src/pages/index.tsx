import { useEffect, useState } from "react";

import API_PUBLIC from "@/api/public";

import Marquee from "@/features/pages/home/Marquee";
import PageHead from "@/common/components/PageHead";
import { Media } from "@/common/models/Media";
import { pageTitleActions } from "@/store/slices/page-title-slice";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import HomeImage from "@/features/pages/home/HomeImage";
import MarqueesWrapper from "@/features/pages/home/MarqueesWrapper";

export const getServerSideProps = async () => {
   const { data } = await API_PUBLIC.get("/home");
   const originalArray = data[0].results;

   const quarterSize = originalArray.length / 4;

   const array1 = originalArray.slice(0, quarterSize);
   const array2 = originalArray.slice(quarterSize, quarterSize * 2);
   const array3 = originalArray.slice(quarterSize * 2, quarterSize * 3);
   const array4 = originalArray.slice(quarterSize * 3, originalArray.length);

   const bigArray = [
      [...array1, ...array1],
      [...array2, ...array2],
      [...array3, ...array3],
      [...array4, ...array4],
   ];

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

   const [src, setSrc] = useState<string | null>(null);

   const [isHovered, setIsHovered] = useState(false);
   const onHoverStart = () => setIsHovered(true);
   const onHoverEnd = () => setIsHovered(false);

   return (
      <>
         <PageHead title="Film Organizer" />
         <HomeImage src={src} />
         <MarqueesWrapper onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
            {bigArray.map((array, index) => (
               <Marquee
                  key={index}
                  array={array}
                  reverse={index % 2 === 0}
                  initialY={index + (index % 2 === 0 ? 75 : 25)}
                  setSrc={setSrc}
                  isHovered={isHovered}
               />
            ))}
         </MarqueesWrapper>
      </>
   );
}
