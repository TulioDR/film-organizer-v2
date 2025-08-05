import { useRouter } from "next/router";
import TransitionPosterModel from "../models/TransitionPosterModel";

export default function useLearnMore(
   cardID: string,
   mediaType: string,
   media: any,
   setFixedValues: React.Dispatch<
      React.SetStateAction<TransitionPosterModel | null>
   >
) {
   const router = useRouter();
   const onLearnMore = async () => {
      const minHeight = document.getElementById(cardID)!.clientHeight;
      const containerID = `SELECTED-MEDIA-CONTAINER`;
      const maxHeight = document.getElementById(containerID)!.clientHeight;
      const scale = maxHeight / minHeight;

      setFixedValues({
         minHeight: minHeight,
         scale: scale,
         selectedMedia: media,
      });

      const link = `/${mediaType}/${media.id}`;
      router.push(link, undefined, { scroll: false });
   };

   return { onLearnMore };
}
