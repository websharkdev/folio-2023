"use server";
import { db } from "@/server";
import { ProductSchema } from "@/types/product";
import { createSafeActionClient } from "next-safe-action";
import { revalidatePath } from "next/cache";
import { products } from "./schema";

export const action = createSafeActionClient();

export const createProduct = action(ProductSchema, async ({ post, link }) => {
  try {
    const newProduct = await db
      .insert(products)
      .values({
        post,
        link,
      })
      .returning();
    revalidatePath("/dashboard");
    return { sucsess: newProduct };
  } catch (err) {
    return { error: err };
  }
});

export const getProduct = async () => {
  try {
    const data = await db.query.products.findMany();
    return { sucsess: data };
  } catch (err) {
    return { error: err };
  }
};
