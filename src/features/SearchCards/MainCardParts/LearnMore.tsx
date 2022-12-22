import useThemeContext from "../../../context/ThemeContext";

type Props = {};

export default function LearnMore({}: Props) {
   const { themeColor } = useThemeContext();
   return (
      <button
         className="rounded-md h-full text-sm px-3 font-medium"
         style={{ backgroundColor: themeColor }}
      >
         Learn More
      </button>
   );
}
