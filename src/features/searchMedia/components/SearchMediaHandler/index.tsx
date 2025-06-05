import MediaCard from "@/features/mediaCard/components/MediaCard";
import useSearchMedia from "../../hooks/useSearchMedia";

import SearchMediaCardsContainer from "./SearchMediaCardsContainer";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import { useEffect } from "react";
import { selectedMediaActions } from "@/store/slices/selected-media-slice";

type Props = {
   apiUrl: string;
   setTotalPages: React.Dispatch<React.SetStateAction<number>>;
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchMediaHandler({
   apiUrl,
   setTotalPages,
   setIsLoading,
}: Props) {
   const { media } = useSearchMedia(apiUrl, setTotalPages, setIsLoading);

   const router = useRouter();
   const mediaType = router.query.media_type as "tv" | "movie";

   // const [selectedMedia, setSelectedMedia] = useState<MediaModel | null>(null);

   const { selectedMedia } = useSelector(
      (state: StoreModel) => state.selectedMedia
   );

   const dispatch = useDispatch();

   useEffect(() => {
      if (media.length === 0) return;
      console.log(media.length);
      dispatch(selectedMediaActions.resetSelectedMedia());
   }, [media.length]);

   return (
      <SearchMediaCardsContainer>
         {media!.map((media) => (
            <MediaCard
               key={media.id + mediaType}
               media={media}
               mediaType={mediaType}
               isSelected={selectedMedia?.id === media.id}
            />
         ))}
      </SearchMediaCardsContainer>
   );
}
