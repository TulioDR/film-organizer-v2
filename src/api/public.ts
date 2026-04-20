import axios from "axios";

const getBaseURL = () => {
   if (typeof window !== "undefined") {
      return `${window.location.origin}/api/public`;
   }
   // Fallback for server-side or if window isn't ready
   return process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api/public";
};

const API_PUBLIC = axios.create({
   baseURL: getBaseURL(),
});

export default API_PUBLIC;
