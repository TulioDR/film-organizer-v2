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
         className={`p-5 shadow-xl rounded-lg ${row ? "row-span-2" : ""} ${
            dangerZone
               ? "bg-red-400 dark:bg-red-600"
               : "bg-secondary-light dark:bg-secondary-dark"
         } ${expand ? "col-span-2" : ""}`}
      >
         <div className="font-medium tracking-wider text-light-1 dark:text-dark-1 mb-5">
            {title}
         </div>
         <div className="text-light-2 dark:text-dark-2">{children}</div>
      </div>
   );
}
