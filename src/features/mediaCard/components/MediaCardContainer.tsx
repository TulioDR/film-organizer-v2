import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   onFocus: () => void;
   onBlur: () => void;
   id: string;
   isOpen: boolean;
   savedMedia?: true;
};

export default function MediaCardContainer({
   children,
   onFocus,
   onBlur,
   id,
   isOpen,
   savedMedia,
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

   if (savedMedia)
      return (
         <motion.article
            layout
            tabIndex={0}
            onFocus={onFocus}
            onBlur={onBlur}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
   return (
      <motion.article
         layout
         tabIndex={0}
         onFocus={onFocus}
         onBlur={onBlur}
         variants={cards}
         className="origin-bottom"
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
