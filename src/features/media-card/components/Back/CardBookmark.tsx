import BookmarkButton from "@/features/bookmark/components/BookmarkButton";
import React from "react";

type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function CardBookmark({ media, mediaType }: Props) {
   return <BookmarkButton media={media} type={mediaType} />;
}
