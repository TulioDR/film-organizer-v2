import Select from "react-select";

import { FieldInputProps, FormikProps } from "formik";
// import { OptionModel } from "@/features/search-media/models/DiscoverModel";
import useAppSelector from "@/store/hooks/useAppSelector";

interface Props {}

export default function CustomSelect({}: Props) {
   const { themeColor } = useAppSelector((state) => state.theme);
   return (
      <Select
         // {...field}
         menuPortalTarget={document.body}
         menuPosition="fixed" // Tell the menu to use fixed positioning
         menuPlacement="auto" // Tell the menu to dynamically place itself
         // instanceId={field.name}
         options={[]}
         // onChange={(option) => form.setFieldValue(field.name, option)}
         className="w-full"
         styles={{
            control: (styles) => ({
               ...styles,
               backgroundColor: "transparent",
               borderColor: "#71717a",
            }),
            singleValue: (styles) => ({ ...styles, color: "black" }),
            menu: (styles) => ({
               ...styles,
               backgroundColor: "white",
               color: "black",
            }),
            option: (styles, state) => ({
               ...styles,
               backgroundColor: state.isSelected ? themeColor : "",
               "&:hover": {
                  ...styles,
                  color: "white",
                  backgroundColor: "#24282F",
               },
            }),
            menuPortal: (base) => ({
               ...base,
               zIndex: 9999, // A high zIndex ensures it's on top
            }),
         }}
      />
   );
}
