import { useInView } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";
import Container from "./Container";
import { createPortal } from "react-dom";
type Props = {
   media: any;
   mediaType: "movie" | "tv";
};

export default function MainBookmark({ mediaType, media }: Props) {
   const buttonRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(buttonRef, {
      initial: true,
      amount: "all",
      margin: "-128px 0px 0px 0px",
   });

   return (
      <Container buttonRef={buttonRef}>
         {isInView ? (
            <Button mediaType={mediaType} media={media} />
         ) : (
            createPortal(
               <div className="fixed right-4 lg:right-8 top-0 flex items-center h-[100svh] w-16">
                  <div className="w-full aspect-square">
                     <Button mediaType={mediaType} media={media} />
                  </div>
               </div>,
               document.body,
            )
         )}
      </Container>
   );
}
