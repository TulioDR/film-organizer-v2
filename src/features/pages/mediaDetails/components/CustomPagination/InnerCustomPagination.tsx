import { Pagination } from "@mantine/core";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Store from "@/common/models/Store";

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
   const { themeColor } = useSelector((state: Store) => state.theme);
   const { isHidden } = useSelector((state: Store) => state.layout);

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
