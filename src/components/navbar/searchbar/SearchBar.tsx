import { useRouter } from "next/router";
import { FormEvent, useRef } from "react";
import useMediaTypeContext from "../../../context/MediaTypeContext";

type Props = {};

export default function SearchBar({}: Props) {
   const { isMovie } = useMediaTypeContext();
   const router = useRouter();
   const input = useRef<HTMLInputElement>(null);

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      const type = isMovie ? "movie" : "tv";
      const value = input.current?.value.toLowerCase();
      router.push(`/results/${type}?search_query=${value}`);
   };
   return (
      <form
         onSubmit={handleSubmit}
         className="w-96 px-5 bg-gray-600 h-9 rounded-lg flex items-center"
      >
         <input
            ref={input}
            type="text"
            className="outline-none flex-1 bg-transparent pr-5"
            placeholder={`Search ${isMovie ? "Movies" : "TV Shows"}`}
         />
         <span className="material-icons text-gray-400">search</span>
      </form>
   );
}
