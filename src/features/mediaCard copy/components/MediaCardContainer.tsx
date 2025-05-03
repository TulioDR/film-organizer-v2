import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   onFocus: () => void;
   onBlur: () => void;
   id: string;
   isOpen: boolean;
   onHoverStart: () => void;
   onHoverEnd: () => void;
   isCardTransparent: boolean;
};

export default function MediaCardContainer({
   children,
   onFocus,
   onBlur,
   id,
   isOpen,
   onHoverStart,
   onHoverEnd,
   isCardTransparent,
}: Props) {
   return (
      <motion.article
         onHoverStart={onHoverStart}
         onHoverEnd={onHoverEnd}
         tabIndex={0}
         onFocus={onFocus}
         onBlur={onBlur}
         className={`duration-200 ${isCardTransparent ? "opacity-10" : ""}`}
      >
         <div
            id={id}
            className={`relative duration-500 [transform-style:preserve-3d] ${
               isOpen ? "[transform:rotateY(-180deg)] " : ""
            }`}
         >
            {children}
         </div>
      </motion.article>
   );
}
