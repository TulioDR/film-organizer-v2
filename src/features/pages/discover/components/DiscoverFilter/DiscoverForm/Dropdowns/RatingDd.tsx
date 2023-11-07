import DropDown from "../Dropdown";
import ratingImage from "../../../../images/rating.jpg";
import { OptionModel } from "@/features/discover/models/DiscoverModel";

export default function RatingDd() {
   const ratings: OptionModel[] = [
      { value: "", label: "Any Rating" },
      { value: 9, label: "9+" },
      { value: 8, label: "8+" },
      { value: 7, label: "7+" },
      { value: 6, label: "6+" },
      { value: 5, label: "5+" },
      { value: 4, label: "4+" },
      { value: 3, label: "3+" },
      { value: 2, label: "2+" },
      { value: 1, label: "1+" },
   ];
   return (
      <DropDown
         name="vote_average"
         title="Rating"
         options={ratings}
         icon="star_rate"
         image={ratingImage}
      />
   );
}
