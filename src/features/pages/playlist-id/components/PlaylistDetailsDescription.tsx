type Props = {
   description: string | undefined;
   isFilterOpen: boolean;
};

export default function PlaylistDetailsDescription({
   description,
   isFilterOpen,
}: Props) {
   return (
      <div
         className={`w-full flex flex-col gap-1 ${isFilterOpen ? "" : "xl:pl-[426px]"}`}
      >
         <div className="text-black dark:text-white font-medium tracking-wider uppercase">
            Description
         </div>
         <div className="text-black/80 dark:text-white/80">
            {description || "This playlist has no description"}
         </div>
      </div>
   );
}
