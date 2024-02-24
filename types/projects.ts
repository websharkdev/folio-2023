import { z } from "zod";

const ProjectsTypesSchema = z.enum(["company", "pet-projects", "open-source"]);

export const ProjectsSchema = z.object({
  name: z.string(),
  link: z.string(),
  type: ProjectsTypesSchema,
  tooltip_title: z.string(),
  tooltip_text: z.string(),
});
