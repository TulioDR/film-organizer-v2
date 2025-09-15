import { TypedUseSelectorHook, useSelector } from "react-redux";
import { StoreState } from "..";

const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector;

export default useAppSelector;
