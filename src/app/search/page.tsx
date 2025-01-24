import Container from "@/components/Container";
import { getProducts } from "@/lib/get-products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PromptInput from "@/components/PromptInput"; // Import the PromptInput component
import { ProductDetails } from "@/lib/definitions";
import { Eye } from "lucide-react";

// ProductCard Component
function ProductCard(props: ProductDetails) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-md border bg-card shadow-md transition-all duration-300 ease-in-out hover:shadow-lg">
      <Link href={`/product/${props.id}`} className="relative">
        <div className="relative aspect-square w-full">
          <Image
            src={props.image}
            alt={props.title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <Eye className="h-10 w-10 text-white" aria-hidden="true" />
            <span className="sr-only">View product details</span>
          </div>
        </div>
      </Link>
      <div className="p-4 pb-6">
        <h3 className="line-clamp-2 text-lg font-semibold text-foreground">
          <Link
            href={`/product/${props.id}`}
            className="hover:underline hover:underline-offset-4"
          >
            {props.title}
          </Link>
        </h3>
      </div>
    </div>
  );
}

// HomePage Component
export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <Container className="pt-2">
        <div className="space-y-6">
          {/* Generate Section */}
          <div className="space-y-4">
            <h1 className="bg-gradient-to-br from-foreground to-background/0 bg-clip-text font-inter text-4xl font-semibold leading-[150%] text-transparent">
              Whats on your mind today?
            </h1>
            <div className="">
              <PromptInput />
            </div>
          </div>

          {/* Products Grid */}
          <div className="pt-8">
            {products ? (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
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
