import { createClient } from "@supabase/supabase-js";

export const createClerkSupabaseClient = (session: any) => {
   return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_KEY!,
      {
         global: {
            fetch: async (url, options = {}) => {
               const clerkToken = await session?.getToken();

               // Construct headers
               const headers = new Headers(options.headers);
               if (clerkToken) {
                  headers.set("Authorization", `Bearer ${clerkToken}`);
               }

               return fetch(url, {
                  ...options,
                  headers,
               });
            },
         },
      },
   );
};
