import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/server/schema";

const queryClient = postgres(process.env.DRIZZLE_DATABASE_URL as string, {
  max: 1,
});
export const db = drizzle(queryClient, { schema });
