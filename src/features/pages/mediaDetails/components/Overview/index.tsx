import Subtitle from "@/components/Subtitle";

type Props = {
   media: any;
};

export default function Overview({ media }: Props) {
   return (
      <div
         style={{ backdropFilter: "blur(20px)" }}
         className="text-xs sm:text-sm p-8 rounded-2xl bg-black/40 flex flex-col gap-4"
      >
         <Subtitle>Overview</Subtitle>
         <div>
            {media.tagline && (
               <div className="italic font-bold mb-1 text-light-2 dark:text-dark-2">
                  {media.tagline}
               </div>
            )}
            <div>{media.overview || "No overview available"}</div>
         </div>
      </div>
   );
}
