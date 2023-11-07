import StoreModel from "@/models/StoreModel";
import Link from "next/link";
import { useSelector } from "react-redux";

type Props = {
   mediaType: "tv" | "movie";
   mediaId: number;
   onClick: () => void;
};

export default function LearnMore({ mediaType, mediaId, onClick }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <Link
         href={`/${mediaType}/${mediaId}`}
         scroll={false}
         onClick={onClick}
         onMouseDown={(e) => e.preventDefault()}
         className="rounded-lg h-10 flex-1 flex items-center justify-center text-xs sm:text-sm font-medium font-oswald uppercase text-white"
         style={{ backgroundColor: themeColor }}
      >
         Learn More
      </Link>
   );
}
