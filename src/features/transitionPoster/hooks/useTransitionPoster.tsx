import { useRouter } from "next/router";
import { useState } from "react";
import { windowExtraLarge } from "../../../data/constants/windowWidth";
import { PositionModel } from "../../../models/TransitionPosterModels";

export default function useTransitionPoster() {
   const [selectedImg, setSelectedImg] = useState<string | null>(null);
   const [link, setLink] = useState<string>("null");
   const [position, setPosition] = useState<PositionModel>({
      top: 0,
      left: 0,
      height: 0,
   });

   const router = useRouter();
   const setTransitionValues = (
      posterPath: string,
      link: string,
      element: HTMLDivElement,
      setIsSelected: React.Dispatch<React.SetStateAction<boolean>>
   ) => {
      if (window.innerWidth < windowExtraLarge) {
         router.push(link);
         return;
      }
      setIsSelected(true);
      const img = `https://image.tmdb.org/t/p/w780${posterPath}`;
      setSelectedImg(img);
      setLink(link);
      const { offsetLeft, clientHeight } = element;
      const { y } = element.getBoundingClientRect();
      setPosition({
         top: y,
         left: offsetLeft,
         height: clientHeight,
      });
   };

   return {
      selectedImg,
      position,
      link,
      setTransitionValues,
   };
}
