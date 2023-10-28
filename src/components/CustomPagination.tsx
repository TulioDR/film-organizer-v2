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
   return (
      <div className="w-full flex justify-center">
         <Pagination
            size={sm ? "xs" : "md"}
            total={total}
            styles={{
               control: {
                  border: "none",
                  color: isDarkMode ? "white" : "black",
                  "&:hover": {
                     color: isDarkMode ? "black" : "white",
                  },
                  "&[data-active]": {
                     backgroundColor: themeColor,
                     color: "white",
                  },
                  "&:not([data-disabled]):hover": {
                     backgroundColor: isDarkMode ? "white" : "black",
                  },
               },
            }}
            onChange={onPaginationChange}
         />
      </div>
   );
}
