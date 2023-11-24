import { staggerItem } from "@/animations/StaggerCards";

import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { Field, FieldProps } from "formik";
import CustomSelect from "./CustomSelect";
import DdHeader from "./DdHeader";
import DdHeaderContainer from "./DdHeaderContainer";
import { OptionModel } from "@/features/pages/discover/models/DiscoverModel";

type Props = {
   title: string;
   options: OptionModel[];
   icon: string;
   image: StaticImageData;
   name: string;
};

export default function DropDown({ title, options, icon, name }: Props) {
   return (
      <motion.div
         variants={staggerItem}
         className="bg-primary-light dark:bg-primary-dark rounded-xl p-5 space-y-5"
      >
         <DdHeaderContainer>
            <DdHeader icon={icon} title={title} />
         </DdHeaderContainer>
         <Field
            name={name}
            component={({ field, form }: FieldProps) => (
               <CustomSelect field={field} form={form} options={options} />
            )}
         />
      </motion.div>
   );
}
