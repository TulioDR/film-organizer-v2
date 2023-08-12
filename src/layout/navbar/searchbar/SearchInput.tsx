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
      <div className="w-full sm:w-80 h-9">
         <motion.div
            variants={inputAnimations}
            className="text-sm sm:text-base bg-secondary rounded-lg overflow-hidden shadow-lg"
         >
            <div className="flex items-center gap-5 pl-7 pr-5 w-80 h-9 flex-shrink-0">
               <input
                  value={value}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  type="text"
                  className="w-full outline-none bg-transparent text-text-1 placeholder:text-text-2"
                  placeholder={placeholder}
               />
               <span className="material-icons !text-text-2">search</span>
            </div>
         </motion.div>
      </div>
   );
}
