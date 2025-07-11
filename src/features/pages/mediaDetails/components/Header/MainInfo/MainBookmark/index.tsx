import { useInView } from "framer-motion";
import { useRef } from "react";
import Button from "./Button";
import Portal from "./Portal";
import Container from "./Container";
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
            <Portal>
               <Button mediaType={mediaType} media={media} />
            </Portal>
         )}
      </Container>
   );
}
