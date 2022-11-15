import type { NextApiRequest, NextApiResponse } from "next";
const apiKey = process.env.API_KEY;
type Data = {
   name: string;
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const { params } = req.query;
   const mediaType = params![0];
   const page = params![1];
   const url = `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${apiKey}&language=en-US&page=${page}`;
   try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
   } catch (error: any) {
      res.status(404).json(error);
   }
}
