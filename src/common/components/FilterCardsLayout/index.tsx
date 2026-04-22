import { useCustomLenisInstance } from "@/common/hooks/useCustomLenisInstance";
import MainFilter from "@/features/mainFilter/components/MainFilter";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   title: string;
   compactFilter: React.ReactNode;
   expandedFilter?: React.ReactNode;
   children: React.ReactNode;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   innerKey?: string;
};

export default function FilterCardsLayout({
   title,
   compactFilter,
   expandedFilter,
   children,
   isOpen,
   setIsOpen,
   innerKey,
}: Props) {
   const { instance } = useCustomLenisInstance();
   const onExitComplete = () => {
      if (!instance) return;
      instance.scrollTo("top", { immediate: true });
   };

   return (
      <>
         <MainFilter
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={title}
            compactContent={compactFilter}
            expandedContent={expandedFilter}
         />
         <AnimatePresence mode="wait" propagate onExitComplete={onExitComplete}>
            <motion.div
               key={innerKey}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.2 }}
               className="overflow-hidden py-14 px-4 lg:px-32 xl:mt-20 xl:pt-64 xl:pb-24"
            >
               <div className={`w-full ${isOpen ? "xl:pl-[426px]" : ""}`}>
                  {children}
               </div>
            </motion.div>
         </AnimatePresence>
      </>
   );
}
