import ChangeShowcaseButton from "./ChangeShowcaseButton";

type Props = {
   currentShowcase: "movies" | "series" | "upcoming";
   setCurrentShowcase: React.Dispatch<
      React.SetStateAction<"movies" | "series" | "upcoming">
   >;
};

export default function ChangeShowcase({
   currentShowcase,
   setCurrentShowcase,
}: Props) {
   return (
      <div className="flex space-x-5 overflow-x-auto">
         <ChangeShowcaseButton
            showcase="movies"
            currentShowcase={currentShowcase}
            onClick={() => setCurrentShowcase("movies")}
         >
            Movies on Theaters
         </ChangeShowcaseButton>
         <ChangeShowcaseButton
            showcase="series"
            currentShowcase={currentShowcase}
            onClick={() => setCurrentShowcase("series")}
         >
            Series on Air
         </ChangeShowcaseButton>
         <ChangeShowcaseButton
            showcase="upcoming"
            currentShowcase={currentShowcase}
            onClick={() => setCurrentShowcase("upcoming")}
         >
            Upcoming Movies
         </ChangeShowcaseButton>
      </div>
   );
}
