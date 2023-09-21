import { motion } from "framer-motion";
import GenreName from "./GenreName";

type Props = {
   name: string;
};

export default function GenreCardClosed({ name }: Props) {
   const titleVariant = {
      hover: { x: "100%" },
   };
   const backgroundVariant = {
      hover: { opacity: 0 },
   };
   return (
      <motion.div whileHover="hover" className="relative w-full h-full">
         <motion.div
            variants={backgroundVariant}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full bg-black"
         />
         <motion.div
            variants={titleVariant}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 grid place-content-center w-full h-full"
         >
            <GenreName vertical>{name}</GenreName>
         </motion.div>
      </motion.div>
   );
}
