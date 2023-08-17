import StoreModel from "@/models/StoreModel";
import { Pagination } from "@mantine/core";
import { useSelector } from "react-redux";

type Props = {
   sm?: true;
   people: any[];
   itemsPerPage: number;
   onPaginationChange: (page: number) => void;
};

export default function PeoplePagination({
   sm,
   people,
   itemsPerPage,
   onPaginationChange,
}: Props) {
   const { themeColor, isDarkMode } = useSelector(
      (state: StoreModel) => state.theme
   );
   return (
      <div className="w-full flex justify-center mt-5">
         <Pagination
            size={sm ? "xs" : "md"}
            total={Math.ceil(people.length / itemsPerPage)}
            styles={{
               control: {
                  color: isDarkMode ? "white" : "black",
                  "&[data-active]": { backgroundColor: themeColor },
                  "&[data-active]:not([data-disabled]):hover": {
                     backgroundColor: "white",
                     color: "black",
                  },
               },
            }}
            onChange={onPaginationChange}
         />
      </div>
   );
}
