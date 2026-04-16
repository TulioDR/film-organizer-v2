import { useEffect, useState } from "react";
import BookmarkButton from "./BookmarkButton";
import { MediaDetailsModel } from "@/features/pages/media-id/models/MediaDetailsModel";
import { Media } from "@/common/models/Media";
import useIsMediaSaved from "../hooks/useIsMediaSaved";
import LoginAdviceModal from "@/features/modals/user-modals/login-advice-modal/components/LoginAdviceModal";
import { useUser } from "@clerk/nextjs";
import SaveMediaModal from "@/features/modals/media-modals/save-media-modal/components/SaveMediaModal";

type Props = {
   media: Media | MediaDetailsModel;
   mediaType: "tv" | "movie";
   setIsBookmarkOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Bookmark({
   media,
   mediaType,
   setIsBookmarkOpen,
}: Props) {
   const [isLoginAdviceOpen, setIsLoginAdviceOpen] = useState(false);
   const [isSaveMediaOpen, setIsSaveMediaOpen] = useState(false);

   useEffect(() => {
      if (!setIsBookmarkOpen) return;
      setIsBookmarkOpen(isSaveMediaOpen);
   }, [isSaveMediaOpen]);

   const { user } = useUser();

   const handleBookmarkClick = () => {
      if (user) {
         setIsSaveMediaOpen(true);
      } else {
         setIsLoginAdviceOpen(true);
      }
   };

   const { isMediaSaved, isLoading } = useIsMediaSaved(
      media.id,
      mediaType,
      isSaveMediaOpen,
   );

   return (
      <>
         <BookmarkButton
            onClick={handleBookmarkClick}
            isLoading={isLoading}
            isMediaSaved={isMediaSaved}
         />
         <LoginAdviceModal
            isOpen={isLoginAdviceOpen}
            closeModal={() => setIsLoginAdviceOpen(false)}
            message="You need to be Logged in first to save Movies and TV Shows to your Lists"
         />
         <SaveMediaModal
            isOpen={isSaveMediaOpen}
            closeModal={() => setIsSaveMediaOpen(false)}
            mediaToSave={{ media, mediaType }}
         />
      </>
   );
}
