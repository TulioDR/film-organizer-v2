import axios from "axios";

const API_PUBLIC = axios.create();

API_PUBLIC.interceptors.request.use((config) => {
   let baseURL = "";

   if (typeof window !== "undefined") {
      // On the browser, use the current domain
      baseURL = `${window.location.origin}/api/public`;
   } else {
      // On the server (Vercel build/SSR), use the Env variable
      // Ensure this includes https:// in your Vercel settings!
      baseURL = `${process.env.NEXT_PUBLIC_SITE_URL}/api/public`;
   }

   config.baseURL = baseURL;
   return config;
});

export default API_PUBLIC;
