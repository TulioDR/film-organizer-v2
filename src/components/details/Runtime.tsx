type Props = { runtime: number };

export default function Runtime({ runtime }: Props) {
   const getMovieDuration = (duration: number): string => {
      var runtime = duration;
      var hours = Math.floor(runtime / 60);
      var minutes = runtime % 60;
      var fullRuntime = `${hours > 0 && `${hours}h`} ${minutes}min`;
      return fullRuntime;
   };
   return (
      <div>{runtime ? getMovieDuration(runtime) : "No Runtime Available"}</div>
   );
}
