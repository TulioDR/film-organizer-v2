import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/config/supabaseClient";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "GET") {
      try {
         const { authorId } = req.query;
         const { data } = await supabase
            .from("List")
            .select()
            .eq("authorId", authorId)
            .order("createdAt", { ascending: true });
         res.status(200).json(data);
      } catch (error) {
         console.log(error);
         res.json(error);
      }
   }
   if (req.method === "POST") {
      try {
         const { id, name, authorId } = req.body;
         const { status } = await supabase
            .from("List")
            .insert({ id, name, authorId });
         res.status(200).json(status);
      } catch (error) {
         console.log(error);
         res.json(error);
      }
   }
}
