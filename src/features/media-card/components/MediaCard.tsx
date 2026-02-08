import { useState } from "react";
import Front from "./Front";
import Back from "./Back";
import { Media } from "@/common/models/Media";
import CardContainer from "./CardContainer";
import { useRouter } from "next/router";

type Props = {
   mediaType: "tv" | "movie";
   media: Media;
   id: string;
   currentMedia?: Media;
   direction: "prev" | "next" | "default";
};

export default function MediaCard({
   mediaType,
   media,
   id,
   currentMedia,
   direction,
}: Props) {
   const [showTransition, setShowTransition] = useState(false);
   const router = useRouter();
   const onLearnMore = async () => {
      setShowTransition(true);
      router.push(`/${mediaType}/${media.id}`, undefined, {
         scroll: false,
      });
   };

   return (
      <CardContainer
         id={id}
         direction={direction}
         showTransition={showTransition}
      >
         <Front media={media} />
         <Back
            media={media}
            mediaType={mediaType}
            onLearnMore={onLearnMore}
            currentMedia={currentMedia}
         />
      </CardContainer>
   );
}
