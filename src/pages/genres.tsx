import PageTitle from "../components/PageTitle";
import useMediaTypeContext from "../context/SidebarContext";

export default function Genres() {
   const { isMovie } = useMediaTypeContext();
   return (
      <div>
         <PageTitle>{isMovie ? "Movie" : "TV"} Genres</PageTitle>
      </div>
   );
}
