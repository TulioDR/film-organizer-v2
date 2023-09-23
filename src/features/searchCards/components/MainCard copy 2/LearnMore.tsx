import { useSelector } from "react-redux";

type Props = {
   onClick: () => void;
};

export default function LearnMore({ onClick }: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);

   return (
      <button
         onClick={onClick}
         className="rounded-xl h-10 text-sm flex-1 font-medium font-oswald uppercase text-white"
         style={{ backgroundColor: themeColor }}
      >
         Learn More
      </button>
   );
}
