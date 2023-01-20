import Link from "next/link";
import useThemeContext from "../../../../context/ThemeContext";

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
         className="rounded-lg group backdrop-blur drop-shadow-lg px-3 border border-gray-500 h-10 text-sm font-medium relative overflow-hidden text-white flex items-center"
      >
         <div
            style={{ backgroundColor: themeColor }}
            className="absolute h-full top-0 left-0 -z-10 w-0 group-hover:w-full duration-200"
         ></div>
         Learn More
      </Link>
   );
}
