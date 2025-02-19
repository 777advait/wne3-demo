"use server";

import { db } from "@/server/db";
import { InsertProduct, SelectProduct } from "./types/product.types";
import { productSchema } from "./schema";
import { eq } from "drizzle-orm";

export async function createProduct(
  data: InsertProduct,
): Promise<{ data: SelectProduct | null; success: boolean; message: string }> {
  try {
    const product = (
      await db.insert(productSchema).values(data).returning()
    )[0];

    if (!product) {
      throw new Error("Failed to create product");
    }

    return {
      success: true,
      data: product,
      message: "Product created successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      data: null,
      message: "Failed to create product",
    };
  }
}

export async function getProduct(
  id: string,
): Promise<{ data: SelectProduct | null; success: boolean; message: string }> {
  try {
    const product = await db.query.productSchema.findFirst({
      where: eq(productSchema.id, id),
    });

    if (!product) {
      return {
        success: false,
        data: null,
        message: "Product not found",
      };
    }

    return {
      success: true,
      data: product,
      message: "Product found successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      data: null,
      message: "Failed to get product",
    };
  }
}

export async function getProducts(limit?: number): Promise<{
  data: SelectProduct[] | null;
  success: boolean;
  message: string;
}> {
  try {
    const products = await db.query.productSchema.findMany({
      limit: limit ?? undefined,
      orderBy: (product, { desc }) => [desc(product.created_at)],
    });

    if (!products) {
      return {
        success: false,
        data: null,
        message: "Failed to fetch products",
      };
    }

    return {
      success: true,
      data: products,
      message: "Products fetched successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      data: null,
      message: "Failed to fetch products",
    };
  }
}
