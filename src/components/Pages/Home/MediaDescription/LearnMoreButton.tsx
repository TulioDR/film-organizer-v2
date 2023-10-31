import StoreModel from "@/models/StoreModel";
import Link from "next/link";
import { useSelector } from "react-redux";

type Props = {
   onClick: () => void;
   href: string;
};

export default function LearnMoreButton({ onClick, href }: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);

   return (
      <Link
         scroll={false}
         href={href}
         onClick={onClick}
         className="group backdrop-blur drop-shadow-lg px-3 2xl:px-5 border border-white h-full text-sm font-medium relative overflow-hidden flex items-center"
      >
         <div
            style={{ backgroundColor: themeColor }}
            className="absolute h-full top-0 left-0 -z-10 w-0 group-hover:w-full duration-200"
         ></div>
         <span className="uppercase">Learn More</span>
      </Link>
   );
}
