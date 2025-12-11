import GlassContainer from "@/common/components/GlassContainer";
import React from "react";

type Props = {
   onClick: () => void;
   isOpen: boolean;
};

export default function GenresButton({ onClick, isOpen }: Props) {
   return (
      <div className="absolute top-1/2 -translate-y-1/2 lg:right-4 xl:right-8 z-10">
         <GlassContainer
            el="button"
            onClick={onClick}
            className={`w-16 aspect-square hover:bg-white hover:text-black ${
               isOpen
                  ? "text-black bg-gray-200 rounded-l-none border-l-0"
                  : "text-white"
            }`}
         >
            Genre
         </GlassContainer>
      </div>
   );
}
