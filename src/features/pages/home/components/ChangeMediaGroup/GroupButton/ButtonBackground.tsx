import React from "react";
import Poster from "@/common/components/Poster";

type Props = {
   src: string;
};

export default function ButtonBackground({ src }: Props) {
   return (
      <div className="w-full h-full overflow-hidden absolute top-0 left-0">
         <Poster alt={src} posterPath={src} />
      </div>
   );
}
