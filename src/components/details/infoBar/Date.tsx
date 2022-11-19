import {
   changeDateFormat,
   daysToRelease,
   isReleased,
} from "../../../utils/date";

type Props = {
   date: string;
};

export default function Date({ date }: Props) {
   return (
      <div>
         <span>{changeDateFormat(date)}</span>
         {!isReleased(date) && (
            <span className="ml-1">(in {daysToRelease(date)} days)</span>
         )}
      </div>
   );
}
