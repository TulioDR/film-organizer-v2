import { motion } from "framer-motion";
import Link from "next/link";
import GenreName from "./GenreName";

type Props = {
   name: string;
   href: string;
};

export default function GenreCardOpen({ name, href }: Props) {
   return (
      <div className="relative w-full">
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-transparent"
         />
         <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className=" w-full flex justify-between items-center px-5 pb-5 pt-20"
         >
            <GenreName>{name}</GenreName>
            <Link
               href={href}
               scroll={false}
               onMouseDown={(e) => e.preventDefault()}
               className="border border-white py-1 px-5 font-medium tracking-wider hover:bg-white hover:text-black uppercase rounded-full"
            >
               Open
            </Link>
         </motion.div>
      </div>
   );
}
