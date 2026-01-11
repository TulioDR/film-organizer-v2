import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import { AnimatePresence } from "framer-motion";
import React from "react";
import DesktopPresetsContainer from "./DesktopPresetsContainer";
import FILTER_PRESETS from "@/features/pages/media-type/constants/FILTER PRESETS";

type Props = {};

export default function DesktopPresets({}: Props) {
   const { isTemplatesOpen, toggleTemplates } = useMediaFilterContext();

   return (
      <AnimatePresence>
         {isTemplatesOpen && (
            <DesktopPresetsContainer>
               <div className="w-full h-full relative pointer-events-auto">
                  <div className="w-full h-full flex flex-col rounded-md bg-primary-light dark:bg-primary-dark border border-border-light dark:border-border-dark relative">
                     <div className="h-16 w-full flex items-center pl-4">
                        <h1 className="text-3xl">Presets</h1>
                     </div>
                     <div className="flex-1 w-full">
                        <div className="w-full grid grid-cols-3 p-8">
                           {Object.entries(FILTER_PRESETS).map(
                              ([_key, value]) => (
                                 <div className="border group border-transparent hover:border-border-light dark:hover:border-border-dark rounded-md p-4 flex gap-2 hover:bg-background-accent-light dark:hover:bg-background-accent-dark cursor-pointer">
                                    <div className="h-16 aspect-square rounded-md border bg-background-accent-light dark:bg-background-accent-dark group-hover:bg-accent border-border-light dark:border-border-dark flex items-center justify-center">
                                       <span className="material-symbols-outlined">
                                          {value.icon}
                                       </span>
                                    </div>
                                    <div className="flex-1 h-full flex justify-center flex-col gap-1">
                                       <span className="text-sm">
                                          {value.label}
                                       </span>
                                       <div className="flex gap-1">
                                          {Object.values(value.values).map(
                                             (item) => (
                                                <span className="text-xs bg-primary-light dark:bg-primary-dark text-black dark:text-white px-3 py-1 rounded border border-border-light dark:border-border-dark">
                                                   {item.label}
                                                </span>
                                             )
                                          )}
                                       </div>
                                    </div>
                                 </div>
                              )
                           )}
                        </div>
                     </div>
                  </div>

                  <button
                     onClick={toggleTemplates}
                     className="absolute top-0 right-0 h-16 aspect-square border rounded-tr-md border-border-light dark:border-border-dark hover:border-primary-dark dark:hover:border-primary-light flex items-center justify-center"
                  >
                     <span className="material-symbols-outlined">close</span>
                  </button>
               </div>
            </DesktopPresetsContainer>
         )}
      </AnimatePresence>
   );
}
