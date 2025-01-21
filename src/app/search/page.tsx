"use client";

import Container from "@/components/Container";
import { getProducts } from "@/lib/get-products";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import PromptInput from "@/components/PromptInput"; // Import the PromptInput component

// ProductCard Component
function ProductCard(props: {
  id: number;
  title: string;
  image: string;
  description: string;
}) {
  return (
    <div className="cursor-pointer rounded-md border bg-card p-4 shadow-md hover:bg-card/50">
      <div className="space-y-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={props.image}
            alt={props.title}
            width={200}
            height={200}
            className="rounded-md"
          />
        </div>
        <div className="space-y-2">
          <Link
            href={`/product/${props.id}`}
            className="font-semibold underline-offset-4 hover:underline"
          >
            {props.title}
          </Link>
          <p className="truncate text-sm text-muted-foreground">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

// HomePage Component
export default function HomePage() {
  const [products, setProducts] = useState<
    { id: number; title: string; image: string; description: string }[]
  >([]);
  const [inputValue, setInputValue] = useState(""); // State to manage input value

  useEffect(() => {
    console.log("Fetching products..."); // Debugging
    getProducts().then((data) => {
      setProducts(data); // Set the products
    });
  }, []); // Fetch products only once

  return (
    <main>
      <Container className="pt-2">
        <div className="space-y-6">
          {/* Generate Section */}
          <div className="space-y-4">
            <h1 className="font-inter text-4xl font-semibold leading-[150%] text-offwhite">
              Whats on your mind today?
            </h1>
            <div className="">
              <PromptInput
                initialValue={inputValue}
                onValueChange={setInputValue}
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="pt-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}