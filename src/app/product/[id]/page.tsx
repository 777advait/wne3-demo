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

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <Container>
        <div className="flex gap-8">
          <div className="flex aspect-square w-[45%] flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground text-2xl font-medium text-muted-foreground">
            Generated Mockup Will Appear Here
          </div>
          <div className="max-w-[50%] space-y-6 py-4">
            <h1 className="text-4xl font-semibold">[Product Title]</h1>
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
                <span>
                  <ShoppingCart />
                </span>
                Add to Cart
              </Button>
              <Button>
                <span>
                  <ShoppingBag />
                </span>
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
