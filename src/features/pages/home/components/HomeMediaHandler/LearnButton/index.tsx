import React from "react";
import SpinAnimation from "./SpinAnimation";
import ButtonText from "./ButtonText";
import useHomeContext from "../../../context/HomeContext";

type Props = {};

export default function LearnButton({}: Props) {
   const { isAutoPlay, scope, startAutoPlay, stopAutoPlay } = useHomeContext();

   const handleClick = () => {
      if (isAutoPlay) stopAutoPlay();
      else startAutoPlay();
   };

   return (
      <button className="w-full relative aspect-square rounded-full border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black flex items-center justify-center">
         <ButtonText />
         <SpinAnimation scope={scope} />
      </button>
   );
}
