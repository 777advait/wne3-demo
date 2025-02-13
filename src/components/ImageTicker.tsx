import React from "react";
import Image from "next/image";

export default function ImageTicker(props: { images: string[] }) {
  const animationDuration = `${props.images.length * 3}s`;

  return (
    <div className="flex w-full items-center overflow-hidden text-sm font-medium text-muted-foreground">
      <div className="marquee-container max-w-full overflow-hidden whitespace-nowrap">
        <div
          className="marquee-content inline-block"
          style={{ animationDuration: animationDuration }}
        >
          {props.images.map((src, i) => (
            <div
              key={`first-${i}`}
              className="mx-4 inline-block h-auto w-[350px]"
            >
              <Image
                src={src}
                alt={`Ticker image ${i + 1}`}
                loading="eager"
                width={350}
                height={350}
                className="h-full w-full rounded-sm object-cover shadow-md transition-transform"
              />
            </div>
          ))}
          {/* Duplicate images for seamless loop */}
          {props.images.map((src, i) => (
            <div
              key={`second-${i}`}
              className="mx-4 inline-block h-auto w-[350px]"
            >
              <img
                src={src}
                alt={`Ticker image ${i + 1}`}
                className="h-full w-full rounded-sm object-cover shadow-md transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
