import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Action, State } from "@/features/layout/navbar/models/ReducerModels";
import SEARCH_ANIMATION_DURATION from "@/features/layout/navbar/constants/SEARCH_ANIMATION_DURATION";

type Props = {
   dispatch: React.Dispatch<Action>;
   state: State;
};

export default function SearchInput({ dispatch, state }: Props) {
   const { currentIndex, inputValue } = state;
   const ref = useRef<HTMLInputElement>(null);
   useEffect(() => {
      if (currentIndex === null) {
         ref.current?.focus();
      }
   }, [currentIndex]);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: "SET_INPUT_VALUE", payload: e.currentTarget.value });
   };

   const deleteText = () => {
      dispatch({ type: "SET_INPUT_VALUE", payload: "" });
      ref.current?.focus();
   };
   const showDeleteButton = inputValue.length > 0;
   return (
      <div className="h-full flex-1">
         <motion.div
            layoutId="search-border-wrapper"
            transition={{ duration: SEARCH_ANIMATION_DURATION }}
            style={{ borderRadius: 16 }}
            className={`h-full w-full p-px overflow-hidden ${
               currentIndex === null
                  ? "bg-black dark:bg-white"
                  : "bg-border-light dark:bg-border-dark"
            }`}
         >
            <motion.div
               layoutId="search-background-inner"
               transition={{ duration: SEARCH_ANIMATION_DURATION }}
               style={{ borderRadius: 15 }}
               className="h-full w-full flex items-center bg-white dark:bg-black"
            >
               <div className="h-full aspect-square flex items-center justify-center">
                  <motion.div
                     layoutId="nav-search-icon"
                     transition={{ duration: SEARCH_ANIMATION_DURATION }}
                     className="h-10 aspect-square flex items-center justify-center"
                  >
                     <span className="material-symbols-outlined">search</span>
                  </motion.div>
               </div>
               <input
                  ref={ref}
                  value={inputValue}
                  onChange={handleInputChange}
                  className="flex-1 h-full bg-transparent outline-none"
               />
               {showDeleteButton && (
                  <button
                     onClick={deleteText}
                     type="button"
                     className={`h-full aspect-square flex items-center justify-center 
                     hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black
                     active:bg-black active:text-white dark:active:bg-white dark:active:text-black
                  `}
                  >
                     <span className="material-symbols-outlined">close</span>
                  </button>
               )}
            </motion.div>
         </motion.div>
      </div>
   );
}
