// const baseURL = process.env.NEXT_PUBLIC_API_URL;
// const oldBaseURL = "/api/public";

// import axios from "axios";
// const API_PUBLIC = axios.create({ baseURL: baseURL });
// export default API_PUBLIC;

import axios from "axios";

// This check ensures we don't crash during server-side rendering
const getBaseURL = () => {
   if (typeof window !== "undefined") {
      // If we are in the browser, use the current domain + /api/public
      return `${window.location.origin}/api/public`;
   }
   // Fallback for server-side or if window isn't ready
   return process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/public";
};

const API_PUBLIC = axios.create({
   baseURL: getBaseURL(),
});

export default API_PUBLIC;
