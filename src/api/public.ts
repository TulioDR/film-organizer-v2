import axios from "axios";

const getBaseURL = () => {
   // 1. If we are in the browser, always use a relative path
   // This is the safest way for client-side calls
   if (typeof window !== "undefined") {
      return "/api/public";
   }

   // 2. If we are on the server (SSR/Build time)
   // Use the Vercel URL in production, or localhost in dev
   return `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/public`;
};

const API_PUBLIC = axios.create({
   baseURL: getBaseURL(),
});

export default API_PUBLIC;
