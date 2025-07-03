import { useSelector } from "react-redux";

type Props = { runtime: number };

export default function Runtime({ runtime }: Props) {
   const { themeColor } = useSelector((state: any) => state.theme);

   const getMovieDuration = (duration: number): string => {
      var runtime = duration;
      var hours = Math.floor(runtime / 60);
      var minutes = runtime % 60;
      var fullRuntime = `${hours > 0 && `${hours}h`} ${minutes}min`;
      return fullRuntime;
   };
   return (
      <div
         style={{ backgroundColor: themeColor }}
         className="w-max rounded-lg py-1 px-2 flex-shrink-0"
      >
         {runtime ? getMovieDuration(runtime) : "No Runtime Available"}
      </div>
   );
}
