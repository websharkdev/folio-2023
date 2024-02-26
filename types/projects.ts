import { z } from "zod";

export const ProjectsSchema = z.object({
  name: z.string(),
  link: z.string(),
  type: z.string(),
  tooltip_title: z.string(),
  tooltip_text: z.string(),
  duration: z.string(),
});
