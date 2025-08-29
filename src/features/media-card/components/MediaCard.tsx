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
};

export default function MediaCard({
   mediaType,
   media,
   id,
   currentMedia,
}: Props) {
   const [height, setHeight] = useState<number | null>(null);
   const [scale, setScale] = useState<number | null>(null);
   const router = useRouter();
   const onLearnMore = async () => {
      const minHeight = document.getElementById(id)!.clientHeight;
      const containerID = `TRANSITION_CARD_CONTAINER`;
      const maxHeight = document.getElementById(containerID)!.clientHeight;
      const scale = maxHeight / minHeight;
      setHeight(minHeight);
      setScale(scale);

      // router.push(`/${mediaType}/${media.id}`, undefined, {
      //    scroll: false,
      // });
   };

   return (
      <CardContainer id={id} height={height} scale={scale}>
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
