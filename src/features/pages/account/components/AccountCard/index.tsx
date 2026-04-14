import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   children: React.ReactNode;
   title: string;
   className?: string;
};

export default function AccountCard({
   children,
   title,
   className = "",
}: Props) {
   return (
      <div
         style={{ borderRadius: STANDARD_RADIUS }}
         className={`w-full flex-1 p-4 bg-white dark:bg-black border border-border-light dark:border-border-dark flex flex-col gap-2
            ${className}
         `}
      >
         <div className="font-medium xl:text-lg tracking-wider text-black dark:text-white">
            {title}
         </div>
         <div className="text-black/60 dark:text-white/60 text-xs sm:text-sm xl:text-base px-4 pb-4 flex flex-col gap-4 justify-between w-full flex-1">
            {children}
         </div>
      </div>
   );
}
