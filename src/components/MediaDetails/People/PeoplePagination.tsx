import StoreModel from "@/models/StoreModel";
import { Pagination } from "@mantine/core";
import { useSelector } from "react-redux";

type Props = {
   people: any[];
   itemsPerPage: number;
   onPaginationChange: (page: number) => void;
};

export default function PeoplePagination({
   people,
   itemsPerPage,
   onPaginationChange,
}: Props) {
   const { themeColor } = useSelector((state: StoreModel) => state.theme);
   return (
      <div className="w-full flex justify-center mt-5">
         <Pagination
            total={Math.ceil(people.length / itemsPerPage)}
            styles={{
               control: {
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
