import { InferSelectModel } from "drizzle-orm";
import { pgTable, text, timestamp, serial } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  post: text("post").notNull(),
  link: text("link").notNull(),
  created: timestamp("created").defaultNow(),
});

export type Products = InferSelectModel<typeof products>;

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("post").notNull(),
  link: text("link").notNull(),
  type: text("type").notNull(),
  tooltip_title: text("tooltip_title").notNull(),
  tooltip_text: text("tooltip_text").notNull(),
  created: timestamp("created").defaultNow(),
});

export type Projects = InferSelectModel<typeof projects>;
