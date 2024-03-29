import { MediaModel } from "@/models/MediaModel";
import { bookmarkActions } from "@/store/slices/bookmark-slice";
import { useUser } from "@clerk/nextjs";

import { useDispatch } from "react-redux";

export default function useBookmarkClick(
   media: MediaModel,
   mediaType: "tv" | "movie"
) {
   const { user } = useUser();
   const dispatch = useDispatch();

   const handleBookmarkClick = () => {
      if (user) {
         dispatch(bookmarkActions.openSaveMediaModal({ media, mediaType }));
      } else {
         dispatch(bookmarkActions.openLoginAdviceModal());
      }
   };

   return { handleBookmarkClick };
}
