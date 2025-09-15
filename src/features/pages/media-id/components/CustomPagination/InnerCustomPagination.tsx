import { Pagination } from "@mantine/core";
import { motion } from "framer-motion";
import useAppSelector from "@/store/hooks/useAppSelector";

type Props = {
   sm?: true;
   total: number;
   value: number;
   onChange: (page: number) => void;
};

export default function InnerCustomPagination({
   sm,
   total,
   onChange,
   value,
}: Props) {
   const { themeColor } = useAppSelector((state) => state.theme);
   const { isHidden } = useAppSelector((state) => state.layout);

   return (
      <motion.div
         animate={{ opacity: isHidden ? 0 : 1 }}
         transition={{ duration: 0.2 }}
         className="w-full flex justify-center"
      >
         <Pagination
            total={total}
            value={value}
            onChange={onChange}
            size={sm ? "xs" : "md"}
            styles={{
               control: {
                  border: "none",
                  color: "black",
                  "&:hover": {
                     color: "white",
                  },
                  "&[data-active]": {
                     backgroundColor: themeColor,
                     color: "white",
                  },
                  "&:not([data-disabled]):hover": {
                     backgroundColor: "black",
                  },
               },
               dots: {
                  color: "black",
               },
            }}
         />
      </motion.div>
   );
}
