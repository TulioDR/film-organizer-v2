import SearchBar from "../components/navbar/searchbar/SearchBar";

export default function Navbar() {
   return (
      <div className="py-5 w-full sticky top-0 z-10">
         <div className="h-full w-full flex items-center justify-between">
            <SearchBar />
            <div className="h-9 w-9 rounded-full bg-gray-500"></div>
         </div>
      </div>
   );
}
