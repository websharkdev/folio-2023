"use server";
import { db } from "@/server";
import { ProductSchema } from "@/types/product";
import { createSafeActionClient } from "next-safe-action";
import { revalidatePath } from "next/cache";
import { products, projects } from "./schema";
import { ProjectsSchema } from "@/types/projects";

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

export const createProject = action(
  ProjectsSchema,
  async ({ name, link, type, tooltip_title, tooltip_text, duration }) => {
    try {
      const newProject = await db
        .insert(projects)
        .values({
          name,
          link,
          type,
          tooltip_title,
          tooltip_text,
          duration,
        })
        .returning();
      revalidatePath("/dashboard");
      return { sucsess: newProject };
    } catch (err) {
      return { error: err };
    }
  }
);

export const getProjects = async () => {
  try {
    const data = await db.query.projects.findMany();
    return { sucsess: data };
  } catch (err) {
    return { error: err };
  }
};
