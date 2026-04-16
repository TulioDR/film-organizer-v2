import MainFilterCard from "@/features/mainFilter/components/MainFilterCard";
import DisplayMediaButton from "./DisplayMediaButton";

type Props = {
   displayMedia: "movie" | "tv" | "all";
   setDisplayMedia: React.Dispatch<
      React.SetStateAction<"movie" | "tv" | "all">
   >;
};

export default function DisplayMediaFilter({
   displayMedia,
   setDisplayMedia,
}: Props) {
   const handleClick = (media: "movie" | "tv" | "all") => {
      setDisplayMedia(media);
   };

   return (
      <MainFilterCard icon={"filter_alt"} name="Display Media">
         <div className="flex gap-1 w-full">
            <DisplayMediaButton
               isSelected={displayMedia === "all"}
               text="All"
               onClick={() => handleClick("all")}
            />
            <DisplayMediaButton
               isSelected={displayMedia === "movie"}
               text="Movies"
               onClick={() => handleClick("movie")}
            />
            <DisplayMediaButton
               isSelected={displayMedia === "tv"}
               text="Series"
               onClick={() => handleClick("tv")}
            />
         </div>
      </MainFilterCard>
   );
}
