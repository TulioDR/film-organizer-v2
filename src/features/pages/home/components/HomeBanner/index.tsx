import useHomeContext from "../../context/HomeContext";
import Banner from "@/common/components/Banner";

type Props = {};

export default function HomeBanner({}: Props) {
   const { media, isForward } = useHomeContext();
   const backPath = media.backdrop_path;
   return <Banner backPath={backPath} isForward={isForward} />;
}
