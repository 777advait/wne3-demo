import { z } from "zod";

export const promptFormInput = z.object({
  prompt: z
    .string()
    .min(1, { message: "Prompt is required" })
    .max(1000, { message: "Prompt is too long" }),
});
