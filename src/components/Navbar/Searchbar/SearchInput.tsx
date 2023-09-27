import { motion } from "framer-motion";

type Props = {
   value: string;
   onChange: (e: React.FormEvent<HTMLInputElement>) => void;
   onFocus: () => void;
   onBlur: () => void;
   placeholder: string;
};

const inputAnimations = {
   initial: { width: 0, height: 0, opacity: 0 },
   animate: {
      width: "100%",
      height: "100%",
      opacity: 1,
      transition: { duration: 0.5, delay: 0.4 },
   },
   exit: {
      width: 0,
      height: 0,
      opacity: 0,
      transition: { duration: 0.5 },
   },
};

export default function SearchInput({
   value,
   onChange,
   onFocus,
   onBlur,
   placeholder,
}: Props) {
   return (
      <motion.div
         // variants={inputAnimations}
         className={`text-sm sm:text-base h-full flex-1 flex items-center gap-4 px-4`}
      >
         <input
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            type="text"
            className="w-full outline-none bg-transparent text-light-1 dark:text-dark-1 placeholder:text-light-2 dark:placeholder:text-dark-2"
            placeholder={placeholder}
         />
         <span className="material-symbols-outlined !text-text-2 !text-light-2 dark:!text-dark-2">
            search
         </span>
      </motion.div>
   );
}
