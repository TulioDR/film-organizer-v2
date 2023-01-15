import { motion } from "framer-motion";

type Props = {
   type: "movie" | "tv" | "all";
   selectedType: "movie" | "tv" | "all";
   name: string;
   setSelectedType: React.Dispatch<
      React.SetStateAction<"movie" | "tv" | "all">
   >;
};

export default function TypePill({
   type,
   selectedType,
   name,
   setSelectedType,
}: Props) {
   return (
      <motion.button
         onClick={() => setSelectedType(type)}
         className={`rounded-full py-1 px-4 shadow-lg  text-sm ${
            type === selectedType
               ? "dark:bg-light-bg-secondary bg-dark-bg-secondary dark:text-light-text-hard text-dark-text-hard"
               : "bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text-hard dark:text-dark-text-hard"
         }`}
      >
         {name}
      </motion.button>
   );
}
