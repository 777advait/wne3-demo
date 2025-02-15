import Container from "@/components/Container";
import React from "react";
import { getProduct } from "@/server/db/queries";
import { ProductPreview } from "@/components/ProductPreview";
import ProductForm from "@/components/ProductForm";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product.success || product.data === null) {
    return (
      <div className="py-20 text-center text-2xl font-semibold text-muted-foreground">
        {product.message}
      </div>
    );
  }

  const productImages = [
    { url: product.data.mockup_url, alt: product.data.title },
    {
      url: "/assets/tshirt-back-view.png",
      alt: `${product.data.title} back view`,
    },
    { url: "/assets/tshirt-detail.png", alt: `${product.data.title} detail` },
    // Add more images as needed
  ];

  const sizes = [
    { id: "xs", value: "XS" },
    { id: "s", value: "S" },
    { id: "m", value: "M" },
    { id: "l", value: "L" },
    { id: "xl", value: "XL" },
    { id: "2xl", value: "XXL" },
    { id: "3xl", value: "XXXL" },
  ];

  const colors = [
    { id: "black", value: "#000000" },
    { id: "white", value: "#FFFFFF" },
    { id: "blue", value: "#0066FF" },
  ];

  return (
    <main>
      <Container>
        <div className="flex gap-8">
          <div className="w-[45%]">
            <ProductPreview images={productImages} title={product.data.title} />
          </div>
          <div className="w-full max-w-[50%] space-y-8 py-4">
            <div className="space-y-4">
              <h1 className="border-b pb-4 text-4xl font-semibold capitalize">
                {product.data.title}
              </h1>
              <p className="font-medium text-muted-foreground">
                {new Date(product.data.created_at).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}{" "}
                •{" "}
                {product.data.time_taken
                  ? product.data.time_taken.toFixed(2)
                  : "N/A"}{" "}
                seconds
              </p>
              <p className="text-muted-foreground">
                100% Organic Cotton, Machine Washable.
              </p>
            </div>
            <ProductForm sizes={sizes} colors={colors} />
          </div>
        </div>
      </Container>
    </main>
  );
}
