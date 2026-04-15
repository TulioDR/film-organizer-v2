import { motion } from "framer-motion";

type Props = {
   text: string;
   accent?: true;
   className?: string;
};

export default function LittlePill({ text, accent, className = "" }: Props) {
   return (
      <motion.div
         layout
         className={`px-4 rounded-full z-10 ${className} ${accent ? "bg-accent text-white" : "bg-black text-white dark:bg-white dark:text-black"}`}
      >
         <span className="tracking-wide text-xs uppercase font-black">
            {text}
         </span>
      </motion.div>
   );
}
