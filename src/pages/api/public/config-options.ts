import type { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.API_KEY;

export default async function handler(
   _req: NextApiRequest,
   res: NextApiResponse
) {
   const baseUrl = "https://api.themoviedb.org/3/configuration";
   const countriesUrl = `${baseUrl}/countries?api_key=${apiKey}`;
   const languagesUrl = `${baseUrl}/languages?api_key=${apiKey}`;

   try {
      const [countriesRes, languagesRes] = await Promise.all([
         fetch(countriesUrl),
         fetch(languagesUrl),
      ]);

      if (!countriesRes.ok || !languagesRes.ok) {
         return res
            .status(502)
            .json({ error: "Failed to fetch configuration from TMDB" });
      }

      const [countries, languages] = await Promise.all([
         countriesRes.json(),
         languagesRes.json(),
      ]);

      res.status(200).json({ countries, languages });
   } catch (error: any) {
      res.status(404).json(error);
   }
}
