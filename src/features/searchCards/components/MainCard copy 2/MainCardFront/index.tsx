import { motion } from "framer-motion";

type Props = {
   title: string;
};

export default function MainCardFront({ title }: Props) {
   const titleVariant = {
      hover: { x: 0 },
   };
   return (
      <motion.div
         variants={titleVariant}
         initial={{ x: "100%" }}
         // animate={{ x: 0 }}
         exit={{ x: "100%" }}
         transition={{ duration: 0.5 }}
         className="absolute top-0 left-0 grid place-content-center w-full h-full p-5"
      >
         <span className="text-lg uppercase font-title text-white text-center tracking-wider">
            {title}
         </span>
      </motion.div>
   );
}
