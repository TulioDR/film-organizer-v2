import { useDispatch } from "react-redux";
import { AppDispatch } from "..";

export default function useAppDispatch() {
   return useDispatch<AppDispatch>();
}
