import LoadingSpinner from "@/common/components/LoadingSpinner";
import React from "react";

type Props = {};

export default function SBMobileLoading({}: Props) {
   return (
      <div className="w-full flex items-center justify-center h-16">
         <div className="w-12">
            <LoadingSpinner />
         </div>
      </div>
   );
}
