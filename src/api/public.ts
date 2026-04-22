import axios from "axios";

const getBaseURL = () => {
   // Browser always uses relative path
   if (typeof window !== "undefined") {
      return "/api/public";
   }

   // Server-side (SSR)
   // We use 127.0.0.1 instead of "localhost" to prevent AggregateError/ECONNREFUSED
   const host = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:4000";
   return `${host}/api/public`;
};

const API_PUBLIC = axios.create({
   baseURL: getBaseURL(),
});

export default API_PUBLIC;
