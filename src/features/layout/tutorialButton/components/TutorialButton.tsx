import GlassContainer from "@/components/GlassContainer";
import React from "react";

type Props = {};

export default function TutorialButton({}: Props) {
   return (
      <GlassContainer className="fixed h-16 bottom-8 left-8 aspect-square flex items-center justify-center cursor-pointer hover:bg-white hover:text-black">
         <span className="material-symbols-outlined">question_mark</span>
      </GlassContainer>
   );
}
