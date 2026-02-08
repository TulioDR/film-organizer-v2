import React from "react";

type Props = {};

export default function OverviewButton({}: Props) {
   return (
      <button className="h-full px-4 bg-background-light dark:bg-background-accent-dark rounded flex items-center justify-center border border-border-light dark:border-border-dark">
         <span className="text-sm">Overview</span>
      </button>
   );
}
