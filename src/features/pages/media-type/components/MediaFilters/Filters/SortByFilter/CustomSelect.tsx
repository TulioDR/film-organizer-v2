import Select from "react-select";

import { FieldInputProps, FormikProps } from "formik";
// import { OptionModel } from "@/features/search-media/models/DiscoverModel";

interface Props {}

export default function CustomSelect({}: Props) {
   return (
      <Select
         // {...field}
         menuPortalTarget={document.body}
         menuPosition="fixed" // Tell the menu to use fixed positioning
         menuPlacement="auto" // Tell the menu to dynamically place itself
         // instanceId={field.name}
         options={[
            { value: "popularity.desc", label: "Popularity Descending" },
            { value: "popularity.asc", label: "Popularity Ascending" },
            { value: "release_date.desc", label: "Release Date Descending" },
         ]}
         // onChange={(option) => form.setFieldValue(field.name, option)}
         className="w-full"
         classNames={{
            control: (state: any) =>
               `bg-primary-light dark:bg-primary-dark h-9 outline pl-2 rounded-sm flex ${
                  state.isFocused
                     ? "outline-2 outline-accent"
                     : "outline-1 outline-border-light dark:outline-border-dark"
               }`,
            input: () => `text-black dark:text-white`,
            singleValue: () => `text-black dark:text-white`,
            placeholder: () => `text-black/50 dark:text-white/50`,
            menu: () =>
               `bg-primary-light dark:bg-primary-dark border border-border-light dark:border-border-dark py-2`,
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
            menuPortal: () => `!z-[9999]`,
         }}
         styles={{
            control: () => ({}),
            option: () => ({}),
         }}
      />
   );
}
