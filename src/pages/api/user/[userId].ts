import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import prisma from "../../../lib/prisma";

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === "DELETE") {
      try {
         const id = req.query.userId as string;
         const lists = await prisma.list.deleteMany({
            where: { authorId: id as string },
         });

         const supabase = createClient(
            process.env.SUPABASE_URL!,
            process.env.SERVICE_ROLE_KEY!,
            {
               auth: {
                  autoRefreshToken: false,
                  persistSession: false,
               },
            }
         );
         const { error } = await supabase.auth.admin.deleteUser(id);
         res.status(200).json({ error, lists });
      } catch (error: any) {
         res.status(404).json(error);
      }
   }
}
