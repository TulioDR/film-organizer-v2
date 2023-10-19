import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import DiscoverForm from "./DiscoverForm";
import ToggleFilterButton from "./ToggleFilterButton";

type Props = {};

export default function DiscoverFilter({}: Props) {
   const [isOpen, setIsOpen] = useState<boolean>(true);
   const toggle = () => setIsOpen((prev) => !prev);
   return (
      <>
         <ToggleFilterButton onClick={toggle} isOpen={isOpen} />
         <AnimatePresence>
            {isOpen && <DiscoverForm toggle={toggle} />}
         </AnimatePresence>
      </>
   );
}
