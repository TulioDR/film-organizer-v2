import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   onFocus: () => void;
   onBlur: () => void;
   id: string;
   isOpen: boolean;
};

export default function MainCardContainer({
   children,
   onFocus,
   onBlur,
   id,
   isOpen,
}: Props) {
   const cards = {
      initial: { opacity: 0, scale: 0.5 },
      animate: {
         opacity: 1,
         scale: 1,
         transition: { duration: 0.8 },
      },
      exit: {},
   };
   return (
      <motion.article
         tabIndex={0}
         onFocus={onFocus}
         onBlur={onBlur}
         layout
         variants={cards}
         // whileHover="hover"
         className="origin-bottom group"
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
