import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PromptInput from "@/components/PromptInput";
import { ProductDetails } from "@/lib/definitions";
import { ShoppingCart } from "lucide-react";
import { getProducts as getPopularProducts } from "@/server/db/queries";
import { Button } from "@/components/ui/button";
import ImageTicker from "@/components/ImageTicker";

const images = [
  "/assets/castle-in-the-river.png",
  "/assets/cute-couple.png",
  "/assets/farm-robot.png",
  "/assets/floating-library.png",
  "/assets/treehouse-cafe.png",
  "/assets/castle-in-the-river.png",
  "/assets/cute-couple.png",
  "/assets/farm-robot.png",
  "/assets/floating-library.png",
  "/assets/treehouse-cafe.png",
];

// ProductCard Component
function ProductCard(props: ProductDetails) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden text-center">
      <Link href={`/product/${props.id}`} className="relative">
        <div className="aspect-square w-full rounded-sm">
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="rounded-sm object-cover transition-transform duration-300 ease-in-out"
          />
        </div>
      </Link>
      <div className="space-y-2 p-4 pb-6">
        <h3 className="line-clamp-1 font-semibold uppercase text-foreground">
          <Link href={`/product/${props.id}`}>{props.title}</Link>
        </h3>
        <p className="text-sm font-medium text-muted-foreground">
          100% Organic Cotton, Machine Washable
        </p>
        <Button variant="secondary">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

// HomePage Component
export default async function HomePage() {
  const popularProducts = await getPopularProducts(3);

  return (
    <main>
      {/* Top Section */}
      <Container className="pt-2">
        <div className="space-y-4">
          <h1 className="bg-gradient-to-br from-foreground to-background/0 bg-clip-text font-inter text-4xl font-semibold leading-[150%] text-transparent">
            Whats on your mind today?
          </h1>
          <div className="">
            <PromptInput />
          </div>
        </div>
      </Container>

      {/*  Image Ticker Section */}
      <div className="w-full">
        <ImageTicker images={images} />
      </div>

      {/* Bottom Section */}
      <Container>
        <div className="space-y-6">
          {/* Products Grid */}
          <div className="space-y-6 pt-8">
            <h2 className="text-center text-2xl font-semibold uppercase text-foreground/75">
              Popular Products
            </h2>
            {popularProducts.success && popularProducts.data ? (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {popularProducts.data.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.mockup_url}
                    title={product.title}
                  />
                ))}
              </div>
            ) : (
              <div className="py-10 text-center text-2xl font-semibold text-muted-foreground">
                Error fetching products. Please refresh the page.
              </div>
            )}
          </div>

          <div className="space-y-6 pt-8">
            <h2 className="text-center text-2xl font-semibold uppercase text-foreground/75">
              Other Products
            </h2>
            {popularProducts.success && popularProducts.data ? (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {popularProducts.data.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.mockup_url}
                    title={product.title}
                  />
                ))}
              </div>
            ) : (
              <div className="py-10 text-center text-2xl font-semibold text-muted-foreground">
                Error fetching products. Please refresh the page.
              </div>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
