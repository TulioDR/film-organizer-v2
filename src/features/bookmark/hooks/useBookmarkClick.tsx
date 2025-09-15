import { Media } from "@/common/models/Media";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import { bookmarkActions } from "@/store/slices/bookmark-slice";
import { useUser } from "@clerk/nextjs";

export default function useBookmarkClick(
   media: Media,
   mediaType: "tv" | "movie"
) {
   const { user } = useUser();
   const dispatch = useAppDispatch();

   const handleBookmarkClick = () => {
      if (user) {
         dispatch(bookmarkActions.openSaveMediaModal({ media, mediaType }));
      } else {
         dispatch(bookmarkActions.openLoginAdviceModal());
      }
   };

   return { handleBookmarkClick };
}
