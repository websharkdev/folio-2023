import { z } from "zod";

export const ProductSchema = z.object({
  post: z.string(),
  link: z.string(),
});
