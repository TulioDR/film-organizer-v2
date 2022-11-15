import Poster from "../../Poster";

type Props = { tv: any };

export default function OnAir({ tv }: Props) {
   return <Poster alt={tv.name} posterPath={tv.poster_path} size="lg" />;
}
