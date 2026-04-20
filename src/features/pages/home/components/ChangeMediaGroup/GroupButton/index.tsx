import { motion } from "framer-motion";
import useHomeContext from "../../../context/HomeContext";
import SelectedAnimation from "./SelectedAnimation";

type Props = {
   text: string;
   isSelected: boolean;
   onClick: () => void;
};

export default function GroupButton({ text, isSelected, onClick }: Props) {
   const { isAnimating } = useHomeContext();

   return (
      <div className="relative h-full w-48">
         {isSelected && <SelectedAnimation />}
         <motion.button
            onClick={isAnimating ? undefined : onClick}
            className={`relative z-10 h-full w-full rounded-full group flex items-center pl-4 border-2 border-black dark:border-white
               ${
                  isSelected
                     ? "bg-black dark:bg-white"
                     : "hover:bg-black active:bg-black dark:hover:bg-white dark:active:bg-white"
               }   
            `}
         >
            <div
               className={`text-sm uppercase font-medium 
                  ${
                     isSelected
                        ? "text-white dark:text-black"
                        : "text-black dark:text-white group-hover:text-white dark:group-hover:text-black group-active:text-white dark:group-active:text-black"
                  }
            `}
            >
               {text}
            </div>
         </motion.button>
      </div>
   );
}
