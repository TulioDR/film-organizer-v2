import { Action } from "@/features/layout/navbar/models/ReducerModels";
import Button from "./Button";

type Props = {
   mediaType: "movie" | "tv";
   dispatch: React.Dispatch<Action>;
};

export default function ToggleTypeButton({ mediaType, dispatch }: Props) {
   return (
      <div className="h-full flex text-white border-l-border-width border-border-light dark:border-border-dark">
         <Button
            icon="movie"
            isSelected={mediaType === "movie"}
            onClick={() =>
               dispatch({ type: "CHANGE_MEDIA_TYPE", payload: "movie" })
            }
         />
         <Button
            icon="tv"
            isSelected={mediaType === "tv"}
            onClick={() =>
               dispatch({ type: "CHANGE_MEDIA_TYPE", payload: "tv" })
            }
         />
      </div>
   );
}
