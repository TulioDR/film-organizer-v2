import { STANDARD_RADIUS } from "@/common/constants/STANDARD_RADIUS";
import useAppDispatch from "@/store/hooks/useAppDispatch";
import useAppSelector from "@/store/hooks/useAppSelector";
import { backgroundActions } from "@/store/slices/background-slice";
type Props = {};

export default function BackgroundViewButton({}: Props) {
   const { hideUi } = useAppSelector((state) => state.background);
   const dispatch = useAppDispatch();

   const handleClick = () => {
      dispatch(backgroundActions.toggleBackground());
   };

   return (
      <button
         onClick={handleClick}
         style={{ borderRadius: STANDARD_RADIUS }}
         className={`fixed bottom-4 right-8 w-16 z-10 aspect-square flex items-center justify-center 
            border border-border-light dark:border-border-dark
            hover:border-black dark:hover:border-white
            active:border-black dark:active:border-white 
            bg-white dark:bg-black text-black dark:text-white

         `}
      >
         <span className="material-symbols-outlined">
            {hideUi ? "visibility" : "visibility_off"}
         </span>
      </button>
   );
}
