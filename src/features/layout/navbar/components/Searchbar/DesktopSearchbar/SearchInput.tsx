import { useState } from "react";
import { motion } from "framer-motion";
import { Action, State } from "../../../models/ReducerModels";

type Props = {
   dispatch: React.Dispatch<Action>;
   state: State;
};

export default function SearchInput({ dispatch, state }: Props) {
   const { inputValue, mediaType, currentIndex } = state;

   const [isFocused, setIsFocused] = useState(false);
   const handleFocus = () => {
      setIsFocused(true);
      dispatch({ type: "HANDLE_INPUT_FOCUS" });
   };
   const handleBlur = () => {
      setIsFocused(false);
      dispatch({ type: "HANDLE_INPUT_BLUR" });
   };

   const handleMouseEnter = () => {
      dispatch({ type: "SET_CURRENT_INDEX", payload: null });
   };

   const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      dispatch({ type: "SET_INPUT_VALUE", payload: e.currentTarget.value });
   };

   return (
      <div className="overflow-hidden flex-1 h-full p-3 flex-shrink-0 flex items-center relative hover:bg-black dark:hover:bg-white group">
         <div className="w-full h-full border-2 border-black dark:border-white/50 flex items-center rounded-md group-hover:border-white dark:group-hover:border-black">
            <div className="h-full aspect-square p-2 z-10">
               <div
                  className={`flex items-center justify-center h-full w-full rounded-md ${
                     currentIndex === null && isFocused
                        ? "bg-white text-black"
                        : "text-gray-400"
                  }`}
               >
                  <span className="material-symbols-outlined ">search</span>
               </div>
            </div>
            <motion.input
               value={inputValue}
               onChange={handleInputChange}
               onFocus={handleFocus}
               onBlur={handleBlur}
               onMouseEnter={handleMouseEnter}
               type="text"
               className="text-xs h-full sm:text-sm md:text-base flex-1 outline-none z-10 bg-transparent text-text-black  placeholder:text-gray-400"
               placeholder={`Search ${
                  mediaType === "movie" ? "Movies" : "Series"
               }`}
            />
         </div>
      </div>
   );
}
