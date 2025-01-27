import { productSchema } from "@/server/db/schema";

export type SelectProduct = typeof productSchema.$inferSelect;
export type InsertProduct = typeof productSchema.$inferInsert;
export type UpdateProduct = Partial<Omit<SelectProduct, "id">>;
