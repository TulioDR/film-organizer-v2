import Select from "react-select";
import useThemeContext from "../../context/ThemeContext";
import { OptionModel } from "../../models/DiscoverModel";

type Props = {
   title: string;
   options: OptionModel[];
   value: OptionModel;
   setValue: any;
   icon: string;
};

export default function DropDown({
   title,
   options,
   value,
   setValue,
   icon,
}: Props) {
   const { themeColor } = useThemeContext();
   return (
      <div className="bg-light-bg-secondary dark:bg-gray-500 rounded-xl shadow-lg p-5">
         <div
            className="-mt-10 w-full h-16 rounded-xl grid place-content-center drop-shadow-lg"
            style={{ backgroundColor: themeColor }}
         >
            <span className="material-icons text-5xl">{icon}</span>
         </div>
         <div className="font-semibold mb-1 text-xl">{title}</div>
         <Select
            options={options}
            value={value}
            onChange={setValue}
            className="text-black"
         />
      </div>
   );
}
