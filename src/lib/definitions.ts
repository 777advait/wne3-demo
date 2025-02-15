import { z } from "zod";

export const promptFormInput = z.object({
  prompt: z
    .string()
    .min(1, { message: "Prompt is required" })
    .max(1000, { message: "Prompt is too long" }),
});

export type ProductDetails = {
  id: number | string;
  title: string;
  image: string;
  description?: string;
};

export const productFormInput = z.object({
  color: z.string().min(1, { message: "Color is required" }),
  size: z.string().min(1, { message: "Size is required" }),
});
