import React from "react";

type Props = {
   icon: string | React.ReactNode;
   onClick: () => void;
};

export default function TopNavButton({ icon, onClick }: Props) {
   return (
      <button
         onClick={onClick}
         className="h-full w-10 flex items-center justify-center"
      >
         <span className="material-symbols-outlined">{icon}</span>
      </button>
   );
}
