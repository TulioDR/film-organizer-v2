import type { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.API_KEY;

type Data = {
   name: string;
};

export default async function handler(
   _req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const url = `https://api.themoviedb.org/3/configuration/languages?api_key=${apiKey}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error: any) {
      res.status(404).json(error);
   }
}
