import { AnimationControls, motion } from "framer-motion";

type Props = {
   value: string;
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   onFocus: () => void;
   onBlur: () => void;
   placeholder: string;
   showResults: boolean;
   inputControls: AnimationControls;
   innerInputAnimation: AnimationControls;
};

export default function SearchInput({
   value,
   onChange,
   onFocus,
   onBlur,
   placeholder,
   showResults,
   inputControls,
   innerInputAnimation,
}: Props) {
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={inputControls}
         exit={{ width: 0, transition: { duration: 0.3, delay: 0.2 } }}
         className={`bg-secondary-light dark:bg-secondary-dark rounded-t-lg overflow-hidden ${
            showResults ? "" : "rounded-b-lg"
         }`}
      >
         <motion.div
            initial={{ opacity: 0 }}
            animate={innerInputAnimation}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="h-full flex-1 flex items-center gap-4 pl-14 pr-4"
         >
            <input
               value={value}
               onChange={onChange}
               onFocus={onFocus}
               onBlur={onBlur}
               type="text"
               className="text-xs sm:text-sm md:text-base w-full outline-none bg-transparent text-light-1 dark:text-dark-1 placeholder:text-light-2 dark:placeholder:text-dark-2"
               placeholder={placeholder}
            />
            <span className="material-symbols-outlined !text-text-2 !text-light-2 dark:!text-dark-2">
               search
            </span>
         </motion.div>
      </motion.div>
   );
}
