import Button from "./Button";

type Props = {
   mediaType: "movie" | "tv";
   setMediaType: React.Dispatch<React.SetStateAction<"movie" | "tv">>;
};

export default function ToggleTypeButton({ mediaType, setMediaType }: Props) {
   return (
      <div className="h-full flex text-white border-l border-border">
         <Button
            icon="movie"
            isSelected={mediaType === "movie"}
            onClick={() => setMediaType("movie")}
         />
         <Button
            icon="tv"
            isSelected={mediaType === "tv"}
            onClick={() => setMediaType("tv")}
         />
      </div>
   );
}
