import { useSelector } from "react-redux";

type Props = {
   onClick: () => void;
};

export default function LearnMore({ onClick }: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);

   return (
      <button
         onClick={onClick}
         className="rounded-md h-full text-sm px-3 font-medium font-oswald uppercase"
         style={{ backgroundColor: themeColor }}
      >
         Learn More
      </button>
   );
}
