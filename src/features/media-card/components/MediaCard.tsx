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
   direction?: "prev" | "next" | "default";
};

export default function MediaCard({
   mediaType,
   media,
   id,
   currentMedia,
   direction,
}: Props) {
   const router = useRouter();
   const [isLoading, setIsLoading] = useState(false);

   const onLearnMore = async () => {
      setIsLoading(true);
      router.push(`/${mediaType}/${media.id}`, undefined, {
         scroll: false,
      });
   };

   return (
      <CardContainer layoutId={id} direction={direction} isLoading={isLoading}>
         <Front media={media} />
         <Back
            id={id}
            media={media}
            mediaType={mediaType}
            onLearnMore={onLearnMore}
            isLoading={isLoading}
            currentMedia={currentMedia}
         />
      </CardContainer>
   );
}
