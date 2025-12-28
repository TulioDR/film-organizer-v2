import Select from "react-select";

import { FieldInputProps, FormikProps } from "formik";
import useAppSelector from "@/store/hooks/useAppSelector";
import { SelectOption } from "@/features/pages/media-type/models/Filters";

interface Props {
   options: SelectOption[];
   field: FieldInputProps<any>;
   form: FormikProps<any>;
}

export default function CustomSelect({ field, form, options }: Props) {
   const { themeColor } = useAppSelector((state) => state.theme);
   return (
      <Select
         {...field}
         menuPortalTarget={document.body}
         menuPosition="fixed" // Tell the menu to use fixed positioning
         menuPlacement="auto" // Tell the menu to dynamically place itself
         instanceId={field.name}
         options={options}
         onChange={(option) => form.setFieldValue(field.name, option)}
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
