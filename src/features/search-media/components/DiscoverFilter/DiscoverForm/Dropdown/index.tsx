import { Field, FieldProps } from "formik";
import CustomSelect from "./CustomSelect";
import DdHeader from "./DdHeader";
import CardContainer from "../CardContainer";
import { OptionModel } from "@/features/search-media/models/DiscoverModel";

type Props = {
   title: string;
   options: OptionModel[];
   icon: string;
   name: string;
};

export default function DropDown({ title, options, icon, name }: Props) {
   return (
      <CardContainer className="flex flex-col gap-4">
         <DdHeader icon={icon} title={title} />
         <Field
            name={name}
            component={({ field, form }: FieldProps) => (
               <CustomSelect field={field} form={form} options={options} />
            )}
         />
      </CardContainer>
   );
}
