import Bookmark from "@/features/bookmark/components/Bookmark";
import React from "react";

type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function CardBookmark({ media, mediaType }: Props) {
   return (
      <div className="bg-accent h-full aspect-square rounded">
         <Bookmark media={media} type={mediaType} />
      </div>
   );
}
