import { changeDateFormat, daysToRelease, isReleased } from "@/utils/date";

type Props = {
   date: Date;
};

export default function Date({ date }: Props) {
   return (
      <div className="font-title font-bold text-sm sm:text-lg">
         <span>{changeDateFormat(date)}</span>
         {!isReleased(date) && (
            <span className="ml-1">(in {daysToRelease(date)} days)</span>
         )}
      </div>
   );
}
