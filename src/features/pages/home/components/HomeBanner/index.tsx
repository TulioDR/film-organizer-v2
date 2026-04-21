import useHomeContext from "../../context/HomeContext";
import Banner from "@/common/components/Banner";

type Props = {};

export default function HomeBanner({}: Props) {
   const { currentMedia, direction } = useHomeContext();
   const backPath = currentMedia.backdrop_path;
   return <Banner backPath={backPath} direction={direction} />;
}
