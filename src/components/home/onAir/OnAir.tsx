import FrontPoster from "../../FrontPoster";

type Props = { tv: any };

export default function OnAir({ tv }: Props) {
   return (
      <div className="rounded-2xl aspect-[2/3] overflow-hidden shadow-md relative">
         <FrontPoster movie={tv} />
      </div>
   );
}
