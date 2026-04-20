import Pivot from "./Pivot";
import Stick from "./Stick";

type Props = {};

export default function ClapperSticks({}: Props) {
   return (
      <div className="w-full aspect-[5/1] flex flex-col gap-1 relative">
         <Pivot />
         <Stick top />
         <Stick />
      </div>
   );
}
