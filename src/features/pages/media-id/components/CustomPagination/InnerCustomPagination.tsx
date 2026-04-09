import { Pagination } from "@mantine/core";
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
   const { isDarkMode } = useAppSelector((state) => state.theme);

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
                  color: isDarkMode ? "white" : "black",
                  "&:hover": {
                     color: isDarkMode ? "black" : "white",
                  },
                  "&[data-active]": {
                     backgroundColor: "#CBAB60",
                     color: "white",
                     "&:hover": {
                        backgroundColor: "rgba(203, 171, 96, 0.75) !important",
                     },
                  },
                  "&:not([data-disabled]):hover": {
                     backgroundColor: isDarkMode ? "white" : "black",
                  },
               },
               dots: {
                  color: "black",
               },
            }}
         />
      </div>
   );
}
