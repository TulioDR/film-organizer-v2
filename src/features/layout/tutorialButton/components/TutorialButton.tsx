import GlassContainer from "@/components/GlassContainer";
import React from "react";

type Props = {};

export default function TutorialButton({}: Props) {
   return (
      <GlassContainer className="absolute h-16 bottom-0 left-0 aspect-square flex items-center justify-center cursor-pointer hover:bg-white hover:text-black">
         <span className="material-symbols-outlined">question_mark</span>
      </GlassContainer>
   );
}
