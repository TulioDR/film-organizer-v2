import Select from "react-select";

import { FieldInputProps, FormikProps } from "formik";
import { useSelector } from "react-redux";
import StoreModel from "@/models/StoreModel";
import { OptionModel } from "@/features/pages/discover/models/DiscoverModel";

interface Props {
   options: OptionModel[];
   field: FieldInputProps<any>;
   form: FormikProps<any>;
}

export default function CustomSelect({ field, form, options }: Props) {
   const { themeColor, isDarkMode } = useSelector(
      (state: StoreModel) => state.theme
   );

   const colors = {
      primary: {
         light: "#e5e7eb",
         dark: "#040603",
      },
      secondary: {
         light: "#FFFFFF",
         dark: "#2a282a",
      },

      light: {
         1: "#000000",
         2: "#616161",
      },
      dark: {
         1: "#FFFFFF",
         2: "#9AA1AD",
      },
   };
   const { primary, secondary, dark, light } = colors;
   return (
      <Select
         instanceId={field.name}
         options={options}
         {...field}
         onChange={(option) => form.setFieldValue(field.name, option)}
         styles={{
            control: (styles) => ({
               ...styles,
               backgroundColor: "transparent",
               borderColor: isDarkMode ? dark[2] : light[2],
            }),
            singleValue: (styles) => ({
               ...styles,
               color: isDarkMode ? dark[1] : light[1],
            }),
            menu: (styles) => ({
               ...styles,
               backgroundColor: isDarkMode ? secondary.dark : secondary.light,
            }),
            option: (styles, state) => ({
               ...styles,
               backgroundColor: state.isSelected ? themeColor : "",
               "&:hover": {
                  ...styles,
                  color: isDarkMode ? dark[1] : light[1],
                  backgroundColor: isDarkMode ? primary.dark : primary.light,
               },
            }),
         }}
      />
   );
}
