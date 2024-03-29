import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import StoreModel from "@/models/StoreModel";

type Props = {
   showcase: "movies" | "series" | "upcoming";
   currentShowcase: "movies" | "series" | "upcoming";
   children: React.ReactNode;
   onClick: () => void;
};

export default function ChangeShowcaseButton({
   showcase,
   currentShowcase,
   children,
   onClick,
}: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <button className="relative">
         <span
            onClick={onClick}
            className={`cursor-pointer duration-300 text-xl 2xl:text-2xl ${
               showcase === currentShowcase ? "text-dark-1" : "text-dark-2"
            }`}
         >
            {children}
         </span>
         <AnimatePresence>
            {showcase === currentShowcase && (
               <div className="absolute h-[2px] w-full flex justify-center">
                  <motion.div
                     initial={{ width: 0 }}
                     animate={{ width: "100%" }}
                     exit={{ width: 0 }}
                     transition={{ duration: 0.3 }}
                     style={{ backgroundColor: themeColor }}
                     className="h-full top-full"
                  ></motion.div>
               </div>
            )}
         </AnimatePresence>
      </button>
   );
}
