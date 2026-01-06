import useMediaFilterContext from "@/features/pages/media-type/context/MediaFilterContext";
import React from "react";

type Props = {};

export default function DesktopTemplates({}: Props) {
   const { isTemplatesOpen, toggleTemplates } = useMediaFilterContext();

   if (!isTemplatesOpen) return <></>;
   return (
      <div className="absolute top-0 left-0 w-full h-full z-20 bg-black/70 p-8">
         <div
            onClick={toggleTemplates}
            className="w-full h-full bg-primary-light dark:bg-primary-dark border-4 dark:border-primary-light border-primary-dark"
         ></div>
      </div>
   );
}
