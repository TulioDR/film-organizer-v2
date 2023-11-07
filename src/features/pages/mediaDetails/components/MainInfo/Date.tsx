import { changeDateFormat, daysToRelease, isReleased } from "@/utils/date";

type Props = {
   date: Date;
};

export default function Date({ date }: Props) {
   return (
      <div className="font-oswald font-bold text-lg">
         <span>{changeDateFormat(date, true)}</span>
         {!isReleased(date) && (
            <span className="ml-1">(in {daysToRelease(date)} days)</span>
         )}
      </div>
   );
}
