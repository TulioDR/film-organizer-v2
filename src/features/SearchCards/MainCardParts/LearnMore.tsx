import useThemeContext from "../../../context/ThemeContext";

type Props = {
   onClick: () => void;
};

export default function LearnMore({ onClick }: Props) {
   const { themeColor } = useThemeContext();
   return (
      <button
         onClick={onClick}
         className="rounded-md h-full text-sm px-3 font-medium"
         style={{ backgroundColor: themeColor }}
      >
         Learn More
      </button>
   );
}
