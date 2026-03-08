import { useInView } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";
import Container from "./Container";
import FixedUIPortal from "@/features/layout/main-layout/components/FixedUIPortal";
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
            <>
               <div className="fixed right-8 bottom-1/2 translate-y-1/2 w-16 aspect-square">
                  <Button mediaType={mediaType} media={media} />
               </div>
               {/* <FixedUIPortal>
               <div className="absolute bottom-0 right-0 lg:bottom-1/2 lg:translate-y-1/2 w-16 aspect-square">
                  <Button mediaType={mediaType} media={media} />
               </div>
            </FixedUIPortal> */}
            </>
         )}
      </Container>
   );
}
