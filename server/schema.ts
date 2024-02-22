import { InferSelectModel } from "drizzle-orm";
import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  post: text("post").notNull(),
  link: text("link").notNull(),
  created: timestamp("created").defaultNow(),
});

export type Products = InferSelectModel<typeof products>;
