import StoreModel from "@/models/StoreModel";
import { Pagination } from "@mantine/core";
import { useSelector } from "react-redux";

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
   const { themeColor, isDarkMode } = useSelector(
      (state: StoreModel) => state.theme
   );

   const { backgroundImage } = useSelector(
      (state: StoreModel) => state.background
   );

   const isDark = backgroundImage ? true : isDarkMode;
   return (
      <div className="w-full flex justify-center">
         <Pagination
            total={total}
            value={value}
            onChange={onChange}
            size={sm ? "xs" : "md"}
            styles={{
               control: {
                  border: "none",
                  color: isDark ? "white" : "black",
                  "&:hover": {
                     color: isDark ? "black" : "white",
                  },
                  "&[data-active]": {
                     backgroundColor: themeColor,
                     color: "white",
                  },
                  "&:not([data-disabled]):hover": {
                     backgroundColor: isDark ? "white" : "black",
                  },
               },
               dots: {
                  color: isDark ? "white" : "black",
               },
            }}
         />
      </div>
   );
}
