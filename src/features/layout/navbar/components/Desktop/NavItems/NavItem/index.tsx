import { NavigationModel } from "@/features/layout/navbar/models/NavigationModels";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
   item: NavigationModel;
   onMouseEnter: () => void;
   isSelected: boolean;
};

export default function NavItem({ item, onMouseEnter, isSelected }: Props) {
   return (
      <motion.div
         onMouseEnter={onMouseEnter}
         className="h-full flex items-center justify-center relative"
      >
         <Link
            href={item.link}
            className={`w-full h-full flex items-center justify-center text-black dark:text-white`}
         >
            <span className="uppercase tracking-widest text-sm">
               {item.text}
            </span>
         </Link>
         {isSelected && (
            <motion.div
               layoutId="active-nav-item"
               className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
               transition={{ duration: 0.6, type: "spring" }}
            />
         )}
      </motion.div>
   );
}
