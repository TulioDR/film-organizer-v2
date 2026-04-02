import React from "react";
import SpinAnimation from "./SpinAnimation";
import ButtonText from "./ButtonText";

type Props = {};

export default function LearnButton({}: Props) {
   return (
      <button
         className={`w-full relative aspect-square rounded-full border-2 border-black dark:border-white 
            text-black dark:text-white 
            hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
            active:bg-black active:text-white active:hover:bg-white active:hover:text-black
            flex items-center justify-center`}
      >
         <ButtonText />
         <SpinAnimation />
      </button>
   );
}
