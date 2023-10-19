import { staggerItem } from "@/animations/StaggerCards";
import { OptionModel } from "@/models/DiscoverModel";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { Field, FieldProps } from "formik";
import CustomSelect from "./CustomSelect";
import DdHeader from "./DdHeader";
import DdHeaderContainer from "./DdHeaderContainer";
import DdHeaderBackground from "./DdHeaderBackground";

type Props = {
   title: string;
   options: OptionModel[];
   icon: string;
   image: StaticImageData;
   name: string;
};

export default function DropDown({ title, options, icon, image, name }: Props) {
   return (
      <motion.div
         variants={staggerItem}
         className="bg-primary-light dark:bg-primary-dark rounded-xl p-5 space-y-5"
      >
         <DdHeaderContainer>
            {/* <DdHeaderBackground src={image} alt={title} /> */}
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
