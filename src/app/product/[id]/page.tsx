import Container from "@/components/Container";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ShoppingBag } from "lucide-react";
import { getProduct } from "@/server/db/queries";
import Image from "next/image";
import { ProductPreview } from "@/components/ProductPreview";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

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

  return (
    <main>
      <Container>
        <div className="flex gap-8">
          <div className="w-[45%]">
            <ProductPreview images={productImages} title={product.data.title} />
          </div>
          <div className="max-w-[50%] space-y-4 py-4">
            <h1 className="text-4xl font-semibold">{product.data.title}</h1>
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              provident veritatis dolores magnam dignissimos modi, quas eum
              minus ipsa dolor asperiores exercitationem commodi velit qui animi
              libero incidunt. Reprehenderit, fuga!
            </p>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Size Chart</SelectLabel>
                    <SelectItem value="XS">Extra Small - XS</SelectItem>
                    <SelectItem value="S">Small - S</SelectItem>
                    <SelectItem value="M">Medium - M</SelectItem>
                    <SelectItem value="L">Large - L</SelectItem>
                    <SelectItem value="XL">Extra Large - XL</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <p className="text-lg font-medium">Price: ₹ 1500</p>
            <div className="flex items-center gap-4">
              <Button className="hover:bg-muted" variant="outline">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              <Button>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
