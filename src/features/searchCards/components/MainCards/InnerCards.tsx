import React from "react";
import MainCardsContainer from "./MainCardsContainer";
import useSearchCards from "../../hooks/useSearchCards";
import MainCard from "./MainCard";

type Props = {
   mediaType: "tv" | "movie";
   apiUrl: string;
};

export default function InnerCards({ mediaType, apiUrl }: Props) {
   const { media, totalPages } = useSearchCards(apiUrl);
   return (
      <MainCardsContainer>
         {media!.map((media) => (
            <MainCard key={media.id} media={media} mediaType={mediaType} />
         ))}
      </MainCardsContainer>
   );
}
