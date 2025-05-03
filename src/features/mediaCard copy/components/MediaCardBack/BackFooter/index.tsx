import React from "react";
import BackButton from "./BackButton";
import LearnMore from "./LearnMore";

type Props = {
   closeCard: () => void;
   mediaType: "tv" | "movie";
   mediaId: number;
   onLearnMoreClick: () => void;
};

export default function BackFooter({
   closeCard,
   mediaType,
   mediaId,
   onLearnMoreClick,
}: Props) {
   return (
      <div className="flex gap-3 w-full">
         <BackButton onClick={closeCard} />
         <LearnMore
            mediaType={mediaType}
            mediaId={mediaId}
            onClick={onLearnMoreClick}
         />
      </div>
   );
}
