import Store from "@/common/models/Store";
import { useSelector } from "react-redux";

type Props = {
   children: React.ReactNode;
};

export default function DdHeaderContainer({ children }: Props) {
   const { themeColor } = useSelector((state: Store) => state.theme);
   return (
      <div
         className="-mt-10 rounded-xl relative overflow-hidden"
         style={{
            // boxShadow: `4px 13px 30px 1px ${themeColor}36`,
            backgroundColor: themeColor,
         }}
         // style={{ boxShadow: `4px 13px 30px 1px rgba(252, 56, 56, 0.2)` }}
      >
         {children}
      </div>
   );
}
