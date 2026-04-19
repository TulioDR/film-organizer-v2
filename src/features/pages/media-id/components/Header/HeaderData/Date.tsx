import {
   changeDateFormat,
   daysToRelease,
   isReleased,
} from "@/common/utils/date";

type Props = {
   date: Date;
};

export default function Date({ date }: Props) {
   return (
      <div className="flex gap-1 items-center ">
         <span>{changeDateFormat(date)}</span>
         {!isReleased(date) && <span>(in {daysToRelease(date)} days)</span>}
      </div>
   );
}
