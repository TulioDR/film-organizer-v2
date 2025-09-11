import Select from "react-select";

import { FieldInputProps, FormikProps } from "formik";
import { useSelector } from "react-redux";
import { OptionModel } from "@/features/pages/discover/models/DiscoverModel";
import Store from "@/common/models/Store";

interface Props {
   options: OptionModel[];
   field: FieldInputProps<any>;
   form: FormikProps<any>;
}

export default function CustomSelect({ field, form, options }: Props) {
   const { themeColor } = useSelector((state: Store) => state.theme);
   return (
      <Select
         {...field}
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
         }}
      />
   );
}
