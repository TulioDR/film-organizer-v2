import { Action } from "@/features/layout/navbar/models/ReducerModels";
import Button from "./Button";

type Props = {
   mediaType: "movie" | "tv";
   dispatch: React.Dispatch<Action>;
};

export default function ToggleTypeButton({ mediaType, dispatch }: Props) {
   return (
      <div className="h-full aspect-square flex text-white hover:bg-white hover:text-black">
         <div className="w-full h-full flex items-center justify-center">
            <span className="material-symbols-outlined">
               keyboard_arrow_down
            </span>
         </div>
         {/* <Button
            icon="movie"
            isSelected={mediaType === "movie"}
            onClick={() =>
               dispatch({ type: "CHANGE_MEDIA_TYPE", payload: "movie" })
            }
         /> */}
         {/* <Button
            icon="tv"
            isSelected={mediaType === "tv"}
            onClick={() =>
               dispatch({ type: "CHANGE_MEDIA_TYPE", payload: "tv" })
            }
         /> */}
      </div>
   );
}
