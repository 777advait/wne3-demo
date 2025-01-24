import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <div className="absolute -top-1/2 left-1/2 -z-10 h-[1500px] w-[1500px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/assets/noise.png')] opacity-20 mix-blend-overlay" />
      <Container>
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="rounded-full border border-accent bg-card px-4 py-1 text-sm font-medium shadow-md">
            Introducing WNE3 Live 🎉
          </div>
          <h1 className="w-3/4 bg-gradient-to-r from-background/0 via-foreground to-background bg-clip-text text-center text-6xl font-semibold text-transparent">
            Building the next-gen ecommerce experience
          </h1>
          <div className="">
            <Button
              size="lg"
              className="rounded-full bg-foreground px-8 py-1 text-lg font-semibold text-background hover:bg-foreground/90"
              asChild
            >
              <Link href="/search">
                Get Started <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="">
            <Image
              src="/assets/merchandise-store.svg"
              alt="WNE3 Dashboard Preview"
              width={1200}
              height={675}
              className="w-full"
              priority
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
