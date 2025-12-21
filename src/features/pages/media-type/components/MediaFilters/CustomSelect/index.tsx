import Select from "react-select";

import { OptionModel } from "@/features/pages/media-type/models/DiscoverModel";

interface Props {
   options: OptionModel[];
   onChange: (option: OptionModel) => void;
   value: OptionModel | null;
   menuPlacement?: "auto" | "top" | "bottom";
   isClearable?: true;
}

export default function CustomSelect({
   options,
   onChange,
   value,
   menuPlacement = "auto",
   isClearable,
}: Props) {
   return (
      <Select
         value={value}
         menuPlacement={menuPlacement}
         isClearable={isClearable}
         options={options}
         onChange={(option: OptionModel) => onChange(option)}
         className="w-full"
         classNames={{
            control: (state: any) =>
               `bg-primary-light dark:bg-primary-dark h-9 outline pl-2 rounded-sm flex ${
                  state.isFocused
                     ? "outline-2 outline-accent"
                     : "outline-1 outline-border-light dark:outline-border-dark hover:outline-primary-dark dark:hover:outline-primary-light"
               }`,
            input: () => `text-black dark:text-white`,
            singleValue: () => `text-black dark:text-white`,
            placeholder: () => `text-black/50 dark:text-white/50`,
            menu: () =>
               `bg-primary-light dark:bg-primary-dark border border-border-light dark:border-border-dark py-2 !z-[9999]`,
            option: (state: any) =>
               `text-sm h-8 flex items-center truncate px-2 cursor-pointer
               ${
                  state.isSelected
                     ? `bg-accent text-black`
                     : `text-black dark:text-white ${
                          state.isFocused
                             ? `bg-background-accent-light dark:bg-background-accent-dark`
                             : ""
                       }`
               }`,
            menuPortal: () => `z-[100]`,
         }}
         styles={{
            control: () => ({}),
            option: () => ({}),
         }}
      />
   );
}
