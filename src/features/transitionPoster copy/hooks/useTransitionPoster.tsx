import { useRouter } from "next/router";
import { useState } from "react";
import { windowExtraLarge } from "@/data/constants/windowWidth";
import { PositionModel } from "@/models/TransitionPosterModels";

export default function useTransitionPoster() {
   const [selectedImg, setSelectedImg] = useState<string | null>(null);
   const [link, setLink] = useState<string>("null");
   const [position, setPosition] = useState<PositionModel>({
      top: 0,
      left: 0,
      height: 0,
   });
   const [showSpinner, setShowSpinner] = useState<boolean>(false);

   const router = useRouter();
   const setTransitionValues = (
      posterPath: string,
      link: string,
      element: HTMLElement
   ) => {
      if (window.innerWidth < windowExtraLarge) {
         router.push(link);
         return;
      }
      const img = `https://image.tmdb.org/t/p/w780${posterPath}`;
      setSelectedImg(img);
      setLink(link);
      const { x, y, height } = element.getBoundingClientRect();
      setPosition({
         top: y,
         left: x,
         height: height,
      });
   };

   const closePoster = () => {
      setSelectedImg(null);
   };

   const onPosterAnimationComplete = () => {
      router.push(link);
      setShowSpinner(true);
   };

   const [isPageHidden, setIsPageHidden] = useState<boolean>(false);
   const hidePage = () => {
      setIsPageHidden(true);
   };

   return {
      selectedImg,
      position,
      link,
      setTransitionValues,
      closePoster,
      showSpinner,
      onPosterAnimationComplete,
      isPageHidden,
      hidePage,
   };
}
