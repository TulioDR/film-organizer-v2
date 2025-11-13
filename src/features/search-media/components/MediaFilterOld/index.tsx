import React, { useState } from "react";
import { createPortal } from "react-dom";
import FilterOpenButton from "./FilterOpenButton";
import ModalBackground from "./ModalBackground";
import FilterModal from "./FilterModal";

type Props = {};

export default function MediaFilterOld({}: Props) {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggle = () => setIsOpen((prev) => !prev);

   const DURATION = 0.3;

   const [isMounted, setIsMounted] = useState(false);
   React.useEffect(() => setIsMounted(true), []);

   if (!isMounted) return <></>;
   return (
      <>
         {isOpen ? (
            createPortal(
               <>
                  <ModalBackground DURATION={DURATION} toggle={toggle} />
                  <FilterModal DURATION={DURATION} />
               </>,
               document.body
            )
         ) : (
            <FilterOpenButton onClick={toggle} DURATION={DURATION} />
         )}
      </>
   );
}
