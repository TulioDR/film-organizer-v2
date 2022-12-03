import Select from "react-select";
import { OptionModel } from "../../models/DiscoverModel";

type Props = {
   title: string;
   options: OptionModel[];
   value: OptionModel;
   setValue: any;
};

export default function DropDown({ title, options, value, setValue }: Props) {
   return (
      <div>
         <div className="font-medium mb-1">{title}</div>
         <Select
            options={options}
            value={value}
            onChange={setValue}
            className="shadow-lg text-black"
         />
      </div>
   );
}
