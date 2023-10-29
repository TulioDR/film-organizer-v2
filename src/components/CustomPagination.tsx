import StoreModel from "@/models/StoreModel";
import { Pagination } from "@mantine/core";
import { useSelector } from "react-redux";

type Props = {
   sm?: true;
   total: number;
   onPaginationChange: (page: number) => void;
};

export default function CustomPagination({
   sm,
   total,
   onPaginationChange,
}: Props) {
   const { themeColor, isDarkMode } = useSelector(
      (state: StoreModel) => state.theme
   );

   const { backgroundImage } = useSelector(
      (state: StoreModel) => state.background
   );

   const isDark = backgroundImage ? true : isDarkMode;
   return (
      <div className="w-full flex justify-center text-light-1 dark:text-dark-1">
         <Pagination
            size={sm ? "xs" : "md"}
            total={total}
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
            onChange={onPaginationChange}
         />
      </div>
   );
}
