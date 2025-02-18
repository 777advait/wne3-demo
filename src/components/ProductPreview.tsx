"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductImageGalleryProps {
  images: ProductImage[];
  title: string;
}

export function ProductPreview({ images, title }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]?.url as string);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src={selectedImage || (images[0]?.url as string)}
          alt={title}
          fill={true}
          className="object-cover"
          priority
        />
      </div>

      <ScrollArea>
        <div className="flex gap-4 pb-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.url)}
              className={cn(
                "relative aspect-square w-20 overflow-hidden rounded-lg border-2 transition-colors",
                selectedImage === image.url
                  ? "border-primary"
                  : "border-transparent hover:border-muted-foreground",
              )}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={`${title} view ${index + 1}`}
                fill={true}
                className="object-cover"
                loading="eager"
              />
            </button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
