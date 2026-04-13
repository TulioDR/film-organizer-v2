type Props = {
   children: React.ReactNode;
   title: string;
   row?: true;
   dangerZone?: true;
   expand?: true;
};

export default function AccountCard({
   children,
   title,
   row,
   dangerZone,
   expand,
}: Props) {
   return (
      <div
         className={`p-4 rounded-lg ${row ? "row-span-2" : ""} bg-white dark:bg-black border border-border-light dark:border-border-dark ${expand ? "col-span-2" : ""}`}
      >
         <div className="font-medium xl:text-lg tracking-wider text-black dark:text-white mb-2">
            {title}
         </div>
         <div className="text-black/60 dark:text-white/60 text-xs sm:text-sm xl:text-base px-4">
            {children}
         </div>
      </div>
   );
}
