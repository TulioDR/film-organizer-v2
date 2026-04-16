import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";

type Props = {
   description: string | undefined;
   isFilterOpen: boolean;
};

export default function PlaylistDetailsDescription({
   description,
   isFilterOpen,
}: Props) {
   return (
      <div className={`w-full  ${isFilterOpen ? "" : "xl:pl-[426px]"}`}>
         <div
            style={{ borderRadius: STANDARD_RADIUS }}
            className="bg-white dark:bg-black border border-border-light dark:border-border-dark flex flex-col gap-1 p-4"
         >
            <div className="text-black dark:text-white text-xl font-medium tracking-wider uppercase">
               Description
            </div>
            <div className="text-black/80 dark:text-white/80 text-xs sm:text-sm">
               {description || "This playlist has no description"}
            </div>
         </div>
      </div>
   );
}
