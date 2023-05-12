import Link from "next/link";
import useThemeContext from "../../../context/ThemeContext";

type Props = {
   onClick: () => void;
   id: number;
};

export default function LearnMoreButton({ onClick, id }: Props) {
   const { themeColor } = useThemeContext();
   return (
      <Link
         href={`/movie/${id}`}
         onClick={onClick}
         className="group backdrop-blur drop-shadow-lg px-3 2xl:px-5 border border-white h-full text-sm font-medium relative overflow-hidden text-white flex items-center"
      >
         <div
            style={{ backgroundColor: themeColor }}
            className="absolute h-full top-0 left-0 -z-10 w-0 group-hover:w-full duration-200"
         ></div>
         Learn More
      </Link>
   );
}
