import Button from "./Button";

type Props = {
   isMovie: boolean;
   setIsMovie: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ToggleTypeButton({ isMovie, setIsMovie }: Props) {
   return (
      <div className="h-full flex text-white border-l border-border">
         <Button
            icon="movie"
            isSelected={isMovie}
            onClick={() => setIsMovie(true)}
         />
         <Button
            icon="tv"
            isSelected={!isMovie}
            onClick={() => setIsMovie(false)}
         />
      </div>
   );
}
