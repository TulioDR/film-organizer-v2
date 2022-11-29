import type { NextApiRequest, NextApiResponse } from "next";
const apiKey = process.env.API_KEY;
type Data = {
   name: string;
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const [mediaType, filters, page] = req.query.filters!;
   const url = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}&language=en-US&${filters}&include_adult=false&page=${page}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error: any) {
      res.status(404).json(error);
   }
}
