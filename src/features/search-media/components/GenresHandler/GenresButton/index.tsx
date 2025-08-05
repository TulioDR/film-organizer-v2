import GlassContainer from "@/common/components/GlassContainer";
import React from "react";

type Props = {
   onClick: () => void;
};

export default function GenresButton({ onClick }: Props) {
   return (
      <GlassContainer
         el="button"
         onClick={onClick}
         className="absolute top-1/2 -translate-y-1/2 w-16 aspect-square hover:bg-white lg:right-4 xl:right-8 z-10"
      >
         Genre
      </GlassContainer>
   );
}
