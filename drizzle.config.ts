import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default {
  schema: "./server/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DRIZZLE_DATABASE_URL as string,
  },
} satisfies Config;
