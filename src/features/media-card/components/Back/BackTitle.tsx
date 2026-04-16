type Props = {
   title: string;
   year: string;
};

export default function BackTitle({ title, year }: Props) {
   return (
      <div className="w-full flex-1 overflow-hidden flex items-center justify-center">
         <div className="leading-tight font-semibold text-black dark:text-white ">
            <span className="uppercase text-base xl:text-2xl min-[1400px]:text-xl min-[1700px]:text-2xl leading-none">
               {title}
            </span>
            {year && (
               <span className="text-xs sm:text-sm">
                  {` (${new Date(year).getFullYear()})`}
               </span>
            )}
         </div>
      </div>
   );
}
