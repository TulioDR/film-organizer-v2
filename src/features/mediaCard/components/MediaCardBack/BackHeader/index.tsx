import Poster from "@/components/Poster";
import React from "react";
import BackButton from "./BackButton";

type Props = {
   alt: string;
   backdrop: string;
   closeCard: () => void;
};

export default function BackHeader({ alt, backdrop, closeCard }: Props) {
   return (
      <div className="relative">
         <BackButton onClick={closeCard} />
         <Poster alt={alt} posterPath={backdrop} size="lg" backPoster />
      </div>
   );
}
