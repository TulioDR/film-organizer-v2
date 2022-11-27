import useMediaTypeContext from "../context/MediaTypeContext";

export default function Navbar() {
   const { isMovie } = useMediaTypeContext();
   return (
      <div className="py-5 w-full sticky top-0 z-10">
         <div className="h-full w-full flex items-center justify-between">
            <input
               type="text"
               className="h-9 bg-gray-600 rounded-lg w-96 outline-none pl-5"
               placeholder={`Search ${isMovie ? "Movies" : "TV Shows"}`}
            />
            <div className="h-9 w-9 rounded-full bg-gray-500"></div>
         </div>
      </div>
   );
}
