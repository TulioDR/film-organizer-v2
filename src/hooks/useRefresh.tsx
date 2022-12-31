import { useState } from "react";

export default function useRefresh() {
   const [search, setSearch] = useState<boolean>(false);
   const refresh = () => setSearch(!search);

   return { search, refresh };
}
