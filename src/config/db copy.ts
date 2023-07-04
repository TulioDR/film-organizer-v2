import { createConnection } from "mysql2/promise";

export async function query(query: string, values: any[] = []) {
   const connection = await createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USE,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT as unknown as number,
      database: process.env.DB_DATABASE,
      connectionLimit: 10,
   });

   try {
      const [results] = await connection.execute(query, values);
      connection.end();
      return results;
   } catch (error: any) {
      console.log(error);
      return { error };
   }
}
